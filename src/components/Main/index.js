import React, { useState, useEffect } from "react";
import contracts from "../../contracts";
import {
    Row,
    Col,
    Button,
    Container,
    Card
  }  from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Stake from '../Stake';
import Withdraw from '../Withdraw';
import useWeb3Modal from "../../hooks/useWeb3Modal";

const Web3 = require("web3");

const Main = () => {
    const [, , , chainId, account] = useWeb3Modal();
    const web3 = new Web3(window.ethereum);
    const [userTokens, setUserTokens] = useState(0);

    useEffect(() => {
        const loadTokensFromAccount = async (chainId) => {
            const homeCoinAddress = contracts.addresses[chainId].homeCoin;
            if (homeCoinAddress != "") {
                let token = new web3.eth.Contract(contracts.homeCoin, homeCoinAddress);
                const tokens = await token.methods
                    .balanceOf(window.ethereum.selectedAddress)
                    .call({ from: window.ethereum.selectedAddress });
                          
                setUserTokens(web3.utils.fromWei(tokens,'ether'));
            }
        }
          
        loadTokensFromAccount(chainId);
      },[chainId, account]);

    return (
        <div>
            <Card className="text-center mt-3" style={{ border: '0px' }}>
                <Card.Body>
                    { userTokens > 0 ? (
                        <Card.Title>You have <NumberFormat displayType={'text'} value={userTokens} thousandSeparator={true} decimalSeparator={"."} decimalScale={2} /> HomeCoins in your wallet</Card.Title>
                    ) : (
                        <div>
                            <Card.Title>You don't have any HomeCoin yet</Card.Title>
                            <Card.Text>You can go to <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xAF585c15daB8C363087c572758AC75E82C467579&use=V2" target="_blank">Uniswap</a> to buy HomeCoins</Card.Text>
                        </div>
                    )}
                </Card.Body>
            </Card>
            <Stake userTokens={userTokens}/>
            <Withdraw />
        </div>
    );
}

export default Main;