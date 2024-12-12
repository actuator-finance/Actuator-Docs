---
sidebar_position: 4
---

# Choosing the Redemption Day

### Introduction
There are several implications to consider when choosing the redemption day for extracting 'HEX Time Tokens' (HTT) from your stake. At a high level, there are 3 approaches: 
- Redemption Day = End Stake Day
- Redemption Day > End Stake Day
- Redemption Day < End Stake Day

### Redemption Day = End Stake Day
The simplest and recommended approach in most cases is for users to set the redemption day of the extracted HTTs to the same day as the end stake day of their stake. Under this approach, the extractable amount of HTTs for a given stake will always equal the staked HEX + HEX payouts to date. As each day progresses, the HEX payouts increase and thus the extractable amount of HTTs increase. Once end stake day arrives, the original staker can end stake and collect their HEX proceeds minus any outstanding HTTs, otherwise, the community will be incentivized to end stake and achieve the same effect (in which case, some or all 'Escrowed Rewards' go to the user who ends the stake. See [Redemption Process](/Actuator%20Protocol/redemption) for more info).


<small>In this example, principal is 10,000 HEX, stake end is day 5000 and redemption is day 5000. Current day is set to 2000. <br/>
Note the "Current Extractable Value" equals "Intrinsic Value" due to redemption day falling on end stake day.</small>
![Alt text](/img/RedemptionEqualEndDay.png)

### Redemption Day > End Stake Day
While setting the redemption day to the end stake day is convenient, many times there will not be a liquid trading pool for that particular HEX Time Token. In which case, stakers can choose to set the redemption day beyond end stake day in order to mint a HEX Time Token that is liquid and tradable.
This choice impacts the extractable stake value as the protocol now needs to account for the possibility the original staker fails to end stake by redemption day. Thus, the amount of extractable HTTs is lowered by the theoretical late end stake penalty (see [Extractable Stake Value](/Actuator%20Protocol/extractableStakeValue) for more info). The larger the difference between redemption day and end stake day, the greater the theoretical penalty, and thus the lower the extractable HTT amount. 

Under this approach, the original staker doesn't incur any additional responsibility that isn't already imposed by the HEX protocol. Stakers who choose this strategy, need to simply remember to end stake on time as always and collect the HEX proceeds minus the quantity of outstanding HTTs. In the event the staker fails to end stake, the community will eventually be eligible and incentivized to end stake once redemption day arrives. At which point, the HEX proceeds will be transferred to the original staker minus the outstanding HTTs.  

<small>In this example, principal is 10,000 HEX, stake end is day 5000 and redemption is day 5330. Current day is set to 1725. <br/>
Note the "Current Extractable Value" is roughly half the "Intrinsic Value" due to redemption day falling half way into late penalty (i.e. 1 year after end stake).</small>
![Alt text](/img/RedemptionGreaterThanEnd.png)

### Redemption Day < End Stake Day
Users can also choose an advanced yet powerful strategy where the redemption day is set before the end stake day. Under this approach, the HTTs are no longer backed by the intrinsic value of the stake, but instead are backed by the EES value (see [Extractable Stake Value](/Actuator%20Protocol/extractableStakeValue) for more info). However, given they are backed by the EES value, users are therefore subject to EES by the community in the event they don't return all extracted HTTs by the redemption day. 

Unlike the first 2 approaches, this strategy is effectively a loan subject to liquidation if not repaid on time. In the event the original staker fails to return all outstanding HTTs by redemption day, the community will be eligible to EES the stake on redemption day. At which point, any HEX proceeds will be transferred to the original staker minus the early end stake penalty and outstanding HTTs.  

It is important to note that, under this strategy, the selected redemption day must occur after mid-stake of the underlying stake. The reason being is that (while unlikely) the HEX protocol may potentially penalize 100% of the principal and rewards when end staking before mid-stake.

<small>In this example, principal is 10,000 HEX, stake end is day 5000 and redemption is day 3800. Current day is set to 2500. <br/>
Note the "Current Extractable Value" is the principal (10,000 HEX) due to redemption day falling before end stake.</small>
![Alt text](/img/RedemptionLessThanEnd.png)

### Other Considerations When Choosing Redemption Day
- HTT Discounts
  - Earlier redemption days result in smaller HTT discounts to HEX and thus a higher HTT dollar value.
- HTT pricing anomaly
  - One HTT may be 'overpriced' relative to another, thus impacting the redemption day selection.
- HTT Liquidity
  - Certain HTTs will inevitably be more liquid than others, which impacts the decision depending on the size of your HTT position.
- Extractable Stake Value
  - Different redemption days selections will result in different quantities of extractable HTTs. 
- Investment Time Horizon
  - Short time horizons may justify opting for earlier redemption days. 
