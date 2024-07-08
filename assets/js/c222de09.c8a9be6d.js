"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[460],{8357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(4848),i=n(8453);const r={sidebar_position:6},s="Whitepaper",o={id:"whitepaper",title:"Whitepaper",description:"Introduction",source:"@site/docs/whitepaper.md",sourceDirName:".",slug:"/whitepaper",permalink:"/whitepaper",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ACTR Staking",permalink:"/actuatorToken/staking"},next:{title:"Glossary",permalink:"/glossary"}},d={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Actuator Protocol Overview",id:"actuator-protocol-overview",level:3},{value:"Actuator Wrapped Stakes",id:"actuator-wrapped-stakes",level:3},{value:"HEX Time Token (HTT)",id:"hex-time-token-htt",level:3},{value:"Redemption Process",id:"redemption-process",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Market Dynamics",id:"market-dynamics",level:3},{value:"Use Cases",id:"use-cases",level:3}];function c(e){const t={h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"whitepaper",children:"Whitepaper"}),"\n",(0,a.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Any given HEX stake has an 'intrinsic value' defined as the initial HEX staked plus accrued HEX rewards to date. This intrinsic amount of HEX is always growing, knowable at any given time, and unlockable at end stake. Actuator leverages these properties by allowing HEX stakers to mint a new type of token backed by the intrinsic HEX value of their stake. We're calling these tokens 'HEX Time Tokens' (HTTs). HTTs are fungible ERC20 tokens backed 1:1 by HEX at all times and redeemable 1:1 for HEX after end stake when the underlying HEX becomes unlocked. Notably, this approach enables distinct stakes to utilize their common collateral (intrinsic HEX value), and gain shared liquidity through a single, fungible token (assuming a common HTT redemption day)."}),"\n",(0,a.jsx)(t.h3,{id:"actuator-protocol-overview",children:"Actuator Protocol Overview"}),"\n",(0,a.jsx)(t.p,{children:"Actuator is a decentralized protocol that wraps existing or new HEX stakes with additional functionality. Stake owners can mint fungible ERC20 tokens called 'HEX Time Tokens' (HTTs) backed 1:1 by their stake's underlying HEX. For every HEX Time Token minted, 1 HEX token is designated as collateral. The quantity of collateralized HEX is capped by the intrinsic HEX value of the underlying stake (i.e. staked HEX + accrued HEX rewards to date). Stakers can choose to forgo their collateralized HEX by selling their HTTs into the market or they can regain control of their collateral by retiring (i.e. returning) their HTTs any time before the designated redemption day. All outstanding HTTs are redeemable 1:1 for HEX on or after the designated redemption day. The redemption day is chosen by the staker when the HTTs are created and must fall on or after the end day of the underlying stake. Only one HTT can be minted for every one HEX staked or rewarded for a given HSI. Within a stake, any HEX that does not back HTTs (i.e. non-collateralized HEX) is simply collected by the original staker at end stake. No coordination, special timing, capacity limits or centralized intervention is required at any time. Prior to redemption day, the HTTs could be bought or sold through trading pools, allowing stakers to easily liquidate the intrinsic value of their stake at a fair price. Additionally, users can purchase HTTs (at the desired redemption day) and lock in a fixed rate of return (assuming the HTT trades at a discount to HEX) since they will be able to redeem their HTTs for the underlying HEX. Subsequently, this would result in a market-driven emergent yield curve for HEX across various redemption days thus creating new information for the HEX ecosystem to benchmark investments and drive new tools/opportunities."}),"\n",(0,a.jsx)(t.h3,{id:"actuator-wrapped-stakes",children:"Actuator Wrapped Stakes"}),"\n",(0,a.jsx)(t.p,{children:"Every Actuator wrapped stake is a HEX Stake Instance (HSI) and thus Actuator rides on top of the Hedron protocol. Actuator wrapped stakes can be created through the Actuator contract (which then invokes the Hedron contract and creates the HSI) or existing HSIs can be delegated to the Actuator contract. Actuator wrapped stakes retain the ability to mint Hedron at any time and can always be unwrapped back into a standard tokenized HSI. Once created/delegated, stakers can mint 'HEX Time Tokens' (HTTs) against the stake's underlying HEX value. Stakers can mint any amount of HTTs whenever they choose as many times as they want, as long as the total quantity minted doesn't exceed the intrinsic HEX value of the stake. Additionally, users can retire any or all tokens they've minted at any time. If HTTs have been minted, stakers are not able to early end stake, nor are they able to tokenize their HSI (i.e. revoke delegation) until they've retired all HTTs. This ensures the system accounting is always balanced and guarantees 1 HTT will always be redeemable for 1 HEX at the designated redemption day. Once end stake day arrives, stakers can collect any HEX rewards/principal that hasn't been minted against (i.e. collateralized) and the remaining HEX is reserved for redemption by HTT holders."}),"\n",(0,a.jsx)(t.h3,{id:"hex-time-token-htt",children:"HEX Time Token (HTT)"}),"\n",(0,a.jsx)(t.p,{children:"A 'HEX Time Token' (HTT) is an ERC20 token that can be redeemed 1:1 for HEX at the designated redemption day. The redemption day is visible in the token symbol. For example, 1 HEX time token with symbol HTT-3000 is redeemable for 1 HEX on HEX day 3000. HTT holders have 2 weeks to redeem their tokens for HEX without penalty. However, after 2 weeks, HTT holders cannot be guaranteed a 1:1 redemption for HEX. This is due to the behavior of the HEX protocol. Since HTTs are backed by stakes, and stakes that end after 14 days begin to incur late penalties, these penalties will impact HTT redemption. After 2 weeks, redemption is on a first come first serve basis. With that being said, it may be the case that all redemptions after 14 weeks can still exchange 1:1 for HEX if all underlying stakes are unlocked on time. This is due to the strong community end stake incentive built into the protocol (see 'Redemption Process' for more info)."}),"\n",(0,a.jsx)(t.h3,{id:"redemption-process",children:"Redemption Process"}),"\n",(0,a.jsx)(t.p,{children:"The redemption process introduces challenges given that HTTs can be backed by many stakes. Users who attempt to redeem their HTTs may end up paying large sums of gas fees to initiate multiple end stakes. However, the system mostly eliminates these concerns by penalizing original stakers who fail to end their stake and incentivizing community end staking. All rewards accrued in the last 10% of a stake's life are held in 'escrow' (i.e. in the contract) and are not eligible as collateral for HTTs. Stakers who fail to end stake in a timely manner forgo up to all escrowed rewards. These rewards are instead credited to any user who initiates the end stake. Stakers have 3 grace days before escrowed rewards begin flowing to the end staker. Each day after the grace period (3 days), an additional 1/10th of the escrowed rewards are credited to the end staker up to the 10th day where 100% of escrowed rewards go the end staker. This gradual, linear increase ensures there's a 'break even' day where the end stake rewards equal or exceed the cost of gas when end staking. This allows for an elegant market-based solution to the gas cost problem associated with end stake."}),"\n",(0,a.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Create Stakes","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Bob creates a HEX stake instance through Actuator with a principal of 150 HEX, ending on HEX day 3000. Alice creates a stake with a principal of 600 HEX, ending on day 3000 as well."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Mint HEX Time Tokens","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Both Alice and Bob immediately mint HEX-3000 in quantities equal to the size of their staked HEX (i.e. principal). Thus, Bob mints 150 HEX-3000 and Alice mints 600 HEX-3000. Resulting in a total of 750 HEX-3000 minted."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Mint HEX Time Tokens against new rewards","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"100 days later, Bob has accrued 25 HEX in rewards and wants to mint more HEX-3000 against this newly rewarded HEX. So Bob mints 25 HEX-3000 bringing his total to 175 HEX-3000."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Sale of HEX Time Tokens","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Bob sells all 175 HEX-3000 to Alice through PulseX. Alice has 775 HEX-3000. Bob has 0 HEX-3000."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["End Stake","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Bob goes to end stake, but only receives the rewards earned on his stake between days 100 and the end because he minted HEX-3000 against all accrued rewards between days 1 and 99. Bob also doesn't receive his principal because he minted HEX-3000 against that as well."}),"\n",(0,a.jsx)(t.li,{children:"Alice goes to end stake and receives her accrued rewards over the course of the entire stake because Alice didn't mint any HEX-3000 against her rewards. But she doesn't receive her principal since she minted HEX-3000 against her principal. However, Alice still has 775 HEX-3000 which she can exchange 1 for 1 for HEX since the corresponding amount of HEX was withheld from Bob and Alice at end stake."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"market-dynamics",children:"Market Dynamics"}),"\n",(0,a.jsx)(t.p,{children:"Given 1 HEX Time token (HTT) is redeemable for 1 HEX in the future, we would expect a tight correlation in price between the 2 assets. However, the longer the time to redemption, the greater the discount a time token would have relative to HEX due to the time value of the asset (i.e. 1 HEX today is more than 1 HEX a year from now). Upon purchasing a HTT with a discount to HEX, the buyer effectively locks in a fixed rate of return in HEX terms given that 1 HTT is redeemable for exactly 1 HEX at the redemption day."}),"\n",(0,a.jsx)(t.p,{children:"The size of the discount would likely be driven by the expected return on an equivalent HEX stake. For example, if 1 HEX staked today for 5 years is projected to return 100%, we might expect a HTT redeemable in 5 years to trade at a 50% discount resulting in an equivalent ROI of 100%. However, the HTT has the added benefit of being liquid and offers a fixed rate of return compared to HEX stakes thus putting upward pressure on the price of HTT and thus lowering implied HTT ROI. We would expect many other factors driving HTT discounts relative to HEX."}),"\n",(0,a.jsx)(t.p,{children:"If the HTT becomes too expensive, users can create new stakes and mint HTTs (with the same redemption day) and sell them to drive the price back down and then take the proceeds and create a new stake to achieve amplified stake returns. This cycle can be repeated until the price is restored."}),"\n",(0,a.jsx)(t.p,{children:"If the price of a HTT becomes excessively cheap and results in an implied return higher than an equivalent stake, market participants can buy the HTT to lock in their return and thus putting upward pressure on price until price is restored."}),"\n",(0,a.jsx)(t.p,{children:"As HTTs achieve price discovery, a yield curve will emerge showing the various rates of return across various redemption days based on the discount of HTTs relative to HEX. The curve can then be used to make more informed decisions for market participants."}),"\n",(0,a.jsx)(t.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Actuator Wrapped Stake","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Gain instant liquidity on existing HSI by delegating to Actuator and then minting HTTs"}),"\n",(0,a.jsx)(t.li,{children:"Create a new stake and get instant liquidity back on the staked HEX"}),"\n",(0,a.jsx)(t.li,{children:"Progressively liquidate earned stake rewards thus providing regular income stream"}),"\n",(0,a.jsx)(t.li,{children:"Preserve optionality in the event stake needs to be liquidated at a future date"}),"\n",(0,a.jsxs)(t.li,{children:["Achieve leveraged HEX Stake returns through ",(0,a.jsx)(t.strong,{children:"Amplified Stakes"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["HEX Time Tokens","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Lock in a fixed rate of return on HEX through purchase of HTTs"}),"\n",(0,a.jsx)(t.li,{children:"Leveraged play on HEX through purchase of HTTs"}),"\n",(0,a.jsx)(t.li,{children:"Indirectly participate in the upside of HEX stake rewards while retaining liquidity"}),"\n",(0,a.jsx)(t.li,{children:"Hedge undesirable changes in the HEX yield curve (e.g. hedge duration risk)"}),"\n",(0,a.jsx)(t.li,{children:"Arbitrage temporary misprice"}),"\n",(0,a.jsx)(t.li,{children:"Speculate on changing yield curve shape"}),"\n",(0,a.jsx)(t.li,{children:"Utilize yield curve to identify optimal HEX staking strategy"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);