(this.webpackJsonpRuufPayStake=this.webpackJsonpRuufPayStake||[]).push([[0],{257:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},258:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_homeToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_date","type":"uint256"}],"name":"HomeTokenStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_index","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"_ir","type":"uint16"}],"name":"IrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_maxStake","type":"uint256"}],"name":"MaxStakesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"NewOwnershipProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_homeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_rewardsAmount","type":"uint256"}],"name":"WithdrawWithRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_homeAmount","type":"uint256"}],"name":"WithdrawWithoutRewards","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ir","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTokensStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint64","name":"_months","type":"uint64"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint16","name":"_ir","type":"uint16"}],"name":"changeIr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_maxStake","type":"uint256"}],"name":"changeMaxStakes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"proposeChangeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserData","outputs":[{"internalType":"uint256","name":"homeTokens","type":"uint256"},{"internalType":"uint256","name":"stakeDate","type":"uint256"},{"internalType":"uint256","name":"pendingRewards","type":"uint256"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"uint64","name":"months","type":"uint64"},{"internalType":"int256","name":"untilRewards","type":"int256"},{"internalType":"uint16","name":"finalIr","type":"uint16"}],"stateMutability":"view","type":"function"}]')},267:function(e,t,a){e.exports=a(593)},273:function(e,t){},297:function(e,t){},299:function(e,t){},303:function(e,t){},323:function(e,t){},325:function(e,t){},334:function(e,t){},336:function(e,t){},346:function(e,t){},348:function(e,t){},464:function(e,t){},466:function(e,t){},473:function(e,t){},474:function(e,t){},499:function(e,t){},506:function(e,t){},565:function(e,t){},593:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(40),i=a.n(s),c=a(9);function o(e){var t=e.provider,a=e.loadWeb3Modal,n=e.logoutOfWeb3Modal;return r.a.createElement("a",{href:"#",class:"btn-1 shadow1 style3 bgscheme",onClick:function(){t?n():a()}},t?"Disconnect Wallet":"Connect Wallet")}var l=a(2),u=a.n(l),d=a(20),m=a(601),p=a(255),f=a.n(p);var y,h,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(),a=Object(c.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),l=o[0],p=o[1],y=Object(n.useState)(0),h=Object(c.a)(y,2),b=h[0],v=h[1],w=Object(n.useState)(""),E=Object(c.a)(w,2),g=E[0],x=E[1],k=e.autoLoad,O=void 0===k||k,j=e.NETWORK,T=void 0===j?"mainnet":j,C=new f.a({network:T,cacheProvider:!0}),S=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.connect();case 3:return t=e.sent,e.next=6,_(t);case 6:return s(new m.a(t)),e.next=9,A();case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])}))),[C]),M=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.clearCachedProvider();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[C]),A=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_chainId"});case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))),_=Object(n.useCallback)((function(e){e.on?(e.on("close",Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK close");case 1:case"end":return e.stop()}}),e)})))),e.on("connect",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK connected:",t),v(t.chainId),window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("disconnect",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK disconnected:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("accountsChanged",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK accountsChanged:",t),x(t[0]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("chainChanged",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK chainChanged:",t),v(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("networkChanged",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK networkChanged:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):console.log("Error. No provider")}),[]);return Object(n.useEffect)((function(){O&&!l&&C.cachedProvider&&(S(),p(!0))}),[O,l,S,p,C.cachedProvider]),[r,S,M,b,g]},v=a(265),w=a(257),E=a(258),g=a(15),x=0,k="0x1",O="0x3",j="0x2a",T="0x4",C="0x5",S="0x38",M="0x61",A="0x89",_="0x13881",F="0x64",R="0x539",P="0xa86a",W="0xa869",N="0xa4b1",D=(y={},Object(g.a)(y,x,"None"),Object(g.a)(y,k,"Ethereum"),Object(g.a)(y,O,"Ropsten"),Object(g.a)(y,j,"Kovan"),Object(g.a)(y,T,"Rinkeby"),Object(g.a)(y,C,"Goerli"),Object(g.a)(y,S,"Binance"),Object(g.a)(y,M,"Binance Testnet"),Object(g.a)(y,A,"Polygon (Matic)"),Object(g.a)(y,_,"Mumbai"),Object(g.a)(y,F,"xDai"),Object(g.a)(y,R,"Ganache"),Object(g.a)(y,P,"Avalanche"),Object(g.a)(y,W,"Fuji"),Object(g.a)(y,N,"Arbitrum"),y),I={homeCoin:w,stakeFarm:E,addresses:(h={},Object(g.a)(h,x,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,k,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,A,{homeCoin:"0x182f1d39df9460d7aef29afbc80bbd68ed0a41d5",stakeFarm:"0x8D4116AcC9e35Dd2745AAf893e663633375527d3"}),Object(g.a)(h,F,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,S,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,T,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,O,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,C,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,j,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,M,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,_,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,R,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,P,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,W,{homeCoin:"",stakeFarm:""}),Object(g.a)(h,N,{homeCoin:"",stakeFarm:""}),h),chainsNetworkName:D},H=a(47),U=a(599),B=a(600),K=a(602),L=a(113),Y=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,s,i,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=6e10,n=new L(t),e.prev=2,e.next=5,n.eth.getGasPrice();case 5:if(a=e.sent,!((r=Number(a)/1e9)>=2.4&&r<=2.6)){e.next=18;break}return console.log("Recalculating gas price:",r),e.next=11,fetch("https://gasstation-mainnet.matic.network/v2");case 11:return s=e.sent,e.next=14,s.json();case 14:i=e.sent,c=i.standard,o=c.maxFee,a=1e9*o;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),a=6e10;case 24:return console.log("Sending Tx with gasPrice:",Math.round(a)),e.abrupt("return",Math.round(a));case 26:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=e.userTokens,a=b(),s=Object(c.a)(a,5),i=s[3],o=(s[4],new L(window.ethereum)),l=Object(n.useState)(0),m=Object(c.a)(l,2),p=m[0],f=m[1],y=Object(n.useState)(0),h=Object(c.a)(y,2),v=h[0],w=h[1],E=Object(n.useState)(!1),g=Object(c.a)(E,2),x=g[0],k=g[1],O=Object(n.useState)(!1),j=Object(c.a)(O,2),T=j[0],C=j[1],S=Object(n.useState)(!1),M=Object(c.a)(S,2),A=M[0],_=M[1],F=Object(n.useState)(!1),R=Object(c.a)(F,2),P=R[0],W=R[1],N=Object(n.useState)(!1),D=Object(c.a)(N,2),z=D[0],G=D[1],q=Object(n.useState)(!0),J=Object(c.a)(q,2),Z=J[0],X=J[1],Q=Object(n.useState)(!1),$=Object(c.a)(Q,2),ee=$[0],te=($[1],Object(n.useState)(!1)),ae=Object(c.a)(te,2),ne=ae[0],re=ae[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,s,c,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null===(t=I.addresses[i])||void 0===t?void 0:t.homeCoin,r=null===(a=I.addresses[i])||void 0===a?void 0:a.stakeFarm,s=new o.eth.Contract(I.homeCoin,n),""===n||""===r){e.next=22;break}c=!1,l=0;case 6:return e.prev=6,e.next=9,s.methods.allowance(window.ethereum.selectedAddress,r).call({from:window.ethereum.selectedAddress});case 9:d=e.sent,X(!(d>0)),c=!0,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.log("getTokenAllowance:",e.t0),l++,e.next=20,V(3e3);case 20:if(0==c&&l<5){e.next=6;break}case 21:se(0);case 22:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(){return e.apply(this,arguments)}})()()}),[i]);var se=function(e){f(e),G(0==e||0==v)},ie=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,s,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),W(!0),n=null===(t=I.addresses[i])||void 0===t?void 0:t.homeCoin,r=null===(a=I.addresses[i])||void 0===a?void 0:a.stakeFarm,s=new o.eth.Contract(I.homeCoin,n),c=Math.pow(2,64)-1,e.next=9,Y(window.ethereum);case 9:return l=e.sent,e.next=12,s.methods.approve(r,o.utils.toWei(c.toString())).send({from:window.ethereum.selectedAddress,gasPrice:l});case 12:X(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),X(!0);case 19:return e.prev=19,k(!1),W(!1),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[0,15,19,23]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!1),C(!0),G(!0),e.next=6,Y(window.ethereum);case 6:return a=e.sent,n=null===(t=I.addresses[i])||void 0===t?void 0:t.stakeFarm,r=new o.eth.Contract(I.stakeFarm,n),e.next=11,r.methods.stake(o.utils.toWei(p.toString()),v).send({from:window.ethereum.selectedAddress,gasPrice:a});case 11:C(!1),G(!1),window.location.reload(),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),C(!1),G(!1);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,t>0?r.a.createElement("div",{id:"section-subscribe1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"title1 col-12"},r.a.createElement("h3",{class:"clscheme"},"Stake your Ruuf Coins to earn more")),r.a.createElement("div",{class:"form col-12 ez-animate text-center","data-animation":"fadeInUp"},r.a.createElement("p",{class:"bolder"},"Enter the amount of Ruuf Coins you want to stake and the period of time."),r.a.createElement("select",{onChange:function(e){return function(e){w(e),G(0==p||0==e)}(e.target.value)}},r.a.createElement("option",{value:"0"},"Select the period in months..."),r.a.createElement("option",{value:"3"},"3 Months (2% rewards)"),r.a.createElement("option",{value:"6"},"6 Months (6% rewards)"),r.a.createElement("option",{value:"9"},"9 Months (11% rewards)"),r.a.createElement("option",{value:"12"},"12 Months (18.32% rewards)")),r.a.createElement("p",null)),r.a.createElement("div",{class:"form col-12 ez-animate text-center","data-animation":"fadeInUp"},r.a.createElement("input",{type:"number",placeholder:"0",value:p,onChange:function(e){return se(e.target.value)}}),r.a.createElement("button",{type:"",class:"shadow1 bgscheme",onClick:function(){f(t)}},"MAX"),r.a.createElement("div",null,Z?r.a.createElement("button",{disabled:P,onClick:function(){return ie()},class:"shadow1 style3 bgscheme mx-3 my-3 px-5"},x?r.a.createElement(U.a,{animation:"border",size:"sm",className:"mr-2"}):"","APPROVE"):r.a.createElement("button",{disabled:z,onClick:function(){return ee?re(!0):_(!0)},class:"shadow1 style3 bgscheme mt-5"},T?r.a.createElement(U.a,{animation:"border",size:"sm",className:"mr-2"}):"","STAKE")))))):"",r.a.createElement("div",null,r.a.createElement(B.a,{show:A},r.a.createElement(B.a.Header,{closeButton:!0,onClick:function(){return _(!1)}},r.a.createElement(B.a.Title,null,"Stake Farm")),r.a.createElement(B.a.Body,null,r.a.createElement("p",null,"You are going to stake ",r.a.createElement(H.a,{displayType:"text",value:p,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," tokens in the farm for the next ",v," months."),r.a.createElement("p",null,"Are you sure?")),r.a.createElement(B.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:function(){return ce()}},"Yes"),r.a.createElement(K.a,{variant:"secondary",onClick:function(){return _(!1)}},"No"))),r.a.createElement(B.a,{show:ne},r.a.createElement(B.a.Header,{closeButton:!0,onClick:function(){return re(!1)}},r.a.createElement(B.a.Title,null,"Coming soon...")),r.a.createElement(B.a.Body,null,r.a.createElement("p",null,"Staking is almost finished with testing. Check back shortly.")),r.a.createElement(B.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:function(){return re(!1)}},"Close")))))},G=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,s,i,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=6e10,n=new q(t),e.prev=2,e.next=5,n.eth.getGasPrice();case 5:if(a=e.sent,!((r=Number(a)/1e9)>=2.4&&r<=2.6)){e.next=18;break}return console.log("Recalculating gas price:",r),e.next=11,fetch("https://gasstation-mainnet.matic.network/v2");case 11:return s=e.sent,e.next=14,s.json();case 14:i=e.sent,c=i.standard,o=c.maxFee,a=1e9*o;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),a=6e10;case 24:return console.log("Sending Tx with gasPrice:",Math.round(a)),e.abrupt("return",Math.round(a));case 26:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}(),q=a(113),J=function(e){var t=b(),a=Object(c.a)(t,5),s=a[3],i=a[4],o=new q(window.ethereum),l=Object(n.useState)(0),m=Object(c.a)(l,2),p=m[0],f=m[1],y=Object(n.useState)(0),h=Object(c.a)(y,2),v=h[0],w=h[1],E=Object(n.useState)(0),g=Object(c.a)(E,2),x=g[0],k=g[1],O=Object(n.useState)(0),j=Object(c.a)(O,2),T=j[0],C=j[1],S=Object(n.useState)(""),M=Object(c.a)(S,2),A=M[0],_=M[1],F=Object(n.useState)(0),R=Object(c.a)(F,2),P=R[0],W=R[1],N=Object(n.useState)(0),D=Object(c.a)(N,2),L=(D[0],D[1]),Y=Object(n.useState)(!1),V=Object(c.a)(Y,2),z=V[0],J=V[1],Z=Object(n.useState)(0),X=Object(c.a)(Z,2),Q=X[0],$=X[1],ee=Object(n.useState)(0),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),se=Object(c.a)(re,2),ie=se[0],ce=se[1],oe=Object(n.useState)(!1),le=Object(c.a)(oe,2),ue=le[0],de=le[1],me=Object(n.useState)(!0),pe=Object(c.a)(me,2),fe=pe[0],ye=pe[1];Object(n.useLayoutEffect)((function(){if(null!==e.userData){var t=e.userData,a=o.utils.fromWei(t.homeTokens.toString(),"ether");f(a),w(o.utils.fromWei(t.pendingRewards.toString(),"ether")),k(new Date(1e3*t.stakeDate).toUTCString()),_(be(Date.now(),new Date(1e3*t.stakeDate))),W(t.multiplier),L(t.finalIr),ne(t.months),t.untilRewards>=0?(C(ve(t.untilRewards)),J(!1)):J(!0),$(a*t.finalIr/1e4),ye(!1)}}),[s,i]);var he=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,de(!1),ce(!0),ye(!0),e.next=6,G(window.ethereum);case 6:return a=e.sent,console.log("maxGasPrice",a),n=null===(t=I.addresses[s])||void 0===t?void 0:t.stakeFarm,r=new o.eth.Contract(I.stakeFarm,n),e.next=12,r.methods.withdraw(window.ethereum.selectedAddress).send({from:window.ethereum.selectedAddress,gasPrice:a});case 12:e.sent,ce(!1),ye(!1),window.location.reload(),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0),ce(!1),ye(!1);case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),be=function(e,t){var a=Math.abs(e-t)/1e3,n=Math.floor(a/86400);a-=86400*n;var r=Math.floor(a/3600)%24;a-=3600*r;var s=Math.floor(a/60)%60;a-=60*s;var i="";return n>0&&(i+="".concat(n,1===n?" day, ":" days, ")),i+="".concat(r,0===r||1===r?" hour, ":" hours, "),i+="".concat(s," minutes")},ve=function(e){var t=Math.floor(e/86400);e-=86400*t;var a=Math.floor(e/3600)%24;e-=3600*a;var n=Math.floor(e/60)%60;e-=60*n;var r="";return t>0&&(r+="".concat(t,1===t?" day, ":" days, ")),r+="".concat(a,0===a||1===a?" hour, ":" hours, "),r+="".concat(n," minutes")},we=function(){return 0==P?Number(p):Number(p)+Number(v)};return r.a.createElement("div",null,p>0?r.a.createElement("div",{id:"section-subscribe1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"title1 col-12"},r.a.createElement("h3",{class:"clscheme"},"Withdraw your tokens")),r.a.createElement("div",{class:"form col-12 ez-animate text-center","data-animation":"fadeInUp"},r.a.createElement("h3",null,"You've staked ",r.a.createElement(H.a,{displayType:"text",value:p,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," Ruuf Coins for ",ae," months."),r.a.createElement("p",null),r.a.createElement("p",null,"Stake date: ",x),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null,"Staked for ",A),r.a.createElement("p",null),!1===z?r.a.createElement("p",null,"You could claim ",r.a.createElement(H.a,{displayType:"text",value:Q,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," tokens as staking rewards in ",T):r.a.createElement("p",null,r.a.createElement("b",null,"Staking finished. Please, withdraw your staking rewards.")),r.a.createElement("button",{disabled:fe,onClick:function(){return de(!0)},class:"shadow1 style3 bgscheme mt-5"},ie?r.a.createElement(U.a,{animation:"border",size:"sm",class:"mr-2"}):"","WITHDRAW"))))):"",r.a.createElement(B.a,{show:ue},r.a.createElement(B.a.Header,{closeButton:!0,onClick:function(){return de(!1)}},r.a.createElement(B.a.Title,null,"Withdraw tokens")),r.a.createElement(B.a.Body,null,!1===z?r.a.createElement("div",null,r.a.createElement("p",null,"Warning!"),r.a.createElement("p",null,"You are withdrawing before the staking period has ended. You will lose all your rewards and only withdraw ",r.a.createElement(H.a,{displayType:"text",value:we(),thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," Ruuf Coins "),r.a.createElement("p",null,"Are you sure?")):r.a.createElement("div",null,r.a.createElement("p",null,"You are going to withdraw ",r.a.createElement(H.a,{displayType:"text",value:we(),thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," Ruuf Coins"),r.a.createElement("p",null,"Are you sure?"))),r.a.createElement(B.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:function(){return he()}},"Yes"),r.a.createElement(K.a,{variant:"secondary",onClick:function(){return de(!1)}},"No"))))},Z=a(113),X=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e,t=b(),a=Object(c.a)(t,5),s=a[3],i=a[4],o=new Z(window.ethereum),l=Object(n.useState)(null),m=Object(c.a)(l,2),p=m[0],f=m[1],y=Object(n.useState)(null),h=Object(c.a)(y,2),v=h[0],w=h[1],E=Object(n.useState)(null),g=Object(c.a)(E,2),x=g[0],k=g[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,s,i,c,l,d,m,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=!1,n=0;case 2:if(e.prev=2,""===(i=null===(r=I.addresses[t])||void 0===r?void 0:r.homeCoin)){e.next=10;break}return c=new o.eth.Contract(I.homeCoin,i),e.next=8,c.methods.balanceOf(window.ethereum.selectedAddress).call({from:window.ethereum.selectedAddress});case 8:l=e.sent,f(o.utils.fromWei(l,"ether"));case 10:if(""===(d=null===(s=I.addresses[t])||void 0===s?void 0:s.stakeFarm)){e.next=18;break}return m=new o.eth.Contract(I.stakeFarm,d),e.next=15,m.methods.getUserData(window.ethereum.selectedAddress).call({from:window.ethereum.selectedAddress});case 15:p=e.sent,w(o.utils.fromWei(p.homeTokens.toString(),"ether")),k(p);case 18:a=!0,e.next=27;break;case 21:return e.prev=21,e.t0=e.catch(2),console.log("loadTokensFromAccount",e.t0),n++,e.next=27,X(3e3);case 27:if(0==a&&n<5){e.next=2;break}case 28:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}})()(s)}),[s,i]);return r.a.createElement("div",null,r.a.createElement("div",{id:"section-testimonial1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"title1"},(null===(e=window.ethereum)||void 0===e?void 0:e.selectedAddress)?r.a.createElement("div",null,p>0?r.a.createElement("h3",null,"You have ",r.a.createElement(H.a,{displayType:"text",value:p,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," Ruuf Coins in your wallet"):r.a.createElement("div",null,0==(null===p?0:p)&&0==(null===v?0:v)?r.a.createElement("div",{id:"section-nocoins"},r.a.createElement("h3",null,"You don't have any Ruuf Coins in your wallet"),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("a",{href:"https://app.sushi.com/swap?outputCurrency=0x182f1d39df9460d7aef29afbc80bbd68ed0a41d5",rel:"noopener noreferrer",target:"_blank"},"Buy RUUF on Sushiswap")),r.a.createElement("p",null,"or"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://coinsbit.io/trade/HOME_USDT",rel:"noopener noreferrer",target:"_blank"},"Buy RUUF on Coinsbit"))):"")):r.a.createElement("div",{class:"container"},r.a.createElement("h3",null,"Earn up to 18.32% in staking rewards. Connect a wallet."))))),0===Number(v)?r.a.createElement(z,{userTokens:p}):r.a.createElement(J,{userData:x}))},$=function(){var e=b(),t=Object(c.a)(e,5),a=t[0],s=t[1],i=t[2],l=t[3],m=(t[4],Object(n.useState)(!1)),p=Object(c.a)(m,2),f=p[0],y=p[1],h=function(){var e=+new Date("2021-09-30 17:00:00")-+new Date,t="";return e>0&&(t='<div class="container" id="timer"><h3>Earn up to 18.32% in staking rewards. Coming soon!</h3><div>'+Math.floor(e/864e5)+"<span>days</span></div><div>"+Math.floor(e/36e5%24)+"<span>hours</span></div><div>"+Math.floor(e/1e3/60%60)+"<span>minutes</span></div><div>"+Math.floor(e/1e3%60)+"<span>seconds</span></div></div>"),t},w=Object(n.useState)(h()),E=Object(c.a)(w,2),g=E[0],x=E[1];return Object(n.useLayoutEffect)((function(){setTimeout((function(){x(h())}),1e3)})),Object(n.useLayoutEffect)((function(){var e;""!==(null===(e=I.addresses[l])||void 0===e?void 0:e.stakeFarm)?y(!0):y(!1)}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement("div",{id:"section-preloader"},r.a.createElement("div",{class:"loading-indicator"},r.a.createElement("img",{alt:"Loading",src:"/assets/images/branding/app-logo-purple-min.svg"})),r.a.createElement("p",null,"LOADING . . .")),r.a.createElement("nav",{class:"navbar-1 navbar navbar-expand-lg"},r.a.createElement("div",{class:"container navbar-container"},r.a.createElement("a",{class:"navbar-brand",href:"/"},r.a.createElement("img",{class:"app-logo",src:"/HomeLogo.png",width:"170px",height:"64px",alt:"RuufPay"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav ml-auto"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("p",{class:"nav-link scroll-down"})))),r.a.createElement("a",{href:"https://ruufpay.medium.com/ruufcoin-ruuf-web-staking-instructions-ac7103a2c55f",target:"_blank",rel:"noopener noreferrer",class:"btn-1 shadow1 style3 bgscheme"},"Tutorial"),g.length?"":r.a.createElement(o,{provider:a,loadWeb3Modal:s,logoutOfWeb3Modal:i}))),r.a.createElement("div",{id:"section-slider1"},r.a.createElement("div",{class:"waves-container"},r.a.createElement("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"},r.a.createElement("defs",null,r.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),r.a.createElement("g",{class:"parallax"},r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"}))))),g.length?r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:g}}):[0===l?r.a.createElement("div",{id:"section-blogdetail1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"title1 mt-5"},r.a.createElement("h3",null,"Earn up to 18.32% in staking rewards. Connect a wallet.")))):[!1===f?r.a.createElement("div",{id:"section-blogdetail2"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"title1 mt-5"},r.a.createElement("h2",null,"Unsupported network."),r.a.createElement("p",null),r.a.createElement("h3",null,"We've moved from Ethereum to Polygon network"),r.a.createElement("p",null),r.a.createElement("h5",null,"Switch to Polygon network in Metamask"),r.a.createElement("p",null),r.a.createElement("a",{href:"/",class:"btn-1 shadow1 style3 bgscheme",onClick:function(){return function(e){var t=function(e){switch(e){case 1:return{id:"0x1",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18}};case 4:return{id:"0x4",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18}};case 137:return{id:"0x89",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18}};case 80001:return{id:"0x13881",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18}}}}(e);return new Promise(function(){var a=Object(d.a)(u.a.mark((function a(n,r){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:t.id}]});case 3:n(!0),a.next=17;break;case 6:if(a.prev=6,a.t0=a.catch(0),4902!==a.t0.code){a.next=16;break}return a.prev=9,a.next=12,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:t.id,rpcUrls:[e.rpcUrl],chainName:e.name,nativeCurrency:t.nativeCurrency,blockExplorerUrls:[e.scanLink]}]});case 12:a.next=16;break;case 14:a.prev=14,a.t1=a.catch(9);case 16:r(a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,6],[9,14]])})));return function(e,t){return a.apply(this,arguments)}}())}(137)}},"Switch network")))):r.a.createElement(Q,null)]],r.a.createElement("div",{id:"section-footer"},r.a.createElement("div",{class:"custom-shape-divider-top-1628808112"},r.a.createElement("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},r.a.createElement("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",class:"shape-fill"}),r.a.createElement("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",class:"shape-fill"}),r.a.createElement("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",class:"shape-fill"}))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"footer-widget"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"left col-md-6"}),r.a.createElement("div",{class:"right col-md-6"},r.a.createElement("div",{class:"social-links"},r.a.createElement("a",{href:"https://twitter.com/ruufpay",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/twitter-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://www.facebook.com/ruufpay/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/facebook-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://www.instagram.com/ruufpay/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/instagram-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://t.me/ruufpay_app",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/telegram-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://discord.gg/3KqcXd6Agb",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/discord-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://www.reddit.com/r/RuufPay/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/reddit-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://medium.com/@content_18770",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/medium-brands.svg",width:"22px",height:"22px"}))))))),r.a.createElement("div",{class:"footer-copyright container-fluid "},r.a.createElement("div",{class:"col-12"},r.a.createElement("p",null,"\xa9 2021 Copyrights RuufPay"))))))};i.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[267,1,2]]]);
//# sourceMappingURL=main.e087adab.chunk.js.map