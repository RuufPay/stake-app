import React, { useState, useEffect } from "react";
import contracts from "../../contracts";
import {
    Button,
    Modal,
    Spinner
  }  from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import useWeb3Modal from "../../hooks/useWeb3Modal";

/* global BigInt */

const Web3 = require("web3");

const Stake = ({userTokens}) => {
    const [, , , chainId, account] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokensStaked, setUserTokensStaked] = useState(0);
    const [tokensAllowance, setTokensAllowance] = useState(0);
    const [months, setMonths] = useState(0);
    const [showApproveSpinner, setShowApproveSpinner] = useState(false);
    const [showStakeSpinner, setShowStakeSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [approveButtonDisabled, setApproveButtonDisabled] = useState(false);
    const [stakeButtonDisabled, setStakeButtonDisabled] = useState(false);
    const [showApproveButton, setShowApproveButton] = useState(true);
    const [disableMainnet, setDisableMainnet] = useState(false);
    const [disabledPopup, setDisabledPopup] = useState(false);

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
                changeHomeCoinsAmount(0);
            }
        }

        getTokenAllowance();
    }, [tokensAllowance, chainId]);

    const checkApproveButton = () => {
        if (userTokensStaked > 0) {
            setShowApproveButton(BigInt(tokensAllowance) < BigInt(web3.utils.toWei(userTokensStaked.toString())));
        } else {
            setShowApproveButton(false);
        }
    }

    const changeHomeCoinsAmount = ((amount) => {
        setUserTokensStaked(amount);
        checkApproveButton();
        setStakeButtonDisabled(amount === 0 || months === 0);
    });

    const changeStakeMonths = (months) => {
        setMonths(months);
        setStakeButtonDisabled(userTokensStaked === 0 || months === 0);
    }

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
            setStakeButtonDisabled(false);
            console.log(tx);
        } catch(e) {
            console.log(e);
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
                .stake(web3.utils.toWei(userTokensStaked.toString()), months)
                .send({ from: window.ethereum.selectedAddress });

            console.log(tx);

            setShowStakeSpinner(false);
            setStakeButtonDisabled(false);
            window.location.reload();
        } catch(e) {
            console.log(e);
            setShowStakeSpinner(false);
            setStakeButtonDisabled(false);
        }
    }

    const onMax = () => {
        setUserTokensStaked(userTokens);
    }

    const isDisabledStake = () => {
        if (Number(userTokensStaked) === 0) return true;   
        if (userTokensStaked !== "") return (BigInt(tokensAllowance) < BigInt(web3.utils.toWei(userTokensStaked.toString())));

        return true;
    }

    return (
        <div>
            { userTokens > 0 ? (
            <div id="section-subscribe1">
                <div class="container">
                    <div class="row">
                        <div class="title1 col-12">
                            <h3 class="clscheme">Stake your Ruuf Coins to earn more</h3>
                        </div>
                        <div class="form col-12 ez-animate text-center" data-animation="fadeInUp">
                            <p class="bolder">Enter the amount of Ruuf Coins you want to stake and the period of time.</p>
                            <select onChange={ event => changeStakeMonths(event.target.value) }>
                                <option value="0">Select the period in months...</option>
                                <option value="3">3 Months (2% rewards)</option>
                                <option value="6">6 Months (6% rewards)</option>
                                <option value="9">9 Months (11% rewards)</option>
                                <option value="12">12 Months (18.32% rewards)</option>
                            </select>
                            <p></p>
                        </div>
                        <div class="form col-12 ez-animate text-center" data-animation="fadeInUp">
                            <input type="number" placeholder="0" value={userTokensStaked} onChange={ event => changeHomeCoinsAmount(event.target.value) } />
                            <button type="" class="shadow1 bgscheme" onClick={() => onMax()}>MAX</button>
                            <div>
                                {showApproveButton ? (
                                    <button disabled={approveButtonDisabled} onClick={() => approveStakeTokens()} class="shadow1 style3 bgscheme mx-3 my-3 px-5">
                                        { showApproveSpinner ? (<Spinner animation="border" size="sm" className="mr-2" />) : "" }
                                        APPROVE
                                    </button>
                                ):
                                <button disabled={stakeButtonDisabled} onClick={() => disableMainnet ? setDisabledPopup(true) : setShowModal(true)} class="shadow1 style3 bgscheme mt-5">
                                    { showStakeSpinner ? (<Spinner animation="border" size="sm" className="mr-2" />) : "" }
                                    STAKE
                                </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : "" }
            <div>
            <Modal show={showModal}>
                <Modal.Header closeButton onClick={() => setShowModal(false)}>
                    <Modal.Title>Stake Farm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You are going to stake <NumberFormat displayType={'text'} value={userTokensStaked} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> tokens in the farm for the next {months} months.</p>
                    <p>Are you sure?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => stakeTokens()}>Yes</Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>No</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={disabledPopup}>
            <Modal.Header closeButton onClick={() => setDisabledPopup(false)}>
                <Modal.Title>Coming soon...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Staking is almost finished with testing. Check back shortly.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setDisabledPopup(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
}

export default Stake;