"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[326],{3296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(4848),a=n(8453);const o={sidebar_position:4},r="Choosing the Redemption Day",s={id:"Actuator Protocol/choosingTheRedemptionDay",title:"Choosing the Redemption Day",description:"Introduction",source:"@site/docs/Actuator Protocol/choosingTheRedemptionDay.md",sourceDirName:"Actuator Protocol",slug:"/Actuator Protocol/choosingTheRedemptionDay",permalink:"/Actuator Protocol/choosingTheRedemptionDay",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Extractable Stake Value",permalink:"/Actuator Protocol/extractableStakeValue"},next:{title:"Redemption Process",permalink:"/Actuator Protocol/redemption"}},d={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Redemption Day = End Stake Day",id:"redemption-day--end-stake-day",level:3},{value:"Redemption Day &gt; End Stake Day",id:"redemption-day--end-stake-day-1",level:3},{value:"Redemption Day &gt; End Stake Day",id:"redemption-day--end-stake-day-2",level:3},{value:"Other Considerations When Choosing Redemption Day",id:"other-considerations-when-choosing-redemption-day",level:3}];function h(e){const t={h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"choosing-the-redemption-day",children:"Choosing the Redemption Day"}),"\n",(0,i.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"There are several implications to consider when choosing the redemption day for extracting 'HEX Time Tokens' (HTT) from your stake. At a high level, there are 3 approaches:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Redemption Day = End Stake Day"}),"\n",(0,i.jsx)(t.li,{children:"Redemption Day > End Stake Day"}),"\n",(0,i.jsx)(t.li,{children:"Redemption Day < End Stake Day"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"redemption-day--end-stake-day",children:"Redemption Day = End Stake Day"}),"\n",(0,i.jsx)(t.p,{children:"The simplest and recommended approach in most cases is for users to set the redemption day of the extracted HTTs to the same day as the end day of their stake. Under this approach, the extractable amount of HTTs for a given stake will always equal the staked HEX + HEX payouts to date. As each day progresses, the HEX payouts increase and thus the extractable amount of HTTs increase. Once end day arrives, the original staker can end stake and collect their HEX proceeds minus any outstanding HTTs, otherwise, the community will be incentivized to end stake and achieve the same effect (in which case, some or all 'Escrowed Rewards' go to the user who ends the stake. See 'Redemption' for more info)."}),"\n",(0,i.jsx)(t.h3,{id:"redemption-day--end-stake-day-1",children:"Redemption Day > End Stake Day"}),"\n",(0,i.jsx)(t.p,{children:"While setting the redemption day to the end day is convenient, many times there will not be a liquid trading pool for that particular HEX Time Token. In which case, stakers can choose to set the redemption day beyond end day in order to mint a HEX Time Token that is liquid and tradable.\r\nThis choice impacts the extractable stake value as the protocol now needs to account for the possibility the original staker fails to end stake by redemption day. Thus, the amount of extractable HTTs is lowered by the theoretical late end stake penalty (See 'Extractable Stake Value' for more info). The larger the difference between redemption day and end day, the greater the theoretical penalty, and thus the lower the extractable HTT amount."}),"\n",(0,i.jsx)(t.p,{children:"Under this approach, the original staker doesn't incur any additional responsibility that isn't already imposed by the HEX protocol. Stakers who choose this strategy, need to simply remember to end stake on time as always and collect the HEX proceeds minus the quantity of outstanding HTTs. In the event the staker fails to end stake, the community will eventually be eligible and incentivized to end stake once redemption day arrives. At which point, the original the HEX proceeds will be transferred to the original staker minus the late penalty and outstanding HTTs."}),"\n",(0,i.jsx)(t.h3,{id:"redemption-day--end-stake-day-2",children:"Redemption Day > End Stake Day"}),"\n",(0,i.jsx)(t.p,{children:"Users can also choose an advanced yet powerful strategy where the redemption day is set before the end stake day. Under this approach, the HTTs are no longer backed by the intrinsic value of the stake, but instead are backed by the EES value (See 'Extractable Stake Value' for more info). However, given they are backed by the EES value, users are therefore subject to EES by the community in the event they don't return all extracted HTTs by the redemption day."}),"\n",(0,i.jsx)(t.p,{children:"Unlike the first 2 approaches, this strategy is effectively a loan that can be liquidated if not repaid on time. In the event the original staker fails to return all outstanding HTTs by redemption day, the community will be eligible to EES the stake on redemption day. At which point, any HEX proceeds will be transferred to the original staker minus the early end stake penalty and outstanding HTTs."}),"\n",(0,i.jsx)(t.h3,{id:"other-considerations-when-choosing-redemption-day",children:"Other Considerations When Choosing Redemption Day"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["HTT Discounts","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Earlier redemption days result in smaller HTT discounts to HEX and thus a higher HTT dollar value."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["HTT pricing anomaly","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"One HTT may be 'overpriced' relative to another, thus impacting the redemption day selection."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["HTT Liquidity","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Certain HTTs will inevitably be more liquid than others, which impacts the decision depending on the size of your HTT position."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Extractable Stake Value","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Different redemption days selections will result in different quantities of extractable HTTs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Investment Time Horizon","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Short time horizons may justify opting for earlier redemption days."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);