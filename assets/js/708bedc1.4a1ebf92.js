"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[843],{4310:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=i(4848),n=i(8453);const a={sidebar_position:4},s="Market Dynamics",o={id:"marketDynamics",title:"Market Dynamics",description:"HEX Time Token (HTT) Correlation to HEX",source:"@site/docs/marketDynamics.md",sourceDirName:".",slug:"/marketDynamics",permalink:"/marketDynamics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq"},next:{title:"Use Cases",permalink:"/useCases"}},d={},l=[{value:"HEX Time Token (HTT) Correlation to HEX",id:"hex-time-token-htt-correlation-to-hex",level:3},{value:"HTT Discount to HEX",id:"htt-discount-to-hex",level:3},{value:"Price Restoration",id:"price-restoration",level:3},{value:"Overpriced HEX Time Token (HTT)",id:"overpriced-hex-time-token-htt",level:4},{value:"Underpriced HEX Time Token (HTT)",id:"underpriced-hex-time-token-htt",level:4},{value:"Yield Curve",id:"yield-curve",level:3},{value:"Risk-Free Rate",id:"risk-free-rate",level:3},{value:"Implied Future Payout Per T-Share",id:"implied-future-payout-per-t-share",level:3},{value:"Relevant HEX Time Token (HTT) Redemption Days",id:"relevant-hex-time-token-htt-redemption-days",level:3}];function h(e){const t={h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"market-dynamics",children:"Market Dynamics"}),"\n",(0,r.jsx)(t.h3,{id:"hex-time-token-htt-correlation-to-hex",children:"HEX Time Token (HTT) Correlation to HEX"}),"\n",(0,r.jsx)(t.p,{children:"Given 1 HTT is redeemable for 1 HEX in the future, we would expect a tight correlation in price between the 2 assets. However, the longer the time to redemption, the greater the discount a HTT would have relative to HEX due to the time value of the asset (i.e. 1 HEX today is more than 1 HEX a year from now). Upon purchasing a HTT with a discount to HEX, the buyer effectively locks in a fixed rate of return in HEX terms given that 1 HTT is redeemable for exactly 1 HEX at the designated redemption day."}),"\n",(0,r.jsx)(t.h3,{id:"htt-discount-to-hex",children:"HTT Discount to HEX"}),"\n",(0,r.jsx)(t.p,{children:"The size of the discount would likely be driven by the expected return on an equivalent HEX stake. For example, if 1 HEX staked today for 5 years is projected to return 100%, we might expect a HEX Time Token that is redeemable in 5 years to trade at a 50% discount resulting in an equivalent ROI of 100%. However, the HTT has the added benefit of being liquid and offers a fixed rate of return compared to HEX stakes thus putting upward pressure on the price of HTTs and thus lowering implied ROI. Additionally, we would expect many other factors driving the HEX discount, but this would likely be the primary driver."}),"\n",(0,r.jsx)(t.h3,{id:"price-restoration",children:"Price Restoration"}),"\n",(0,r.jsx)(t.h4,{id:"overpriced-hex-time-token-htt",children:"Overpriced HEX Time Token (HTT)"}),"\n",(0,r.jsx)(t.p,{children:'If the HTT becomes too expensive, users can create new stakes and mint HTTs with a matching redemption day and sell which drives the price back down and then they take the proceeds and create a new stake to achieve higher returns. This cycle can be repeated until the price is restored. We\'re calling this strategy "Amplified Stakes" as users can achieve far greater T-Share exposure and potentially achieve higher returns on the HEX stakes.'}),"\n",(0,r.jsx)(t.h4,{id:"underpriced-hex-time-token-htt",children:"Underpriced HEX Time Token (HTT)"}),"\n",(0,r.jsx)(t.p,{children:"If the price of a HTT becomes excessively cheap and results in an implied return higher than an equivalent stake, market participants can buy the HTT to lock in outsized returns and thus putting upward pressure on price until price is restored."}),"\n",(0,r.jsx)(t.h3,{id:"yield-curve",children:"Yield Curve"}),"\n",(0,r.jsx)(t.p,{children:"As HTTs achieve price discovery, a HEX yield curve will emerge showing the various rates of return across different redemption days based on the discount of HTTs relative to HEX. The curve can then be used to make more informed decisions for market participants."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Alt text",src:i(3972).A+"",width:"1721",height:"798"}),"\r\n",(0,r.jsx)("small",{children:"Chart discounts are hypothetical"})]}),"\n",(0,r.jsx)(t.h3,{id:"risk-free-rate",children:"Risk-Free Rate"}),"\n",(0,r.jsx)(t.p,{children:"While every token includes platform and smart contract risk, HTTs are unique in that they are free of market, price, and liquidation risks. 1 HTT is guaranteed to return 1 HEX. Therefore, the current discount of a given HTT to HEX is effectively the native Risk-Free Rate in HEX for that time-horizon. Upon purchasing the HTT, the buyer locks in a guaranteed rate of return in HEX driven by the discount."}),"\n",(0,r.jsx)(t.h3,{id:"implied-future-payout-per-t-share",children:"Implied Future Payout Per T-Share"}),"\n",(0,r.jsx)(t.p,{children:"Assuming HTT discounts approximate the expected total return on equivalent HEX stakes, we can easily derive an implied future path of the daily payout per T-Share. Suppose there exists a 90% discount on HTT-5000 relative to HEX. In which case the market is signaling new HEX stakes ending on day 5000 are expected to yield 1000%. From there we can derive a projected daily payout per T-Share based on those stake parameters. We can then apply this across the various HTT redemption days and visualize the projected evolution of the daily payout per T-Share."}),"\n",(0,r.jsx)("video",{width:"650",controls:!0,children:(0,r.jsx)("source",{src:"/img/ImpliedPayoutsVideo.mp4",type:"video/mp4"})}),"\n",(0,r.jsx)(t.p,{children:'The above video demonstrates how we can "back into" the future path of payout per t-share by adjusting the payouts until the various HEX staking yields equal the existing HEX Time Token yields. Note the payout per t-share corresponds to the right axis and the HEX staking yields and the HEX Time Token yields correspond to the left axis. The values in the video are hypothetical and for demonstration purposes only.'}),"\n",(0,r.jsx)(t.h3,{id:"relevant-hex-time-token-htt-redemption-days",children:"Relevant HEX Time Token (HTT) Redemption Days"}),"\n",(0,r.jsx)(t.p,{children:"While anyone can create an HTT for any redemption day, it's likely only a handful of HTTs will have liquid pools. As the protocol matures, we expect liquidity to increase across more and more pools. we make some assumptions about the most relevant redemption days to bootstrap project liquidity (see 'Liquidity Mining' page for more info). With that being said, the market will ultimately decide which HTTs are most attractive and liquid based and where users choose prefer to stake (HTT sellers) and as well as the maturity preference of HTT buyers. Here's just a few possible scenarios:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Only 3 HTTs attract liquidity at any point in time: 1 short, 1 medium and 1 long term."}),"\n",(0,r.jsx)(t.li,{children:"HTTs whose redemption day is divisible by 1000 attract the most liquidity."}),"\n",(0,r.jsx)(t.li,{children:"HTTs whose redemption day is divisible by 500 attract the most liquidity"}),"\n",(0,r.jsx)(t.li,{children:"HTTs whose redemption day falls near existing HSI supply attract the most liquidity."}),"\n",(0,r.jsx)(t.li,{children:"HTTs whose redemption day ends on January 1st each year attract the most liquidity"}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3972:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/Discounts-e387a1f7ef20d5fe64c63246b14b1ab5.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var r=i(6540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);