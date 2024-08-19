"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[761],{6665:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(4848),t=i(8453);const l={sidebar_position:5},a="Examples",r={id:"Actuator Protocol/examples",title:"Examples",description:"Example 1 - Basic Actions",source:"@site/docs/Actuator Protocol/examples.md",sourceDirName:"Actuator Protocol",slug:"/Actuator Protocol/examples",permalink:"/Actuator Protocol/examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Redemption Process",permalink:"/Actuator Protocol/redemption"},next:{title:"System Invariants/Properties",permalink:"/Actuator Protocol/invariants"}},o={},d=[{value:"Example 1 - Basic Actions",id:"example-1---basic-actions",level:2},{value:"Example 2 - Custom Redemption Day (Redemption Day &gt; End Stake)",id:"example-2---custom-redemption-day-redemption-day--end-stake",level:2},{value:"Example 3 - Custom Redemption Day (Redemption Day &lt; End Stake)",id:"example-3---custom-redemption-day-redemption-day--end-stake",level:2},{value:"Example 4 - Community End Stake Incentive",id:"example-4---community-end-stake-incentive",level:2},{value:"Example 5 - Late Redemption 1",id:"example-5---late-redemption-1",level:2},{value:"Example 6 - Late Redemption 2",id:"example-6---late-redemption-2",level:2}];function c(e){const n={h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h2,{id:"example-1---basic-actions",children:"Example 1 - Basic Actions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Stakes","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob creates a HEX stake instance through Actuator with a principal of 150 HEX, ending on HEX day 3000. Alice creates a stake with a principal of 600 HEX, ending on day 3000 as well."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Both Alice and Bob immediately mint HEX-3000 in quantities equal to the size of their staked HEX (i.e. principal). Thus, Bob mints 150 HEX-3000 and Alice mints 600 HEX-3000. Resulting in a total of 750 HEX-3000 minted."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens against new rewards","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"100 days later, Bob has accrued 25 HEX in rewards and wants to mint more HEX-3000 against this newly rewarded HEX. So Bob mints 25 HEX-3000 bringing his total to 175 HEX-3000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Sale of HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob sells all 175 HEX-3000 to Alice through PulseX. Alice has 775 HEX-3000. Bob has 0 HEX-3000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["End Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob goes to end stake, but only receives the rewards earned on his stake between days 100 and the end because he minted HEX-3000 against all accrued rewards between days 1 and 99. Bob also doesn't receive his principal because he minted HEX-3000 against that as well."}),"\n",(0,s.jsx)(n.li,{children:"Alice goes to end stake and receives her accrued rewards over the course of the entire stake because Alice didn't mint any HEX-3000 against her rewards. But she doesn't receive her principal since she minted HEX-3000 against her principal. However, Alice still has 775 HEX-3000 which she can exchange 1 for 1 for HEX since the corresponding amount of HEX was withheld from Bob and Alice at end stake."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-2---custom-redemption-day-redemption-day--end-stake",children:"Example 2 - Custom Redemption Day (Redemption Day > End Stake)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 1900."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob wants to mint and sell HTT-1900 but there is no liquid trading pool to trade HTT-1900 in. There is, however, a liquid pool for HTT-2000."}),"\n",(0,s.jsx)(n.li,{children:"Bob mints 150 HTT-2000 against his stake and sells 150 HTT-2000 into the trading pool."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Retire HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 1850 arrives and Bob wants to regain control of a portion of the collateralized HEX in his stake."}),"\n",(0,s.jsx)(n.li,{children:"Bob buys 50 HTT-2000 from the trading pool and returns the 50 HTT-2000 to Actuator which is then burned."}),"\n",(0,s.jsx)(n.li,{children:"Bob now only has 100 HTT-2000 outstanding against his stake."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["End Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 1900 arrives"}),"\n",(0,s.jsx)(n.li,{children:"Bob invokes end stake and receives the full HEX proceeds from his stake except for the 100 HEX that was collateralized."}),"\n",(0,s.jsx)(n.li,{children:"The 100 collateralized HEX is held in reserve in the protocol until redemption on day 2000"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Redemption Day","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 2000 arrives"}),"\n",(0,s.jsx)(n.li,{children:"All HTT-2000 holders can redeem their HTT-2000 1:1 for HEX which includes the collateralized HEX held in reserve from Bob's stake."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-3---custom-redemption-day-redemption-day--end-stake",children:"Example 3 - Custom Redemption Day (Redemption Day < End Stake)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 7000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob wants to extract and sell HTT with the minimal possible redemption day (while still being liquid)."}),"\n",(0,s.jsx)(n.li,{children:"He is unable to mint HTT-3000 as day 3000 is pre mid-stake. However, day 5000 is post mid-stake and has a liquid pool."}),"\n",(0,s.jsx)(n.li,{children:"Bob mints 150 HTT-5000 against his stake and sells 150 HTT-5000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Day 3000 approaches","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 2999 arrives and Bob must return his extracted HTT-3000 by the end of the day to avoid early end stake (EES) by the the community."}),"\n",(0,s.jsx)(n.li,{children:"Bob buys back 150 HTT-3000 and returns the 150 HTT-3000 to Actuator which is then burned. Bob now regains full control of his stake and avoids EES."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Re-extract HEX Time Tokens.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob wants to take out another loan."}),"\n",(0,s.jsx)(n.li,{children:"Bob mints 150 HTT-4000 against his stake and sells the 150 HTT-4000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Day 4000 arrives","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob regrettably forgets to return his loaned HTT-4000 against his stake. Any user can end stakes whose extracted tokens have 'matured'."}),"\n",(0,s.jsx)(n.li,{children:"Bob's stake is EES'd be a random user who collects the small end stake subsidy. Bob immediately receives the EES value of his stake minus 150 HEX (the amount extracted) and minus the small end stake subsidy amount. The 150 HEX withheld is reserved for the outstanding HTT-4000 tokens which can be redeemed 1:1 for HEX."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-4---community-end-stake-incentive",children:"Example 4 - Community End Stake Incentive"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 3000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob mints 150 HTT-3000 against his stake and sends the 150 HTT-3000 to Alice."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["End Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 3000 arrives"}),"\n",(0,s.jsx)(n.li,{children:"Bob lost his private keys and is unable to end his stake"}),"\n",(0,s.jsx)(n.li,{children:"Alice needs to end Bob's stake to unlock HEX to redeem her 150 HTT-3000 but she doesn't want to pay the gas costs"}),"\n",(0,s.jsx)(n.li,{children:"Day 3003 arrives"}),"\n",(0,s.jsx)(n.li,{children:"1/10th of Bob's 'escrowed' rewards (all rewards earned in the final 10% of the stake's life are 'escrowed') will now be paid out to whoever ends the stake. However, the gas costs still exceed the end stake rewards so no one chooses to unlock the stake"}),"\n",(0,s.jsx)(n.li,{children:"Day 3007 arrives"}),"\n",(0,s.jsx)(n.li,{children:"5/10ths of Bob's escrowed rewards will now be paid out to the end staker and that amount happens to exceed the gas costs."}),"\n",(0,s.jsx)(n.li,{children:"Charlie who owns no HTTs or stakes chooses to end Bob's stake to earn the end stake reward. The remaining HEX proceeds go to Bob except for collateralized 150 HEX held in reserve."}),"\n",(0,s.jsx)(n.li,{children:"Alice then redeems here 150 HTT-3000 for 150 HEX without having to ever end stake."}),"\n",(0,s.jsx)(n.li,{children:"Alice invokes end stake on Bob's stake and receives the full HEX proceeds from his stake except for the 100 HEX that was collateralized."}),"\n",(0,s.jsx)(n.li,{children:"The 100 collateralized HEX is held in reserve in the protocol until redemption on day 3000"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-5---late-redemption-1",children:"Example 5 - Late Redemption 1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 3000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob mints 150 HTT-3000 against his stake and sends the 150 HTT-3000 to Alice."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["End Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 3000 arrives"}),"\n",(0,s.jsx)(n.li,{children:"Bob ends his stake and receives the proceeds except for the 150 collateralized HEX."}),"\n",(0,s.jsx)(n.li,{children:"Alice forgets to redeem her HTT."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["1000 days pass","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Alice finally remembers she owns 150 HTT-3000 tokens."}),"\n",(0,s.jsx)(n.li,{children:"Alice redeems 150 HTT-3000 for 150 HEX which had been held reserve until now."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-6---late-redemption-2",children:"Example 6 - Late Redemption 2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob creates a new HSI through Actuator with a principal of 100 HEX, ending on HEX day 3000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mint HEX Time Tokens","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob mints 100 HTT-3000 against his stake and sends the 100 HTT-3000 to Alice."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["End Stake","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Day 3000 arrives"}),"\n",(0,s.jsx)(n.li,{children:"Bob's stake has accrued an additional 100 HEX in rewards bringing the total proceeds to 200 HEX."}),"\n",(0,s.jsx)(n.li,{children:"Bob lost his private keys and fails to end stake"}),"\n",(0,s.jsx)(n.li,{children:"Alice forgets to redeem her 100 HTT-3000"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["200 days pass","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Alice remembers to redeem so she ends Bob's stake."}),"\n",(0,s.jsx)(n.li,{children:"roughly 25% of Bob's stake value is penalized (enforced by HEX protocol) bringing his total value to 150 HEX"}),"\n",(0,s.jsx)(n.li,{children:"HTT holders have higher priority over stakers so Alice redeems her 100 HTT-3000 for the full 100 HEX"}),"\n",(0,s.jsx)(n.li,{children:"Only 50 HEX goes to Bob instead of 100 HEX due to the 50 HEX penalty and the 100 collateralized HEX belonging to Alice"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);