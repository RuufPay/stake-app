import React, { useState, useLayoutEffect } from "react";
import contracts from "../../contracts";
import {
    Button,
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

    useLayoutEffect(() => {
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

    const totalTokensWithdraw = () => {
        return Number(userTokensStaked) + Number(userTokenRewards);
    }

    return (
        <div>
            { userTokensStaked > 0 ? (
            <div id="section-subscribe1">
                <div class="container">
                    <div class="row">
                        <div class="title1 col-12">
                            <h3 class="clscheme">Withdraw your tokens</h3>
                        </div>
                        <div class="form col-12 ez-animate text-center" data-animation="fadeInUp">
                            <h3>Home Coins staked: <NumberFormat displayType={'text'} value={userTokensStaked} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /></h3>
                            <p></p>
                            <p>Stake date: {stakeDate}</p>
                            <p></p>
                            <p></p>
                            <p>Staked for {diffStakeDate}</p>
                            <p></p>
                            <p>
                                <NumberFormat displayType={'text'} value={userTokenRewards} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> tokens as intereset rate.
                            </p>
                            <p></p>
                            <button disabled={withdrawalButtonDisabled} onClick={() => setShowModal(true)} class="shadow1 style3 bgscheme mt-5">
                                { showSpinner ? (<Spinner animation="border" size="sm" class="mr-2" />) : "" }
                                WITHDRAW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ) : "" }
            <Modal show={showModal}>
                <Modal.Header closeButton onClick={() => setShowModal(false)}>
                    <Modal.Title>Withdraw tokens</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You are going to withdraw <NumberFormat displayType={'text'} value={totalTokensWithdraw()} thousandSeparator={true} decimalSeparator={"."} decimalScale={2}/> Home Coins</p>
                    <p>Are you sure?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => withdrawTokens()}>Yes</Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>No</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Withdraw;