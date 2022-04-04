import React, { useState, useLayoutEffect } from "react";
import contracts from "../../contracts";
import NumberFormat from 'react-number-format';
import Stake from '../Stake';
import Withdraw from '../Withdraw';
import useWeb3Modal from "../../hooks/useWeb3Modal";

const Web3 = require("web3");

const sleep = async (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis));
}

const Main = () => {
    const [, , , chainId, account] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokens, setUserTokens] = useState(null);
    const [stakedTokens, setStakedTokens] = useState(null);

    useLayoutEffect(() => {
        const loadTokensFromAccount = async (chainId) => {
            // Sometimes Metamask fails when loading, so keep trying max 5 fives
            let done = false;
            let count = 0;
            do {
                try {
                    const homeCoinAddress = contracts.addresses[chainId].homeCoin;
                    if (homeCoinAddress !== "") {
                        let token = new web3.eth.Contract(contracts.homeCoin, homeCoinAddress);
                        const tokens = await token.methods
                            .balanceOf(window.ethereum.selectedAddress)
                            .call({ from: window.ethereum.selectedAddress });   
                            
                        setUserTokens(web3.utils.fromWei(tokens,'ether'));
                    }
    
                    const stakeFarmAddress = contracts.addresses[chainId].stakeFarm;
                    if (stakeFarmAddress !== "") {
                        let stakeFarm = new web3.eth.Contract(contracts.stakeFarm, stakeFarmAddress);
                        const data = await stakeFarm.methods
                            .getUserData(window.ethereum.selectedAddress)
                            .call({ from: window.ethereum.selectedAddress });
                            
                        setStakedTokens(web3.utils.fromWei(data.homeTokens.toString(),'ether'));
                    }

                    done = true;
                } catch(e) {
                    console.log('loadTokensFromAccount', e);
                    count++;
                    await sleep(3000);
                }
            } while ((done == false) && (count < 5));
        } 

        loadTokensFromAccount(chainId);
    },[chainId, account]);

    const showWalletMessage = (() => {
        const uTokens = userTokens === null ? 0 : userTokens;
        const sTokens = stakedTokens === null ? 0 : stakedTokens;

        if ((uTokens == 0) && (sTokens == 0)) return true;
        
        return false;
    });

    return (
        <div>
            <div id="section-testimonial1">
                <div class="container">
                    <div class="title1">
                        { window.ethereum?.selectedAddress ? (
                            <div>
                            { userTokens > 0 ? (
                                <h3>You have <NumberFormat displayType={'text'} value={userTokens} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> Ruuf Coins in your wallet</h3>
                            ) : (
                                <div>
                                    { (showWalletMessage()) ? (
                                        <div id="section-nocoins">
                                            <h3>You don't have any Ruuf Coins in your wallet</h3>
                                            <p></p>
                                            <p><a href="https://app.sushi.com/swap?outputCurrency=0x182f1d39df9460d7aef29afbc80bbd68ed0a41d5" rel="noopener noreferrer" target="_blank">Buy RUUF on Sushiswap</a></p>
                                            <p>or</p>
                                            <p><a href="https://coinsbit.io/trade/HOME_USDT" rel="noopener noreferrer" target="_blank">Buy RUUF on Coinsbit</a></p>
                                        </div>
                                    ) : "" }
                                </div>
                            )}
                            </div>
                        ) : 
                            <div class="container">
                                <h3>Earn up to 18.32% in staking rewards. Connect a wallet.</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
            { Number(stakedTokens) === 0 ? (
                <Stake userTokens={userTokens}/>
            ) : (
                <Withdraw />
            ) }
        </div>
    );
}

export default Main;