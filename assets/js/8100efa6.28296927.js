"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[718],{6679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(4848),s=a(8453);const o={sidebar_position:5},n="Redemption Process",i={id:"Actuator Protocol/redemption",title:"Redemption Process",description:"The redemption process introduces challenges given that HTTs can be backed by many stakes. Users who attempt to redeem their HTTs may end up paying large sums of gas fees to initiate multiple end stakes. However, the system mostly eliminates these concerns by penalizing original stakers who fail to end their stake and incentivizing community end staking. All rewards accrued in the last 10% of a stake's life are held in 'escrow' (i.e. in the contract) and are not eligible as collateral for HTTs. This incentivizes the original staker to end the stake in order to collect their 'escrowed' rewards. Stakers who fail to end stake in a timely manner forgo up to all escrowed rewards. These rewards are instead credited to any user who initiates the end stake. Stakers have 3 grace days before escrowed rewards begin flowing to the end staker. Each day after the grace period (3 days), an additional 1/10th of the escrowed rewards are credited to the end staker up to the 10th day where 100% of the escrowed rewards go the end staker. This gradual, linear increase helps ensure there's a 'breakeven' day where the end stake rewards equal or exceed the cost of gas when end staking. This allows for an elegant market-based solution to the gas cost problem associated with end stake.",source:"@site/docs/Actuator Protocol/redemption.md",sourceDirName:"Actuator Protocol",slug:"/Actuator Protocol/redemption",permalink:"/Actuator Protocol/redemption",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Choosing the Redemption Day",permalink:"/Actuator Protocol/choosingTheRedemptionDay"},next:{title:"Examples",permalink:"/Actuator Protocol/examples"}},d={},c=[];function l(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"redemption-process",children:"Redemption Process"}),"\n",(0,r.jsx)(t.p,{children:"The redemption process introduces challenges given that HTTs can be backed by many stakes. Users who attempt to redeem their HTTs may end up paying large sums of gas fees to initiate multiple end stakes. However, the system mostly eliminates these concerns by penalizing original stakers who fail to end their stake and incentivizing community end staking. All rewards accrued in the last 10% of a stake's life are held in 'escrow' (i.e. in the contract) and are not eligible as collateral for HTTs. This incentivizes the original staker to end the stake in order to collect their 'escrowed' rewards. Stakers who fail to end stake in a timely manner forgo up to all escrowed rewards. These rewards are instead credited to any user who initiates the end stake. Stakers have 3 grace days before escrowed rewards begin flowing to the end staker. Each day after the grace period (3 days), an additional 1/10th of the escrowed rewards are credited to the end staker up to the 10th day where 100% of the escrowed rewards go the end staker. This gradual, linear increase helps ensure there's a 'breakeven' day where the end stake rewards equal or exceed the cost of gas when end staking. This allows for an elegant market-based solution to the gas cost problem associated with end stake."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>i});var r=a(6540);const s={},o=r.createContext(s);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);