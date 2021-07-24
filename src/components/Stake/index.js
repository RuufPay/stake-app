import React, { useState, useEffect } from "react";
import contracts from "../../contracts";
import {
    Row,
    Col,
    InputGroup,
    Button,
    Container,
    Card,
    FormControl,
    Modal,
    Spinner
  }  from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import useWeb3Modal from "../../hooks/useWeb3Modal";

/* global BigInt */

const Web3 = require("web3");

const Stake = ({userTokens}) => {
    const [, , , chainId, ] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokensStaked, setUserTokensStaked] = useState(0);
    const [tokensAllowance, setTokensAllowance] = useState(0);
    const [months, setMonths] = useState(1);
    const [ir, setIr] = useState(0);
    const [irTokens, setIrTokens] = useState(0);
    const [showApproveSpinner, setShowApproveSpinner] = useState(false);
    const [showStakeSpinner, setShowStakeSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [approveButtonDisabled, setApproveButtonDisabled] = useState(false);
    const [stakeButtonDisabled, setStakeButtonDisabled] = useState(false);
    const [showApproveButton, setShowApproveButton] = useState(true);

    const interestRate = [
        6.4,
        8.063494719327189,
        9.230397249967415,
        10.159366732596476,
        10.94384605873086,
        11.629571794125695,
        12.24275956974329,
        12.8,
        13.312536467532186,
        13.788382016204057,
        14.23347257964362,
        14.652342304682646,
        15.048542001412848,
        15.424910490721473,
        15.783757275715009,
        16.126989438654378,
        16.456202180212707,
        16.772744922936938,
        17.077770551820448,
        17.372272746207402,
        17.657114728839172,
        17.933051716194476,
        18.200748671050019,
        18.46079449993483,
        18.71371352456234,
        18.95997483780717,
        19.2,
        19.43416942000424,
        19.662827684389425,
        19.8862880381047,
        20,
        20
    ];

    const calculateInterestRate = ((monthsStaked, tokensAmount) => {
        setMonths(monthsStaked);
        setUserTokensStaked(tokensAmount);
        if (monthsStaked <= 0) {
            setIr(0);
            setIrTokens(0);
            return;
        }
        if (monthsStaked > 30) {
            setIr(20);
            setIrTokens(tokensAmount*20/100);
            return;
        }

        setIr(interestRate[monthsStaked]);
        setIrTokens(tokensAmount*interestRate[monthsStaked]/100);
    });

    const changeHomeCoinsAmount = ((amount) => {
        calculateInterestRate(months, amount);
        checkApproveButton();
    });

    const changeMonths = ((monthsStaked) => {
        calculateInterestRate(monthsStaked, userTokensStaked);
    });

    useEffect(() => {
        const getTokenAllowance = async () => {
            const homeCoinAddress = contracts.addresses[chainId].homeCoin;
            const stakeFarmAddress = contracts.addresses[chainId].stakeFarm;
            let homeCoin = new web3.eth.Contract(contracts.homeCoin, homeCoinAddress);

            if (homeCoinAddress !== "" && stakeFarmAddress !== "") {
                const numAllowed = await homeCoin.methods
                    .allowance(window.ethereum.selectedAddress, stakeFarmAddress)
                    .call({ from: window.ethereum.selectedAddress });

                setTokensAllowance(numAllowed);
                checkApproveButton();
            }
        }

        getTokenAllowance();
    }, [tokensAllowance,userTokensStaked, chainId]);

    const approveStakeTokens = async () => {
        try {
            setShowApproveSpinner(true);
            setApproveButtonDisabled(true);

            const homeCoinAddress = contracts.addresses[chainId].homeCoin;
            const stakeFarmAddress = contracts.addresses[chainId].stakeFarm;
            let homeCoin = new web3.eth.Contract(contracts.homeCoin, homeCoinAddress);
            const max_tokens = 2**64 - 1;

            const tx = await homeCoin.methods
                .approve(stakeFarmAddress, web3.utils.toWei(max_tokens.toString()))
                .send({ from: window.ethereum.selectedAddress });

            setTokensAllowance(max_tokens);
            console.log(tx);
        }
        finally {
            setShowApproveSpinner(false);
            setApproveButtonDisabled(false);
            checkApproveButton();
        }
    }

    const stakeTokens = async () => {
        try {
            setShowModal(false);
            setShowStakeSpinner(true);
            setStakeButtonDisabled(true);

            const stakeFarmAddress = contracts.addresses[chainId].stakeFarm;
            const stakeFarm = new web3.eth.Contract(contracts.stakeFarm, stakeFarmAddress);
            const tx = await stakeFarm.methods
                .stake(window.ethereum.selectedAddress, web3.utils.toWei(userTokensStaked.toString()))
                .send({ from: window.ethereum.selectedAddress });

            console.log(tx);
        }
        finally {
            setShowStakeSpinner(false);
            setStakeButtonDisabled(false);
            window.location.reload();
        }
    }

    const onMax = () => {
        setUserTokensStaked(userTokens);
    }

    const checkApproveButton = () => {
        if (userTokensStaked !== "") {
            if (tokensAllowance === 0) return true;
            setShowApproveButton(BigInt(tokensAllowance) < BigInt(web3.utils.toWei(userTokensStaked.toString())));
        } else {
            setShowApproveButton(false);
        }
    }

    const isDisabledStake = () => {
        if (Number(userTokensStaked) === 0) return true;   
        if (userTokensStaked !== "") return (BigInt(tokensAllowance) < BigInt(web3.utils.toWei(userTokensStaked.toString())));

        return true;
    }

    return (
        <div>
            { userTokens > 0 ? (
            <Card className="text-center">
                <Card.Body>
                    <Card.Title className="mb-3">Stake your HomeCoins to earn more</Card.Title>
                    <Card.Text>Enter the amount of tokens you want to stake.</Card.Text>
                    <Container fluid>
                        <Row className="mt-3">
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text className="px-3">HomeCoins</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="number" value={userTokensStaked} onChange={ event => changeHomeCoinsAmount(event.target.value) } placeholder="Enter the amount to stake" />
                                    <Button onClick={() => onMax()}>Max</Button>
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={2}></Col>
                        </Row>
                        <Row hidden="true" className="mt-3">
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}>
                                <Card.Text >Simulate how many HomeCoins you can earn (<NumberFormat displayType={'text'} value={irTokens} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} suffix={' HomeCoins'} />)</Card.Text>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text className="px-3">Months in stake</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="number" defaultValue={months} onChange={ event => changeMonths(event.target.value) } placeholder="Enter the months in stake" />
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={2}></Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}></Col>
                            <Col xs={12} md={2}></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                {showApproveButton ? (
                                    <Button disabled={approveButtonDisabled} onClick={() => approveStakeTokens()} className="mx-3 my-3 px-5">
                                        { showApproveSpinner ? (<Spinner animation="border" size="sm" className="mr-2" />) : "" }
                                        Approve
                                    </Button>
                                ):
                                <Button disabled={isDisabledStake() || stakeButtonDisabled} onClick={() => setShowModal(true)} className="my-3 px-5">
                                    { showStakeSpinner ? (<Spinner animation="border" size="sm" className="mr-2" />) : "" }
                                    Stake
                                </Button>}
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            ) : "" }
            <Modal show={showModal}>
                <Modal.Header closeButton onClick={() => setShowModal(false)}>
                    <Modal.Title>Stake farm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You are going to send <NumberFormat displayType={'text'} value={userTokensStaked} thousandSeparator={true} decimalSeparator={"."} decimalScale={6} /> tokens to the farm.</p>
                    <p>Are you sure?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>No</Button>
                    <Button variant="primary" onClick={() => stakeTokens()}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Stake;