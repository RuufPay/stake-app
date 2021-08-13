import React, { useLayoutEffect, useState } from "react";
import { WalletButton } from './WalletButton';
import useWeb3Modal from "./hooks/useWeb3Modal";
import { BrowserRouter } from 'react-router-dom';
import contracts from './contracts';
import Main from './components/Main';

import {
  Row,
  Col,
}  from 'react-bootstrap';

const App = () => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal, chainId, account] = useWeb3Modal();
  const [homeCoinAddress, setHomeCoinAddress] = useState(null);
  const [etherscanUrl, setEtherscanUrl] = useState();

  useLayoutEffect(() => {
    loadHomeCoinAddress();
    etherscanTokenUrl();
  },[chainId]);

  const showWalletMessage = (() => {
    console.log('chainId', chainId);
    console.log('showWalletMessage', contracts.addresses[chainId].homeCoin)
    if (contracts.addresses[chainId].homeCoin === "") return true
    
    console.log('return false');
    return false;
  });

  const loadHomeCoinAddress = () => {
    setHomeCoinAddress(contracts.addresses[chainId].homeCoin);
  }
    
  const etherscanTokenUrl = () => {
    if (chainId === '0x1') setEtherscanUrl(`https://etherscan.io/token/${contracts.addresses[chainId].homeCoin}`);
    else if (chainId === '0x4') setEtherscanUrl(`https://rinkeby.etherscan.io/token/${contracts.addresses[chainId].homeCoin}`);
  }

  return (
    <>
      <BrowserRouter>
          <nav class="navbar-1 navigationscheme navbar navbar-expand-lg py-3">
            <div class="container navbar-container">
              <a class="navbar-brand" href="/"><img src="/stake-app/HomeLogo.png" width="171px" height="64px" alt="RuufPay" /></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <p style={{color:"white"}} class="center">{!window.ethereum?.selectedAddress ? "" : "Connected account: " + window.ethereum?.selectedAddress}</p>
	                  </li>
                  </ul>
                </div>
                <WalletButton
                  provider={provider}
                  loadWeb3Modal={loadWeb3Modal}
                  logoutOfWeb3Modal={logoutOfWeb3Modal}/>
            </div>
          </nav>
          <div id="section-subheader1">
            <div class="container">
    		      <div class="row">
    			      <div class="col-12">
                    {window.ethereum?.selectedAddress ? (
    				        <ul>
						          <li><strong>NETWORK: {contracts.chainsNetworkName[chainId]}</strong></li>
                      <li>&nbsp;-&nbsp;</li>
						          <li class="current"><strong>HOME Coin: <a href={etherscanUrl} rel="noopener noreferrer" target="_blank">{homeCoinAddress}</a></strong></li>
					          </ul>
                    ): ""}
    			      </div>
    		      </div>
    	      </div>
          </div>
          <Row className="pb-5">
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
              { showWalletMessage() === false ? (
                <Main></Main>
              ) : 
                <div id="section-testimonial1">
                  <div class="container">
                    <div class="title1">
                      <h3>WRONG NETWORK. PLEASE, CONNECT TO MAINNET</h3>
                    </div>
                  </div>
                </div>
              }
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
          <div id="section-footer">
            <div class="container">
              <div class="footer-widget">
                <div class="row">
                  <div class="left col-md-6">
                    <a href="/"><img src="/stake-app/HomeLogo.png" width="171px" height="64px" alt="RuffPay" /></a>
                  </div>
                  <div class="right col-md-6">
                    <div class="social-links">
                      <a href="https://twitter.com/ruufpay" rel="noopener noreferrer" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
                      <a href="https://www.facebook.com/ruufpay/" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
                      <a href="https://www.instagram.com/ruufpay/" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
                      <a href="https://t.me/myhomecoin" rel="noopener noreferrer" target="_blank"><i class="fab fa-telegram fa-lg"></i></a>
                      <a href="https://discord.gg/3KqcXd6Agb" rel="noopener noreferrer" target="_blank"><i class="fab fa-discord fa-lg"></i></a>
                      <a href="https://www.reddit.com/r/RuufPay/" rel="noopener noreferrer" target="_blank"><i class="fab fa-reddit fa-lg"></i></a>
                      <a href="https://medium.com/@content_18770" rel="noopener noreferrer" target="_blank"><i class="fab fa-medium fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
	      	</div>
          <div class="footer-copyright container-fluid ">
            <div class="col-12">
              <p>© 2019 Copyrights <a href="https://themeforest.net/user/puricreative/portfolio">PuriCreative</a></p>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
