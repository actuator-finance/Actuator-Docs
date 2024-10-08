---
sidebar_position: 4
---

# Market Dynamics

### HEX Time Token (HTT) Correlation to HEX
Given 1 HTT is redeemable for 1 HEX in the future, we would expect a tight correlation in price between the 2 assets. However, the longer the time to redemption, the greater the discount a HTT would have relative to HEX due to the time value of the asset (i.e. 1 HEX today is more than 1 HEX a year from now). Upon purchasing a HTT with a discount to HEX, the buyer effectively locks in a fixed rate of return in HEX terms given that 1 HTT is redeemable for exactly 1 HEX at the designated redemption day. 

### HTT Discount to HEX
The size of the discount would likely be driven by the expected return on an equivalent HEX stake. For example, if 1 HEX staked today for 5 years is projected to return 100%, we might expect a HEX Time Token that is redeemable in 5 years to trade at a 50% discount resulting in an equivalent ROI of 100% (Note these discounts/returns are purely hypothetical for the sake of the explanation). However, the HTT has the added benefit of being liquid and offers a fixed rate of return compared to HEX stakes thus putting upward pressure on the price of HTTs and thus lowering implied ROI. Additionally, we would expect many other factors driving the HEX discount, but this would likely be the primary driver. 

### Price Restoration
#### Overpriced HEX Time Token (HTT)
If the HTT becomes too expensive, users can create new stakes and mint HTTs with a matching redemption day and sell which drives the price back down and then they take the proceeds and create a new stake to achieve higher returns. This cycle can be repeated until the price is restored. We're calling this strategy "Amplified Stakes" as users can achieve far greater T-Share exposure and potentially achieve higher returns on the HEX stakes.

#### Underpriced HEX Time Token (HTT)
If the price of a HTT becomes excessively cheap and results in an implied return higher than an equivalent stake, market participants can buy the HTT to lock in outsized returns and thus putting upward pressure on price until price is restored.

### Yield Curve
As HTTs achieve price discovery, a HEX yield curve will emerge showing the various rates of return across different redemption days based on the discount of HTTs relative to HEX. The curve can then be used to make more informed decisions for market participants.

![Alt text](/img/Discounts.png)
<small>Chart discounts are hypothetical</small>

### Risk-Free Rate
While every token includes platform and smart contract risk, HTTs are unique in that they are free of counterparty and credit risks. 1 HTT is guaranteed to return 1 HEX. Therefore, the current discount of a given HTT to HEX is effectively the native Risk-Free Rate in HEX for that time-horizon. Upon purchasing the HTT, the buyer locks in a guaranteed rate of return in HEX driven by the discount. 

### Implied Future Payout Per T-Share
Assuming HTT discounts approximate the expected total return on equivalent HEX stakes, we can easily derive an implied future path of the daily payout per T-Share. Suppose there exists a 50% discount on HTT-5000 relative to HEX (Note these discounts are purely hypothetical for the sake the explanation). In which case the market is signaling new HEX stakes ending on day 5000 are expected to yield 100%. From there we can derive a projected daily payout per T-Share based on those stake parameters. We can then apply this across the various HTT redemption days and visualize the projected evolution of the daily payout per T-Share. 

<video width="650" controls>
  <source src="/img/ImpliedPayoutsVideo.mp4" type="video/mp4" />
</video>

The above video demonstrates how we can "back into" the future path of payout per t-share by adjusting the payouts until the various HEX staking yields equal the existing HEX Time Token yields. Note the payout per t-share corresponds to the right axis and the HEX staking yields and the HEX Time Token yields correspond to the left axis. The values in the video are hypothetical and for demonstration purposes only. 

### Relevant HEX Time Token (HTT) Redemption Days
While anyone can create an HTT for any redemption day, it's likely only a handful of HTTs will have liquid pools. As the protocol matures, we expect liquidity to increase across more and more pools. We make some assumptions about the most relevant redemption days to bootstrap project liquidity (see [Liquidity Mining](actuatorToken/liquidityMining) page for more info). With that being said, the market will ultimately decide which HTTs are most attractive and liquid based and where users choose prefer to stake (HTT sellers) and as well as the maturity preference of HTT buyers. Here's just a few possible scenarios: 
- Only 3 HTTs attract liquidity at any point in time: 1 short, 1 medium and 1 long term. 
- HTTs whose redemption day is divisible by 1000 attract the most liquidity. 
- HTTs whose redemption day is divisible by 500 attract the most liquidity
- HTTs whose redemption day falls near existing HSI supply attract the most liquidity.
- HTTs whose redemption day ends on January 1st each year attract the most liquidity
