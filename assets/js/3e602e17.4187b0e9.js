"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[326],{3296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(4848),i=n(8453);const o={sidebar_position:4},s="Choosing the Redemption Day",r={id:"Actuator Protocol/choosingTheRedemptionDay",title:"Choosing the Redemption Day",description:"Introduction",source:"@site/docs/Actuator Protocol/choosingTheRedemptionDay.md",sourceDirName:"Actuator Protocol",slug:"/Actuator Protocol/choosingTheRedemptionDay",permalink:"/Actuator Protocol/choosingTheRedemptionDay",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Extractable Stake Value",permalink:"/Actuator Protocol/extractableStakeValue"},next:{title:"Redemption Process",permalink:"/Actuator Protocol/redemption"}},d={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Redemption Day = End Stake Day",id:"redemption-day--end-stake-day",level:3},{value:"Redemption Day &gt; End Stake Day",id:"redemption-day--end-stake-day-1",level:3},{value:"Redemption Day &gt; End Stake Day",id:"redemption-day--end-stake-day-2",level:3},{value:"Other Considerations When Choosing Redemption Day",id:"other-considerations-when-choosing-redemption-day",level:3}];function h(e){const t={h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"choosing-the-redemption-day",children:"Choosing the Redemption Day"}),"\n",(0,a.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"There are several implications to consider when choosing the redemption day for extracting 'HEX Time Tokens' (HTT) from your stake. At a high level, there are 3 approaches:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Redemption Day = End Stake Day"}),"\n",(0,a.jsx)(t.li,{children:"Redemption Day > End Stake Day"}),"\n",(0,a.jsx)(t.li,{children:"Redemption Day < End Stake Day"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"redemption-day--end-stake-day",children:"Redemption Day = End Stake Day"}),"\n",(0,a.jsx)(t.p,{children:"The simplest and recommended approach in most cases is for users to set the redemption day of the extracted HTTs to the same day as the end stake day of their stake. Under this approach, the extractable amount of HTTs for a given stake will always equal the staked HEX + HEX payouts to date. As each day progresses, the HEX payouts increase and thus the extractable amount of HTTs increase. Once end stake day arrives, the original staker can end stake and collect their HEX proceeds minus any outstanding HTTs, otherwise, the community will be incentivized to end stake and achieve the same effect (in which case, some or all 'Escrowed Rewards' go to the user who ends the stake. See 'Redemption' for more info)."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)("small",{children:["In this example, principal is 10,000 HEX, stake end is day 5000 and redemption is day 5000. Current day is set to 2000. ",(0,a.jsx)("br",{}),'\r\nNote the "Current Extractable Value" equals "Intrinsic Value" due to redemption day falling on end stake day.']}),"\r\n",(0,a.jsx)(t.img,{alt:"Alt text",src:n(286).A+"",width:"1179",height:"637"})]}),"\n",(0,a.jsx)(t.h3,{id:"redemption-day--end-stake-day-1",children:"Redemption Day > End Stake Day"}),"\n",(0,a.jsx)(t.p,{children:"While setting the redemption day to the end stake day is convenient, many times there will not be a liquid trading pool for that particular HEX Time Token. In which case, stakers can choose to set the redemption day beyond end stake day in order to mint a HEX Time Token that is liquid and tradable.\r\nThis choice impacts the extractable stake value as the protocol now needs to account for the possibility the original staker fails to end stake by redemption day. Thus, the amount of extractable HTTs is lowered by the theoretical late end stake penalty (See 'Extractable Stake Value' for more info). The larger the difference between redemption day and end stake day, the greater the theoretical penalty, and thus the lower the extractable HTT amount."}),"\n",(0,a.jsx)(t.p,{children:"Under this approach, the original staker doesn't incur any additional responsibility that isn't already imposed by the HEX protocol. Stakers who choose this strategy, need to simply remember to end stake on time as always and collect the HEX proceeds minus the quantity of outstanding HTTs. In the event the staker fails to end stake, the community will eventually be eligible and incentivized to end stake once redemption day arrives. At which point, the original the HEX proceeds will be transferred to the original staker minus the late penalty and outstanding HTTs."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)("small",{children:["In this example, principal is 10,000 HEX, stake end is day 5000 and redemption is day 5330. Current day is set to 1725. ",(0,a.jsx)("br",{}),'\r\nNote the "Current Extractable Value" is roughly half the "Intrinsic Value" due to redemption day falling half way into late penalty (i.e. 1 year after end stake).']}),"\r\n",(0,a.jsx)(t.img,{alt:"Alt text",src:n(5115).A+"",width:"1185",height:"643"})]}),"\n",(0,a.jsx)(t.h3,{id:"redemption-day--end-stake-day-2",children:"Redemption Day > End Stake Day"}),"\n",(0,a.jsx)(t.p,{children:"Users can also choose an advanced yet powerful strategy where the redemption day is set before the end stake day. Under this approach, the HTTs are no longer backed by the intrinsic value of the stake, but instead are backed by the EES value (See 'Extractable Stake Value' for more info). However, given they are backed by the EES value, users are therefore subject to EES by the community in the event they don't return all extracted HTTs by the redemption day."}),"\n",(0,a.jsx)(t.p,{children:"Unlike the first 2 approaches, this strategy is effectively a loan that can be liquidated if not repaid on time. In the event the original staker fails to return all outstanding HTTs by redemption day, the community will be eligible to EES the stake on redemption day. At which point, any HEX proceeds will be transferred to the original staker minus the early end stake penalty and outstanding HTTs."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)("small",{children:["In this example, principal is 10,000 HEX, stake end is day 5000 and redemption is day 3800. Current day is set to 2500. ",(0,a.jsx)("br",{}),'\r\nNote the "Current Extractable Value" is the principal (10,000 HEX) due to redemption day falling before end stake.']}),"\r\n",(0,a.jsx)(t.img,{alt:"Alt text",src:n(6584).A+"",width:"1177",height:"649"})]}),"\n",(0,a.jsx)(t.h3,{id:"other-considerations-when-choosing-redemption-day",children:"Other Considerations When Choosing Redemption Day"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["HTT Discounts","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Earlier redemption days result in smaller HTT discounts to HEX and thus a higher HTT dollar value."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["HTT pricing anomaly","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"One HTT may be 'overpriced' relative to another, thus impacting the redemption day selection."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["HTT Liquidity","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Certain HTTs will inevitably be more liquid than others, which impacts the decision depending on the size of your HTT position."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Extractable Stake Value","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Different redemption days selections will result in different quantities of extractable HTTs."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Investment Time Horizon","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Short time horizons may justify opting for earlier redemption days."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},286:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/RedemptionEqualEndDay-74566aab0f751286ed8b5b19831dc51a.png"},5115:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/RedemptionGreaterThanEnd-c3ef32bf2f7148b3da6f433576de4d0a.png"},6584:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/RedemptionLessThanEnd-e8c324ff2ec902cfba276e7f7c667a1f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);