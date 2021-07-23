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

const Web3 = require("web3");

const Withdraw = () => {
    const [, , , chainId, account] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokensStaked, setUserTokensStaked] = useState(0);
    const [userTokenRewards, setUserTokenRewards] = useState(0);
    const [stakeDate, setStakeDate] = useState(0);
    const [diffStakeDate, setDiffStakeDate] = useState('');
    const [months, setMonths] = useState(1);
    const [ir, setIr] = useState(0);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [withdrawalButtonDisabled, setWithdrawalButtonDisabled] = useState(true);

    useEffect(() => {
        const getTokensStakedInFarm = async () => {
            const stakeFarmAddress = contracts.addresses[chainId].stakeFarm;
            let stakeFarm = new web3.eth.Contract(contracts.stakeFarm, stakeFarmAddress);

            if (stakeFarmAddress !== "") {
                const userData = await stakeFarm.methods
                    .getUserData(window.ethereum.selectedAddress)
                    .call({ from: window.ethereum.selectedAddress });

                setUserTokensStaked(web3.utils.fromWei(userData.homeTokens.toString(),'ether'));
                setUserTokenRewards(web3.utils.fromWei(userData.pendingRewards.toString(),'ether'));
                setStakeDate(new Date(userData.stakeDate * 1e3).toUTCString());
                setDiffStakeDate(timeDiffCalc(Date.now(), new Date(userData.stakeDate * 1e3)));
                setIr(userData.multiplier);
                setWithdrawalButtonDisabled(false);
            }
        }

        getTokensStakedInFarm();
    }, [chainId,account]);

    const withdrawTokens = async () => {
        try {
            setShowModal(false);
            setShowSpinner(true);
            setWithdrawalButtonDisabled(true);

            const stakeFarmAddress = contracts.addresses[chainId].stakeFarm;
            const stakeFarm = new web3.eth.Contract(contracts.stakeFarm, stakeFarmAddress);
            const tx = await stakeFarm.methods
                .withdraw()
                .send({ from: window.ethereum.selectedAddress });

            console.log(tx);
        }
        finally {
            setShowSpinner(false);
            setWithdrawalButtonDisabled(false);
            window.location.reload();
        }
    }

    const timeDiffCalc = (dateFuture, dateNow) => {
        let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
    
        // calculate days
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;
    
        // calculate hours
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
    
        // calculate minutes
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;
    
        let difference = '';
        if (days > 0) {
          difference += (days === 1) ? `${days} day, ` : `${days} days, `;
        }
    
        difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;
    
        difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 
    
        return difference;
      }

    return (
        <div>
            { userTokensStaked > 0 ? (
            <Card className="text-center mt-3">
                <Card.Body>
                    <Card.Title>Withdraw your tokens</Card.Title>
                    <Container fluid>
                        <Card.Text>Stake date: {stakeDate}</Card.Text>
                        <Card.Text>Staked for {diffStakeDate}</Card.Text>
                        <Card.Text>
                            <NumberFormat displayType={'text'} value={userTokensStaked} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> tokens staked.
                        </Card.Text>
                        <Card.Text>
                            <NumberFormat displayType={'text'} value={userTokenRewards} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> tokens as intereset rate.
                        </Card.Text>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Button disabled={withdrawalButtonDisabled} onClick={() => setShowModal(true)} className="my-3 px-5">
                                    { showSpinner ? (<Spinner animation="border" size="sm" className="mr-2" />) : "" }
                                    Withdraw
                                </Button>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            ) : "" }
            <Modal show={showModal}>
                <Modal.Header closeButton onClick={() => setShowModal(false)}>
                    <Modal.Title>Withdraw tokens</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You are going to get:</p>
                    <p><NumberFormat displayType={'text'} value={userTokensStaked} thousandSeparator={true} decimalSeparator={"."} decimalScale={6} /> tokens staked.</p>
                    <p><NumberFormat displayType={'text'} value={userTokenRewards} thousandSeparator={true} decimalSeparator={"."} decimalScale={6} /> tokens as intereset rate.</p>
                    <p>Are you sure?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>No</Button>
                    <Button variant="primary" onClick={() => withdrawTokens()}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Withdraw;