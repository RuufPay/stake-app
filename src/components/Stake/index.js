import React, { useState, useEffect } from "react";
import contracts from "../../contracts";
import {
    Button,
    Modal,
    Spinner
  }  from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import useWeb3Modal from "../../hooks/useWeb3Modal";

import {
    sleep,
    gasPrice
} from '../../helper';

/* global BigInt */

const Web3 = require("web3");

const Stake = ({userTokens}) => {
    const [, , , chainId, account] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokensStaked, setUserTokensStaked] = useState(0);
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
            const homeCoinAddress = contracts.addresses[chainId]?.homeCoin;
            const stakeFarmAddress = contracts.addresses[chainId]?.stakeFarm;
            let homeCoin = new web3.eth.Contract(contracts.homeCoin, homeCoinAddress);

            if (homeCoinAddress !== "" && stakeFarmAddress !== "") {
                // Sometimes Metamask fails when loading, so keep trying max 5 fives
                let done = false;
                let count = 0;
                do {
                    try {
                        const numAllowed = await homeCoin.methods
                        .allowance(window.ethereum.selectedAddress, stakeFarmAddress)
                        .call({ from: window.ethereum.selectedAddress });
                        
                        if (numAllowed > 0) setShowApproveButton(false);
                        else setShowApproveButton(true);

                        done = true;
                    } catch(e) {
                        console.log('getTokenAllowance:', e);
                        count++;
                        await sleep(3000);
                    }
                } while ((done == false) && (count < 5));

                changeHomeCoinsAmount(0);
            }
        }

        getTokenAllowance();
    }, [chainId]);

    const changeHomeCoinsAmount = ((amount) => {
        setUserTokensStaked(amount);
        setStakeButtonDisabled(amount == 0 || months == 0);
    });

    const changeStakeMonths = (months) => {
        setMonths(months);
        setStakeButtonDisabled(userTokensStaked == 0 || months == 0);
    }

    const approveStakeTokens = async () => {
        try {
            setShowApproveSpinner(true);
            setApproveButtonDisabled(true);

            const homeCoinAddress = contracts.addresses[chainId]?.homeCoin;
            const stakeFarmAddress = contracts.addresses[chainId]?.stakeFarm;
            let homeCoin = new web3.eth.Contract(contracts.homeCoin, homeCoinAddress);
            const max_tokens = 2**64 - 1;
            const maxGasPrice = await gasPrice(window.ethereum);

            await homeCoin.methods
                .approve(stakeFarmAddress, web3.utils.toWei(max_tokens.toString()))
                .send({ from: window.ethereum.selectedAddress, gasPrice: maxGasPrice });

            setShowApproveButton(false);
        } catch(e) {
            console.log(e);
            setShowApproveButton(true);
        }
        finally {
            setShowApproveSpinner(false);
            setApproveButtonDisabled(false);
        }
    }

    const stakeTokens = async () => {
        try {
            setShowModal(false);
            setShowStakeSpinner(true);
            setStakeButtonDisabled(true);
            const maxGasPrice = await gasPrice(window.ethereum);

            const stakeFarmAddress = contracts.addresses[chainId]?.stakeFarm;
            const stakeFarm = new web3.eth.Contract(contracts.stakeFarm, stakeFarmAddress);
            await stakeFarm.methods
                .stake(web3.utils.toWei(userTokensStaked.toString()), months)
                .send({ from: window.ethereum.selectedAddress, gasPrice: maxGasPrice });

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