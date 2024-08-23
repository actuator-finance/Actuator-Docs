"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[430],{5394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(4848),o=a(8453);const r={sidebar_position:3},i="Extractable Stake Value",s={id:"Actuator Protocol/extractableStakeValue",title:"Extractable Stake Value",description:"Introduction",source:"@site/docs/Actuator Protocol/extractableStakeValue.md",sourceDirName:"Actuator Protocol",slug:"/Actuator Protocol/extractableStakeValue",permalink:"/Actuator Protocol/extractableStakeValue",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Actuator Wrapped HEX Stakes",permalink:"/Actuator Protocol/wrappedHSIs"},next:{title:"Choosing the Redemption Day",permalink:"/Actuator Protocol/choosingTheRedemptionDay"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Definition",id:"definition",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Actuator and Extractable Stake Value",id:"actuator-and-extractable-stake-value",level:3},{value:"Formula",id:"formula",level:3}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"extractable-stake-value",children:"Extractable Stake Value"}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Understanding the concept of 'Extractable Stake Value' is key to understanding Actuator. The amount of HTTs that can be extracted from a given stake can never exceed the Extractable Stake Value.\r\nThe Extractable Stake Value is not a novel concept created by Actuator but instead, simply a formalized description of the underlying mechanics of the HEX protocol."}),"\n",(0,n.jsx)(t.h3,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.p,{children:"The Extractable Stake Value can be defined as the minimal amount of HEX end stake proceeds on a given future day."}),"\n",(0,n.jsx)(t.h3,{id:"explanation",children:"Explanation"}),"\n",(0,n.jsx)(t.p,{children:"The Extractable Stake Value at end stake is always the originally staked HEX + accrued HEX rewards to date. In other words, assuming a timely end stake, we are guaranteed to eventually receive our staked HEX + HEX interest to date. However, the Extractable Stake Value varies as we adjust the target day. For example, the Extractable Stake Value 1 year after the scheduled end stake day is staked HEX + HEX interest to date - the Late End Stake Penalty. And 2 years after the scheduled end stake, the Extractable Stake Value is 0 HEX, as the HEX protocol wipes away 100% of the stake value 52 weeks after end stake."}),"\n",(0,n.jsx)(t.p,{children:"When calculating the Extractable Stake Value where the target day is before end stake but after mid-stake, we need to apply the EES formula from the HEX protocol. In which case, the Extractable Stake Value is staked HEX + HEX payouts post mid-stake. Only payouts after mid-stake are included and all payouts earned in the first half are assumed to be wiped away by the Early End Stake penalty."}),"\n",(0,n.jsx)(t.p,{children:"Furthermore, If the target day is before mid-stake, we are forced to assume the Extractable Stake Value is zero. The reason being is that (while unlikely) the HEX protocol may potentially penalize 100% of the principal and rewards when end staking before mid-stake."}),"\n",(0,n.jsx)(t.h3,{id:"actuator-and-extractable-stake-value",children:"Actuator and Extractable Stake Value"}),"\n",(0,n.jsx)(t.p,{children:"The above explanation simply describes what's always been true about the HEX protocol. Actuator leverages these properties of HEX to determine how many HTTs can be minted for a given redemption day."}),"\n",(0,n.jsx)(t.p,{children:"When extracting HTTs from a stake, it should be noted that assigning the redemption day before end stake day imposes extra responsibility on the staker. Stakers who choose this strategy subject themselves to EES by any user in the event they fail to return their minted HTTs by redemption day. This is because HTTs that have reached redemption day need to access the underlying HEX that backs them and thus the collateralized stakes need to be ended. However, stakers in this position can simply buy back and return their borrowed HTTs before redemption to regain full control of their stake and avoid EES by the community."}),"\n",(0,n.jsx)(t.p,{children:"While this can be a very powerful strategy in leveraging the full value of your stake, it should only be done by advanced users who fully understand its implications. We therefore recommend users set their redemption day on or after end stake to eliminate the risk of EES entirely."}),"\n",(0,n.jsx)(t.h3,{id:"formula",children:"Formula"}),"\n",(0,n.jsx)(t.p,{children:"The above explanation leaves out a small component of the formula which is the 'Escrowed Rewards' (See 'Redemption' for more info). We incorporate this component below to arrive at the rigorous and final formula:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Extractable Stake Value"})," = Staked HEX + HEX Payouts to Date - [Late End Stake Penalty (if any) OR Early End Stake Penalty (if any)] - End Stake Subsidy (if any)"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);