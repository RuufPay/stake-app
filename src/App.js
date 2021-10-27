import React, { useLayoutEffect, useEffect, useState } from "react";
import { WalletButton } from './WalletButton';
import {
  Button
}  from 'react-bootstrap';
import useWeb3Modal from "./hooks/useWeb3Modal";
import { switchFromChain } from "./hooks/metamask";
import { BrowserRouter } from 'react-router-dom';
import contracts from './contracts';
import Main from './components/Main';
//
const App = () => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal, chainId, account] = useWeb3Modal();
  const [stakeFarm, setStakeFarm] = useState(false);
  
  const calculateTimeLeft = () => {
    const difference = +new Date(`2021-09-30 17:00:00`) - +new Date();
    let timeLeft = "";

    if (difference > 0) {
      timeLeft = 
      '<div class="container" id="timer">' +
          '<h3>Earn up to 18.32% in staking rewards. Coming soon!</h3>' +
          "<div>" + Math.floor(difference / (1000 * 60 * 60 * 24)) + "<span>days</span></div>" + 
          "<div>" + Math.floor((difference / (1000 * 60 * 60)) % 24) + "<span>hours</span></div>" +
          "<div>" + Math.floor((difference / 1000 / 60) % 60) + "<span>minutes</span></div>" +
          "<div>" + Math.floor((difference / 1000) % 60) + "<span>seconds</span></div>" +
      "</div>";
    }

    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  useLayoutEffect(() => {
    if (contracts.addresses[chainId].stakeFarm !== "")
      setStakeFarm(true);
    else
      setStakeFarm(false);
  },[chainId]);

  return (
    <>
      <BrowserRouter>
        <div id="section-preloader">
          <div class="loading-indicator">
            <img alt="Loading" src="/assets/images/branding/app-logo-purple-min.svg" />
          </div>
          <p>LOADING . . .</p>
        </div>
        <nav class="navbar-1 navbar navbar-expand-lg">
          <div class="container navbar-container">
            <a class="navbar-brand" href="/">
              <img class="app-logo" src="/HomeLogo.png" width="170px" height="64px" alt="RuufPay" />
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <p class="nav-link scroll-down"></p>
                </li>
              </ul>
            </div>
            <a href="https://ruufpay.app/tutorial-staking.html" target="_blank" rel="noopener noreferrer" class="btn-1 shadow1 style3 bgscheme">Tutorial</a>

            { timeLeft.length ? "" :
            <WalletButton
              provider={provider}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}/>
            }
          </div>
        </nav>
        <div id="section-slider1">
          <div class="waves-container">
			      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
				      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
				      <defs>
					      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				      </defs>
              <g class="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
			      </svg>
		      </div>
        </div>

        { timeLeft.length ?
          <div className="content" dangerouslySetInnerHTML={{__html: timeLeft}}></div>
         : 
        [
          chainId === 0 ? 
          <div id="section-blogdetail1">
            <div class="container">
              <div class="title1 mt-5">
                <h3>Earn up to 18.32% in staking rewards. Connect a wallet.</h3>
              </div>
            </div>
          </div>
        :
        [
          stakeFarm === false ? 
            <div id="section-blogdetail1">
              <div class="container">
                <div class="title1 mt-5">
                  <h2>Unsupported network.</h2>
                  <p></p> 
                  <h3>We've moved from Ethereum to Polygon network</h3>
                  <p></p>
                  <h5>Switch to Polygon network in Metamask</h5>
                  <p></p>
                  <a href="#" class="btn-1 shadow1 style3 bgscheme" onClick={() => switchFromChain(137)}>Switch network</a>
                </div>
              </div>
            </div>
          : <Main></Main>
        ]
        ]}
        <div id="section-footer">
          <div class="custom-shape-divider-top-1628808112">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
          </div>
          <div class="container">
            <div class="footer-widget">
              <div class="row">
                <div class="left col-md-6">
                </div>
                <div class="right col-md-6">
                  <div class="social-links">
                    <a href="https://twitter.com/ruufpay" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/twitter-brands.svg" width="22px" height="22px" /></a>
                    <a href="https://www.facebook.com/ruufpay/" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/facebook-brands.svg" width="22px" height="22px" /></a>
                    <a href="https://www.instagram.com/ruufpay/" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/instagram-brands.svg" width="22px" height="22px" /></a>
                    <a href="https://t.me/ruufpay_app" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/telegram-brands.svg" width="22px" height="22px" /></a>
                    <a href="https://discord.gg/3KqcXd6Agb" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/discord-brands.svg" width="22px" height="22px" /></a>
                    <a href="https://www.reddit.com/r/RuufPay/" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/reddit-brands.svg" width="22px" height="22px" /></a>
                    <a href="https://medium.com/@content_18770" rel="noopener noreferrer" target="_blank"><img src="/assets/images/social/medium-brands.svg" width="22px" height="22px" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright container-fluid ">
          <div class="col-12">
            <p>© 2021 Copyrights RuufPay</p>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
