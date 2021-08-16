import React, { useState, useLayoutEffect } from "react";
import contracts from "../../contracts";
import NumberFormat from 'react-number-format';
import Stake from '../Stake';
import Withdraw from '../Withdraw';
import useWeb3Modal from "../../hooks/useWeb3Modal";

const Web3 = require("web3");

const Main = () => {
    const [, , , chainId, account] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokens, setUserTokens] = useState(null);
    const [stakedTokens, setStakedTokens] = useState(null);

    useLayoutEffect(() => {
        const loadTokensFromAccount = async (chainId) => {
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
        }
          
        loadTokensFromAccount(chainId);
    },[chainId, account]);

    const showWalletMessage = (() => {
        if ((userTokens == null) && (stakedTokens == null)) return true
        else if ((userTokens == 0) && (stakedTokens == 0)) return true
        
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
                                <h2>You have <NumberFormat displayType={'text'} value={userTokens} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> Home Coins in your wallet</h2>
                            ) : (
                                <div>
                                    { (showWalletMessage()) ? (
                                        <div>
                                            <h2>You don't have any Home Coins in your wallet</h2>
                                            <p><a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xAF585c15daB8C363087c572758AC75E82C467579&use=V2" rel="noopener noreferrer" target="_blank">Buy HOME on Uniswap</a></p>
                                        </div>
                                    ) : "" }
                                </div>
                            )}
                            </div>
                        ) : 
                            <div>
                                <h3>Please, connect your wallet</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
            { stakedTokens === 0 ? (
                <div>
                    <Stake userTokens={userTokens}/>
                    <p></p>
                    <Withdraw />
                </div>
            ) : (
                <div>
                    <Withdraw />
                    <Stake userTokens={userTokens}/>
                </div>
            ) }
        </div>
    );
}

export default Main;