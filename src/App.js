import React, { useEffect, useState } from "react";
import { WalletButton } from './WalletButton';
import useWeb3Modal from "./hooks/useWeb3Modal";
import { BrowserRouter } from 'react-router-dom';
import contracts from './contracts';
import Main from './components/Main';

import {
  Row,
  Col,
  Container,
  Navbar
}  from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal, chainId, ] = useWeb3Modal();
  const [homeCoinAddress, setHomeCoinAddress] = useState('');
  const [etherscanUrl, setEtherscanUrl] = useState('');

  useEffect(() => {
    loadHomeCoinAddress();
    etherscanTokenUrl();
  },[chainId]);

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
        <Container fluid="true">
          <Row>
            <Col>
              <Navbar expand="lg" sticky="top" className="px-5">
                <Navbar.Brand href="/stake-app">
                <img
                  alt=""
                  src="/stake-app/HomeLogo.png"
                  width="171px"
                  height="64px"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="d-flex justify-content-end align-items-center">
                  <Row>
                    <Col><p style={{color:"white"}} className="text-right">{!window.ethereum?.selectedAddress ? "" : window.ethereum?.selectedAddress}</p></Col>
                    <Col>                    
                      <WalletButton
                        provider={provider}
                        loadWeb3Modal={loadWeb3Modal}
                        logoutOfWeb3Modal={logoutOfWeb3Modal}/>
                    </Col>
                  </Row>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
          {window.ethereum ? (
          <Row>
            <Col>
                <div>
                  <p className="text-right"></p>
                  <p className="text-right mr-5"><strong>NETWORK: {contracts.chainsNetworkName[chainId]} HOMECoin: <a href={etherscanUrl} rel="noopener noreferrer" target="_blank">{homeCoinAddress}</a></strong></p>
                </div>
            </Col>
          </Row>
          ): ""}
          <Row>
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
              <Main></Main>
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
