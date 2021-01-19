(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1049:function(n,t){},1088:function(n,t){},109:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"g",function(){return l}),e.d(t,"h",function(){return c}),e.d(t,"a",function(){return u}),e.d(t,"b",function(){return f}),e.d(t,"e",function(){return d}),e.d(t,"d",function(){return s}),e.d(t,"f",function(){return p}),e.d(t,"i",function(){return h}),e.d(t,"k",function(){return m}),e.d(t,"l",function(){return g}),e.d(t,"m",function(){return w}),e.d(t,"j",function(){return b}),e.d(t,"p",function(){return x}),e.d(t,"n",function(){return y}),e.d(t,"o",function(){return v});var r,i=e(7),a=e(2),o="https://explorer.airswap.io/",l="https://instant.airswap.io/",c="https://vote.airswap.io/",u="https://docs.airswap.io/",f="https://chat.airswap.io/",d="https://support.airswap.io/",s="https://www.airswap.io/airswap-privacy-policy.pdf",p="https://www.airswap.io/airswap-terms-of-use.pdf",h=(r={},Object(i.a)(r,"0x11111254369792b2ca5d084ab5eea397ca8fa48b","1Inch"),Object(i.a)(r,"0xa540fb50288cc31639305b1675c70763c334953b","Dex.ag"),Object(i.a)(r,"0x91f3935ed7a4ee8d15023c5df26895b26ae98015","Totle"),Object(i.a)(r,a.TRADER_AFFILIATE_ADDRESS,"AirSwap OTC"),r),m={link:"/technology",title:"Learn about the technology",description:"Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.",content:"<p>AirSwap works with a combination of web protocols and smart contracts. There are two kinds of liquidity providers in the system, those that run their own HTTP servers to provide liquidity and those that manage onchain delegates that make trades on their behalf.</p><p>Each swap is between at least two parties, a signer and a sender. The signer is the party that creates and cryptographically signs an order, and sender is the party that sends the order to the Ethereum blockchain for settlement. Learn more at https://docs.airswap.io/.</p>"},g={link:"/process",title:"Build the future of trading",description:"Thinkers, designers, developers, and traders all participate in the AirSwap Improvement Proposal (AIP) process by authoring, discussing, and building proposals.",content:"<p>To foster innovation and open product development, the AirSwap network and community are driven by a proposal system following the style of existing open source projects and those throughout the blockchain development ecosystem. </p><p>Proposals consist of new protocols, smart contracts, maker software, network tooling, applications, and tokenomics. Collaborate with the token and developer communities on the future of the AirSwap network. View active AIPs at https://github.com/airswap/AIPs/issues</p>"},w={link:"/token",title:"Use your tokens to stake and vote",description:"The AirSwap token (AST) has two main utilities: to give liquidity providers the ability to announce that they\u2019re online, and to give community members a voice in governance.",content:"<p>Because AirSwap is a peer-to-peer network, finding a counterparty is the first step in any trade. The underlying AirSwap protocols include the Indexer, which is like a search engine for peers. To be added to this search engine, liquidity providers stake their AST. </p> <p>AirSwap tokens are also used by community members to vote on AirSwap Improvement Proposals (AIP) to determine which proposals should be implemented. Browse active AIPs and participate in votes at https://vote.airswap.io/. </p>"},b={title:"Join and shape the future.",items:[m,g,w]},x={title:"The safest way to trade.",items:[{title:"Non-custodial",description:"Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go."},{title:"Guaranteed price",description:"The price you see is the price you get. Each trade is cryptographically signed and guaranteed to fill at the specified price without any slippage during execution."},{title:"Atomic swaps",description:"Both sides of a trade must successfully transfer tokens in a single transaction. If one side fails, the entire transaction reverts and no tokens move."}]},y={title:"Plug in your wallet and go.",items:[{title:"AirSwap Instant",description:"Swap instantly with automated liquidity providers.",link:"https://instant.airswap.io/",thumbnail:"".concat("https://airswap.consensys.net","/images/airswap_instant.png")},{title:"AirSwap OTC",description:"Create and share custom swaps with other traders on the web.",link:"https://trader.airswap.io/",thumbnail:"".concat("https://airswap.consensys.net","/images/airswap_otc.png")},{title:"MetaMask",description:"Swap directly from the MetaMask browser extension.",link:"https://www.metamask.io/",thumbnail:"".concat("https://airswap.consensys.net","/images/metmask.png")}]},v=[{label:"About the technology",to:"technology"},{label:"Development process",to:"process"},{label:"Token and governance",to:"token"}]},1135:function(n,t){},1375:function(n,t){},1381:function(n,t){},1393:function(n,t){},1414:function(n,t){},1480:function(n,t){},1481:function(n,t){},1483:function(n,t){function e(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=1483},1511:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"middleware",function(){return p}),e.d(r,"reducers",function(){return h.a});var i=e(3),a=e.n(i),o=e(254),l=e.n(o),c=e(668),u=e(635),f=(e(9),e(25),e(0)),d=e.n(f),s=function(){return window.fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then(function(n){return n.json()}).then(function(n){var t=n.USD;return Number(t)})};function p(n){return s().then(function(t){return n.dispatch({type:"SET_ETH_PRICE",price:t})}),function(n){return function(t){return t.type,n(t)}}}var h=e(383),m={ethPrice:r},g=d.a.filter(d.a.map(d.a.values(m),"middleware")),w=d.a.pickBy(d.a.mapValues(m,"reducers"),d.a.identity),b=d.a.pickBy(d.a.mapValues(m,"defaultState"),d.a.identity),x=Object(c.a)(g,w,b,[]),y=function(n){return function(t){return a.a.createElement(u.a,{store:x},a.a.createElement(n,t))}},v=e(21),C=e(19),E=e(659),j=e.n(E),O={blue:["#1C95E8","#4482FF","#2B71FF","#0F45B2"],green:["#4BC68B"],yellow:["#FFBE2B"],red:["#FF0000","#FF6245"],brown:["#B27C00"],gray:["#FFFFFF","#FDFDFD","#FAFAFA","#F7F7F7","#F2F2F2","#EAEAEA","#AAAAAA","#7D7D7D","#151212"]},k={animation:{defaultTransition:.3},fixed:{maxWidth:"1240px"},colors:O,palette:{primaryColor:O.blue[2],secondaryColor:O.gray[3],foregroundColor:O.gray[0],backgroundColor:O.gray[1],backgroundColorSecondary:O.gray[2],shadeColor:O.gray[3],borderColor:O.gray[2],successColor:O.green[0],errorColor:O.red[1],warningColor:O.yellow[0],iconColor:O.gray[4],primaryBlue:O.blue[2]},text:{fontFamily:"Roboto Mono, proxima-nova, sans-serif",fontStyle:{italic:"italic"},fontWeight:{thin:"200",light:"300",regular:"400",medium:"500",semibold:"600",bold:"700"},fontSize:{h1:"42px",h2:"36px",h3:"24px",h4:"20px",h5:"18px",h6:"16px",h7:"14px",h8:"12px",h9:"11px"},lineHeight:{h1:1.25,h2:1.25,h3:1.25,h4:1.25,h5:1.25,h6:1.25,h7:1.25,h8:1.25,h9:1.25}},spacing:{widgetPadding:"40px",mobileWidgetPadding:"30px"},line:{weight:{light:"1px",normal:"2px",heavy:"3px"}},gridPoint:8,mixin:{dashedLine:function(){return"\n    content: '';\n    width: 150px;\n    border-top: 1px dashed rgba(255, 255, 255, 0.5);\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n  "}}};function H(){var n=Object(v.a)(["\n  ","\n  div {\n    box-sizing: border-box;\n  }\n  #root {\n    height: 100%;\n    overflow-x: hidden;\n  }\n  html, body {\n    background-color: #1A1B1E;\n    color: #FFFFFF;\n    cursor: default;\n    width: 100%;\n    overflow-y: auto;\n  }\n  a {\n    color: #FFFFFF;\n    text-decoration: none;\n  }\n  *,\n  div,\n  span,\n  p,\n  a,\n  button {\n    font-family: ",";\n    letter-spacing: 0.5px;\n\n    ::selection {\n        background: #2b71ff; /*AirSwap Blue*/\n      }\n\n    ::-moz-selection {\n        background: #2b71ff; /*AirSwap Blue*/\n      }\n  }\n  body {\n    font-family: ",";\n    margin: 0;\n    padding: 0;\n    line-height: 1.33;\n    overflow-x: hidden;\n  }\n  .fw-normal {\n    font-weight: normal !important;\n  }\n  .fw-medium {\n    font-weight: 500 !important;\n  }\n  .fw-bold {\n    font-weight: 700 !important;\n  }\n  .ml-text {\n    margin-left: 5px;\n  }\n  .mr-text {\n    margin-right: 5px;\n  }\n  .token-selector-list {\n    margin-top: 20px;\n  }\n  .dot-flashing {\n  position: relative;\n  width: 3px;\n  height: 3px;\n  border-radius: 100%;\n  background-color: #555;\n  animation: dot-flashing 1s infinite linear alternate;\n  animation-delay: .5s;\n}\n\n.dot-flashing::before, .dot-flashing::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 0;\n}\n\n.dot-flashing::before {\n  left: -5px;\n  width: 3px;\n  height: 3px;\n  border-radius: 100%;\n  background-color: #555;\n  animation: dot-flashing 1s infinite alternate;\n  animation-delay: 0s;\n}\n\n.dot-flashing::after {\n  left: 5px;\n  width: 3px;\n  height: 3px;\n  border-radius: 100%;\n  background-color: #555;\n  animation: dot-flashing 1s infinite alternate;\n  animation-delay: 1s;\n}\n\n@keyframes dot-flashing {\n  0% {\n    background-color: #555;\n  }\n  50%,\n  100% {\n    background-color: #eee;\n  }\n}\n"]);return H=function(){return n},n}var M=Object(C.createGlobalStyle)(H(),j.a,k.text.fontFamily,k.text.fontFamily);k.palette.borderColor="#E5E5E5";var F=function(n){return function(t){return a.a.createElement(C.ThemeProvider,{theme:k},a.a.createElement(a.a.Fragment,null,a.a.createElement(n,t),a.a.createElement(M,null)))}},R=e(47),L=e(109);function S(){return(S=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var A=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.6006 81.579H35.401C38.8137 81.579 39.8383 81.5299 41.7394 81.2347V87.4324C39.9846 87.2357 38.7162 87.1865 35.4979 87.1865H6.24149C3.02322 87.1865 1.75599 87.2357 0 87.4324V81.2347C1.9017 81.5299 2.9257 81.579 6.33958 81.579H17.3592V61.3628H9.89862C6.68035 61.3628 5.41254 61.412 3.65712 61.6093V55.4609C5.51063 55.756 6.68035 55.8052 9.99614 55.8052H31.6945C35.0103 55.8052 36.1806 55.756 38.0335 55.4609V61.6093C36.2781 61.412 35.0591 61.3628 31.792 61.3628H23.6006V81.579Z",fill:"white"}),T=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M128.662 68.8367C132.075 68.8367 133.1 68.7901 135.001 68.5105V74.3828C133.246 74.1964 131.978 74.1498 128.759 74.1498H99.503C96.2847 74.1498 95.0175 74.1964 93.2615 74.3828V68.5105C95.1632 68.7901 96.1872 68.8367 99.6011 68.8367H128.662Z",fill:"white"}),P=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88.9065 55.6913C88.2173 56.5243 88.2173 56.5733 86.9364 59.1213C85.2121 62.7473 82.3541 66.4224 79.3489 68.9704C77.3788 70.6848 75.753 71.7628 73.4375 73.0369C71.9596 70.9788 71.2206 70.2438 69.0036 68.5778C72.3044 67.1078 74.1765 65.9814 76.1964 64.0704C78.2164 62.2083 79.7436 60.1993 80.8761 57.8473H55.0127C51.5635 57.8473 50.3324 57.8963 48.3125 58.1413V52.0163C50.1841 52.3103 51.7113 52.4083 55.1112 52.4083H80.8269C83.7834 52.4083 84.2268 52.3593 85.6057 51.9673L88.9065 55.6913ZM68.9051 61.8653C68.7573 62.7963 68.7573 62.8453 68.708 65.8344C68.511 74.2134 67.1808 78.9175 63.8313 83.1799C60.8747 86.953 57.2783 89.452 51.1207 92C49.8398 89.354 49.1993 88.472 47.2287 86.414C51.2192 85.2379 53.4362 84.1599 55.8502 82.2489C60.8747 78.2805 62.4513 74.0659 62.4513 64.8054C62.4513 63.3354 62.402 62.8943 62.2055 61.8653H68.9051Z",fill:"white"}),z=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.253 43.0637C128.185 38.0685 122.55 32.5829 117.208 28.5172C111.67 34.6884 106.034 38.9985 98.5355 42.6725C97.1639 40.125 96.5758 39.3414 94.5659 37.2359C98.3395 35.7665 100.692 34.4435 104.368 31.8483C111.768 26.656 117.649 19.5547 120.834 11.9141L121.373 10.6407C120.589 10.6896 120.589 10.6896 105.152 10.9345C102.799 10.9835 101.476 11.0815 99.8098 11.3264L99.6143 5.05772C100.986 5.30204 101.918 5.35102 103.926 5.35102H105.103L122.354 5.10669C125.097 5.05772 125.49 5.00817 126.715 4.56736L129.949 7.89789C129.313 8.63256 128.92 9.31826 128.381 10.5427C126.127 15.7834 123.725 20.0445 120.736 24.0607C123.824 26.1172 126.47 28.1743 129.802 31.1626C131.028 32.2395 131.028 32.2395 136.957 37.9706L132.253 43.0637Z",fill:"white"}),V=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M173.479 11.3615C173.038 12.2887 172.988 12.581 172.743 14.045C171.907 19.6577 171.171 22.3906 169.648 25.8555C167.24 31.4677 163.31 35.8104 157.514 39.3241C154.567 41.1297 152.012 42.2522 147.738 43.7162C146.608 41.2273 146.019 40.3489 143.808 37.9089C148.475 36.787 151.177 35.7616 154.272 33.8589C161.395 29.4662 165.128 23.2685 166.062 14.2896H142.089V20.585C142.089 22.0978 142.138 23.4149 142.236 24.4891H135.653C135.8 23.2685 135.899 21.7556 135.899 20.3892V13.313C135.899 11.2639 135.85 9.99509 135.702 8.67802C137.422 8.87266 138.306 8.92146 141.008 8.92146H150.636L165.816 8.87266C169.451 8.87266 169.451 8.87266 170.63 8.48225L173.479 11.3615Z",fill:"white"}),B=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M194.953 11.0922C197.545 15.9878 198.474 18.1628 199.697 22.4645L194.268 24.1951C193.339 20.4373 191.871 16.6306 189.817 12.5755L194.953 11.0922ZM212.61 13.4661C212.317 14.2072 212.219 14.455 211.926 15.9878C210.507 22.7118 208.306 28.1507 205.176 32.4524C201.556 37.4464 197.496 40.6603 190.257 44.3687C188.985 42.1931 188.399 41.4514 186.344 39.473C189.768 38.1386 191.773 37.0502 194.659 34.9247C200.382 30.7219 203.659 25.6785 205.763 17.7673C206.399 15.3444 206.643 13.6144 206.643 12.0816L212.61 13.4661ZM184.535 13.1194C186.588 16.9267 187.567 19.3 189.328 24.8379L183.801 26.6179C182.528 21.624 181.551 19.0034 179.349 14.6522L184.535 13.1194Z",fill:"white"}),Z=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M248.074 5.63613C248.074 7.40106 249.498 8.87135 251.265 8.87135C253.081 8.87135 254.504 7.40106 254.504 5.63613C254.504 3.87178 253.081 2.45049 251.265 2.45049C249.498 2.45049 248.074 3.87178 248.074 5.63613ZM242.725 5.78373C244.197 5.78373 244.786 5.73472 245.62 5.68514C245.669 2.4995 248.123 0 251.265 0C254.406 0 256.958 2.54851 256.958 5.63613C256.958 8.77276 254.406 11.3218 251.265 11.3218C250.97 11.3218 250.676 11.2728 250.332 11.2233C246.357 27.2495 237.67 37.2475 222.16 43.7162C220.884 41.1683 220.05 40.0405 217.84 37.884C231.436 33.6692 240.319 24.5539 243.461 11.5173H220.098C216.466 11.5173 215.534 11.5663 213.915 11.8114V5.44009C215.681 5.73472 216.859 5.78373 220.196 5.78373H242.725Z",fill:"white"}),I=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.3481 41.1063H50.8699V3.91488H44.3481V41.1063Z",fill:"white"}),D=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83.4115 41.1063L75.0795 28.6057H66.6969V41.1063H60.0004V3.91488H76.986C85.7496 3.91488 91.1404 9.03327 91.1404 16.2623C91.1404 22.3814 87.3827 26.0744 82.0477 27.4992L91.305 41.1063H83.4115ZM76.4416 9.82391H66.6969V22.8555H76.494C81.2864 22.8555 84.3345 20.0573 84.3345 16.2595C84.3345 12.197 81.3957 9.82391 76.4416 9.82391Z",fill:"white"}),_=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 41.1063H7.01786C7.01786 41.1063 12.0586 30.378 26.8461 31.6149L30.8416 41.1063H37.8263L22.3641 3.91488H15.8368L0 41.1063ZM19.1799 11.6696L24.5894 25.7647C24.5894 25.7647 18.6453 25.5421 12.7018 28.3938L19.1799 11.6696Z",fill:"white"}),U=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M159.34 69.0572C152.085 67.3643 150.218 65.7507 150.218 62.8407C150.218 60.3529 152.194 58.3791 156.093 58.3791C159.559 58.3791 163.4 60.0612 166.812 62.5484L170.386 57.627C166.541 54.6105 161.433 52.8509 155.909 52.8509C148.383 52.8509 143.558 56.9666 143.558 63.4225C143.558 70.3022 148.239 72.9729 156.307 74.8783C163.347 76.4664 164.862 77.8949 164.862 80.5929C164.862 83.451 162.968 85.5798 158.855 85.5798C154.144 85.5798 149.809 83.557 146.182 80.488L142.175 85.1439C146.723 89.1131 152.899 91.3473 158.69 91.3473C166.651 91.3473 171.523 86.9439 171.523 79.9592C171.523 79.1268 171.447 78.3558 171.297 77.6407C170.333 73.0305 166.278 70.7074 159.34 69.0572Z",fill:"white"}),N=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M222.557 53.5034L213.48 80.8826L204.132 53.5046H198.48L189.132 80.8826L180.055 53.5034H172.827L186.088 90.6948H191.849L201.197 64.1591L210.545 90.6948H216.306L229.567 53.5034H222.557Z",fill:"white"}),q=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M279.718 72.4499H270.194V59.4122H279.718C284.74 59.4122 287.961 60.6369 287.961 65.7566C287.961 70.5628 284.795 72.4499 279.718 72.4499ZM280.264 53.5034H263.48V90.6948H270.194V78.3058H279.5C288.496 78.3058 294.785 73.82 294.785 65.4851C294.785 57.941 289.162 53.5034 280.264 53.5034Z",fill:"white"}),W=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M236.282 75.3528L241.691 61.2582L248.169 77.9822C242.226 75.1307 236.282 75.3528 236.282 75.3528ZM238.506 53.5034L223.045 90.6948H230.029L234.025 81.2035C248.813 79.9669 253.853 90.6948 253.853 90.6948H260.871L245.034 53.5034H238.506Z",fill:"white"}),G=function(n){return a.a.createElement("svg",S({width:295,height:92,viewBox:"0 0 295 92",fill:"none"},n),A,T,P,z,V,B,Z,I,D,_,U,N,q,W)},J=(e.p,e(48));function Y(){var n=Object(v.a)(["\n  cursor: pointer;\n  text-decoration: none;\n  border: 3px solid #2b71ff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n  box-sizing: border-box;\n  padding: 0 16px;\n  color: #ffffff;\n  font-weight: 700;\n  transition: all 300ms ease;\n\n  &:hover {\n    background: #2b71ff;\n    color: #fff;\n  }\n"]);return Y=function(){return n},n}var X=C.default.a(Y());function K(n){return a.a.createElement(X,{href:n.url,target:"_blank"},n.children)}var Q=e(371),$=e(196),nn=a.a.lazy(function(){return Promise.all([e.e(5),e.e(3)]).then(e.bind(null,1526))});function tn(n){return a.a.createElement(J.j,null,a.a.createElement(K,{url:n.url},n.label))}function en(){var n=a.a.useState(!1),t=Object(R.a)(n,2),e=t[0],r=t[1];return a.a.useEffect(function(){r(!0)},[]),a.a.createElement(J.c,null,a.a.createElement(J.f,null,a.a.createElement(J.a,null,a.a.createElement($.a,{to:"/"},a.a.createElement(G,{height:96}))),a.a.createElement(J.g,null,e&&a.a.createElement(i.Suspense,{fallback:a.a.createElement(Q.a,null,a.a.createElement(Q.c,null,"VOLUME"))},a.a.createElement(nn,null)),a.a.createElement(J.k,null,a.a.createElement(tn,{label:"TRADE",url:L.g}),a.a.createElement(tn,{label:"VOTE",url:L.h}),a.a.createElement(tn,{label:"BUILD",url:L.a}),a.a.createElement(tn,{label:"CHAT",url:L.b})))))}var rn=e(82);function an(n){return a.a.createElement(rn.a,{align:"center",direction:"row"},a.a.createElement($.a,{to:n.url},a.a.createElement(J.i,null,n.label)))}function on(){return a.a.createElement(J.c,null,a.a.createElement(J.e,null,a.a.createElement(J.h,null,a.a.createElement(an,{label:"SUPPORT",url:L.e}),a.a.createElement(an,{label:"PRIVACY",url:L.d}),a.a.createElement(an,{label:"TERMS",url:L.f}),a.a.createElement(J.i,null,a.a.createElement("span",{className:"fw-normal"},"COPYRIGHT")," 2021")),a.a.createElement(J.a,null,a.a.createElement($.a,{to:"/"},a.a.createElement(G,{height:32})))))}var ln=e(663),cn=e.n(ln),un=e(664),fn=e.n(un),dn=e(665),sn=e.n(dn),pn=e(666),hn=e.n(pn),mn=e(667),gn=e.n(mn);function wn(){var n=Object(v.a)(["\n    @font-face {\n        font-family: 'Roboto Mono';\n        src: url(",") format('truetype');\n        font-weight: 400;\n        font-style: normal;\n        font-display: swap;\n    }\n    @font-face {\n        font-family: 'Roboto Mono';\n        src: url(",") format('truetype');\n        font-weight: 500;\n        font-style: normal;\n        font-display: swap;\n    }\n    @font-face {\n        font-family: 'Roboto Mono';\n        src: url(",") format('truetype');\n        font-weight: 700;\n        font-style: normal;\n        font-display: swap;\n    }\n    @font-face {\n        font-family: 'Lora';\n        src: url(",") format('truetype');\n        font-weight: 400;\n        font-style: normal;\n        font-display: swap;\n    }\n    @font-face {\n        font-family: 'Lora';\n        src: url(",") format('truetype');\n        font-weight: 700;\n        font-style: normal;\n        font-display: swap;\n    }\n"]);return wn=function(){return n},n}var bn=Object(C.createGlobalStyle)(wn(),cn.a,fn.a,sn.a,hn.a,gn.a),xn=e(208),yn=e(23),vn=a.a.lazy(function(){return e.e(1).then(e.bind(null,1525))}),Cn=a.a.lazy(function(){return Promise.all([e.e(6),e.e(2)]).then(e.bind(null,1528))}),En=y(F(function(){return a.a.createElement(xn.a,null,a.a.createElement(J.b,null,a.a.createElement(bn,null),a.a.createElement(en,null),a.a.createElement(J.d,null,a.a.createElement(yn.d,null,a.a.createElement(a.a.Suspense,{fallback:""},a.a.createElement(yn.b,{exact:!0,path:"/"},a.a.createElement(vn,null)),a.a.createElement(yn.b,{path:"/:id",component:Cn})))),a.a.createElement(on,null)))}));l.a.render(a.a.createElement(En,null),document.getElementById("root"))},196:function(n,t,e){"use strict";var r=e(21),i=e(3),a=e.n(i),o=e(19),l=e(662);var c=e(208);function u(){var n=Object(r.a)(["\n      color: ",";\n    "]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  cursor: pointer;\n  text-decoration: none;\n  color: #ffffff;\n  ","\n"]);return f=function(){return n},n}e.d(t,"a",function(){return s});var d=o.default.span(f(),function(n){return n.primaryColor&&Object(o.css)(u(),function(n){return n.theme.palette.primaryColor})});function s(n){var t=n.primaryColor,e=n.to,r=n.children,i=function(n){if("string"!==typeof n)return!1;try{var t=new l.URL(n);if(t.host===window.location.host)return t.pathname}catch(e){return n}return!1}(e);return e&&!i?a.a.createElement("a",{href:e||"/",target:"_blank"},a.a.createElement(d,{primaryColor:t},r)):a.a.createElement(c.b,{to:e},a.a.createElement(d,{primaryColor:t},r))}},371:function(n,t,e){"use strict";e.d(t,"a",function(){return f}),e.d(t,"c",function(){return d}),e.d(t,"b",function(){return s});var r=e(21),i=e(19),a=e(81),o=e(82);function l(){var n=Object(r.a)(["\n  display: flex;\n  flex-flow: wrap;\n  font-weight: normal;\n\n  .volumne-loading {\n    padding: 8px;\n    height: 16px;\n  }\n  @media "," {\n    flex: 1;\n    min-width: 0;\n    & > * {\n      width: 50%;\n      flex: none;\n      margin: 0 !important;\n      padding: 0 10px 10px 0;\n    }\n  }\n"]);return l=function(){return n},n}function c(){var n=Object(r.a)(["\n  @media "," {\n    width: calc((100vw - 184px - 32px)/2);\n    min-width: 72px;\n  }\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  width: 100%;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  margin-bottom: ",";\n  @media "," {\n    align-items: flex-start;\n    margin-bottom: 22px;\n  }\n"]);return u=function(){return n},n}var f=Object(i.default)(o.a).attrs({direction:"row",justify:"space-between"})(u(),function(n){var t=n.theme;return"".concat(4*t.gridPoint,"px")},a.a.smMax),d=i.default.div(c(),a.a.smMax),s=i.default.div(l(),a.a.smMax)},382:function(n,t,e){"use strict";e.d(t,"a",function(){return w}),e.d(t,"b",function(){return b}),e.d(t,"c",function(){return x});var r=e(21),i=e(19);function a(){var n=Object(r.a)(["\n  color: ",";\n  text-transform: uppercase;\n  font-weight: ",";\n"]);return a=function(){return n},n}function o(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return o=function(){return n},n}function l(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return l=function(){return n},n}function c(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  font-weight: ",";\n  font-family: ",";\n  text-decoration: ",";\n  opacity: ",";\n  width: ",";\n  text-align: ",";\n  color: ",";\n  display: ",";\n  white-space: ",";\n  cursor: inherit;\n"]);return m=function(){return n},n}var g=i.default.div(m(),function(n){return n.weight||"normal"},function(n){return n.theme.text.fontFamily},function(n){return n.decoration||"none"},function(n){return n.opacity||1},function(n){return n.expand?"100%":"auto"},function(n){return n.textAlign||"center"},function(n){return n.color||"inherit"},function(n){return n.display||"auto"},function(n){return n.noWrap?"nowrap":"auto"}),w=(Object(i.default)(g)(h(),function(n){return n.theme.text.fontSize.h1},function(n){return n.theme.text.lineHeight.h1}),Object(i.default)(g)(p(),function(n){return n.theme.text.fontSize.h2},function(n){return n.theme.text.lineHeight.h2})),b=(Object(i.default)(g)(s(),function(n){return n.theme.text.fontSize.h3},function(n){return n.theme.text.lineHeight.h3}),Object(i.default)(g)(d(),function(n){return n.theme.text.fontSize.h4},function(n){return n.theme.text.lineHeight.h4})),x=(Object(i.default)(g)(f(),function(n){return n.theme.text.fontSize.h5},function(n){return n.theme.text.lineHeight.h5}),Object(i.default)(g)(u(),function(n){return n.theme.text.fontSize.h6},function(n){return n.theme.text.lineHeight.h6})),y=Object(i.default)(g)(c(),function(n){return n.theme.text.fontSize.h7},function(n){return n.theme.text.lineHeight.h7});Object(i.default)(g)(l(),function(n){return n.theme.text.fontSize.h8},function(n){return n.theme.text.lineHeight.h8}),Object(i.default)(g)(o(),function(n){return n.theme.text.fontSize.h9},function(n){return n.theme.text.lineHeight.h9}),Object(i.default)(y)(a(),function(n){return n.theme.palette.primaryColor},function(n){return n.theme.text.fontWeight.medium})},383:function(n,t,e){"use strict";e.d(t,"b",function(){return r});t.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ETH_PRICE":return t.price;default:return n}};var r={getEthPrice:function(n){return n.ethPrice}}},48:function(n,t,e){"use strict";e.d(t,"b",function(){return x}),e.d(t,"f",function(){return y}),e.d(t,"g",function(){return v}),e.d(t,"a",function(){return C}),e.d(t,"d",function(){return E}),e.d(t,"k",function(){return j}),e.d(t,"j",function(){return O}),e.d(t,"h",function(){return k}),e.d(t,"i",function(){return H}),e.d(t,"e",function(){return M}),e.d(t,"c",function(){return F});var r=e(21),i=e(19),a=e(81),o=e(82),l=e(382);function c(){var n=Object(r.a)(["\n  width: 1056px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n\n  @media (max-width: 1056px) {\n    width: 100%;\n  }\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  width: 100%;\n  margin: auto;\n  padding: 56px 0 80px 0;\n\n  @media "," {\n    padding: 56px 0 72px 0;\n  }\n\n  "," {\n    margin-bottom: 48px;\n    @media "," {\n      margin-bottom: 32px;\n    }\n  }\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  justify-content: center;\n  flex-flow: wrap;\n  max-width: 100%;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n\n  > * {\n    &:not(:last-child) {\n      &:after {\n        content: '';\n        width: 2px;\n        height: 2px;\n        border-radius: 100%;\n        margin: 0 16px;\n        background: ",";\n\n        @media "," {\n          margin: 0 12px;\n        }\n      }\n    }\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  padding: 0 10px;\n  @media "," {\n    width: 50%;\n    flex: none;\n    margin-bottom: 16px;\n  }\n  a {\n    width: 100%;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  margin: 0 -10px;\n  flex-flow: wrap;\n  > * {\n    flex: 1;\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  width: 100%;\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  @media "," {\n    justify-content: center;\n    align-items: center;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n  flex: 1;\n  min-width: 0;\n  margin-left: 110px;\n\n  @media "," {\n    margin: 32px 0 0 0;\n  }\n"]);return g=function(){return n},n}function w(){var n=Object(r.a)(["\n  width: 100%;\n  margin: auto;\n  padding-top: 110px;\n  padding-bottom: 80px;\n\n  @media "," {\n    display: block;\n    padding: 32px 0;\n    svg {\n      width: auto;\n      height: 60px;\n    }\n  }\n"]);return w=function(){return n},n}function b(){var n=Object(r.a)(["\n  position: relative;\n"]);return b=function(){return n},n}var x=Object(i.default)(o.a)(b()),y=Object(i.default)(o.a).attrs({direction:"row",justify:"space-between"})(w(),a.a.smMax),v=Object(i.default)(o.a).attrs({direction:"column",align:"stretch"})(g(),a.a.smMax),C=Object(i.default)(o.a).attrs({align:"flex-start"})(m(),a.a.smMax),E=i.default.div(h()),j=Object(i.default)(o.a).attrs({direction:"row"})(p()),O=i.default.div(s(),a.a.smMax),k=Object(i.default)(o.a).attrs({direction:"row"})(d(),function(n){return n.theme.palette.primaryColor},a.a.smMax),H=Object(i.default)(l.c)(f()),M=Object(i.default)(o.a).attrs({direction:"column",justify:"center",align:"center"})(u(),a.a.smMax,k,a.a.smMax),F=i.default.div(c())},663:function(n,t,e){n.exports=e.p+"static/media/RobotoMono-Regular.b4618f1f.ttf"},664:function(n,t,e){n.exports=e.p+"static/media/RobotoMono-Medium.5a45b286.ttf"},665:function(n,t,e){n.exports=e.p+"static/media/RobotoMono-Bold.c0c4a337.ttf"},666:function(n,t,e){n.exports=e.p+"static/media/Lora-Regular.4b658006.ttf"},667:function(n,t,e){n.exports=e.p+"static/media/Lora-Bold.84ece8c8.ttf"},672:function(n,t,e){n.exports=e(1511)},704:function(n,t){},719:function(n,t){},729:function(n,t){},734:function(n,t){},736:function(n,t){},750:function(n,t){},756:function(n,t){},763:function(n,t){},807:function(n,t){},809:function(n,t){},81:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=480,i=767,a=1024,o=1200,l={xsMin:"(min-width: ".concat(r+1,"px)"),smMin:"(min-width: ".concat(i+1,"px)"),mdMin:"(min-width: ".concat(a+1,"px)"),lgMin:"(min-width: ".concat(o+1,"px)"),xsMax:"(max-width: ".concat(r,"px)"),smMax:"(max-width: ".concat(i,"px)"),mdMax:"(max-width: ".concat(a,"px)"),lgMax:"(max-width: ".concat(o,"px)")}},82:function(n,t,e){"use strict";var r=e(21);function i(){var n=Object(r.a)(["\n  display: flex;\n  box-sizing: border-box;\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n  width: ",";\n  opacity: ",";\n  height: ",";\n"]);return i=function(){return n},n}var a=e(19).default.div(i(),function(n){return n.shrink},function(n){return n.shrink},function(n){return n.direction||"column"},function(n){return n.justify||"flex-start"},function(n){return n.align||"center"},function(n){return n.wrap||"nowrap"},function(n){return n.expand?"100%":"auto"},function(n){var t=n.opacity;return void 0!==t?t:1},function(n){return n.height||"auto"});a.displayName="Flex",a.defaultProps={direction:"column",justify:"flex-start",align:"center",wrap:"nowrap"},t.a=a},840:function(n,t){},845:function(n,t){},847:function(n,t){},871:function(n,t){},893:function(n,t){},906:function(n,t){},941:function(n,t){}},[[672,7,4]]]);