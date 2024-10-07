---
sidebar_position: 3
---

# Extractable Stake Value

## Introduction
Understanding the concept of 'Extractable Stake Value' is key to understanding Actuator. The amount of HTTs that can be extracted from a given stake can never exceed the Extractable Stake Value. 
The Extractable Stake Value is not a novel concept created by Actuator but instead, simply a formalized description of the underlying mechanics of the HEX protocol. 

### Definition
The Extractable Stake Value can be defined as the minimal amount of HEX end stake proceeds on a given future day. 

### Explanation
The Extractable Stake Value at end stake is always the originally staked HEX + accrued HEX rewards to date. In other words, assuming a timely end stake, we are guaranteed to eventually receive our staked HEX + HEX interest to date. However, the Extractable Stake Value varies as we adjust the target day. For example, the Extractable Stake Value 1 year after the scheduled end stake day is staked HEX + HEX interest to date - the Late End Stake Penalty. And 2 years after the scheduled end stake, the Extractable Stake Value is 0 HEX, as the HEX protocol wipes away 100% of the stake value 104 weeks after end stake. 

When calculating the Extractable Stake Value where the target day is before end stake but after mid-stake, we need to apply the EES formula from the HEX protocol. In which case, the Extractable Stake Value is staked HEX + HEX payouts post mid-stake. Only payouts after mid-stake are included and all payouts earned in the first half are assumed to be wiped away by the Early End Stake penalty.

Furthermore, If the target day is before mid-stake, we are forced to assume the Extractable Stake Value is zero. The reason being is that (while unlikely) the HEX protocol may potentially penalize 100% of the principal and rewards when end staking before mid-stake. 

**TLDR**: There are 3 possible calculations for Extractable Stake Value depending on the target day: 
1. Target Day is on End Stake
    - Extractable Stake Value = Intrinsic Value of the Stake
2. Target Day is After End Stake
    - Extractable Stake Value = Intrinsic Value - Late End Stake penalty as of Target Day
3. Target Day is Before End Stake
    - Extractable Stake Value = Minimal EES Value of the Stake as of Target Day

### Actuator and Extractable Stake Value
The above explanation simply describes what's always been true about the HEX protocol. Actuator leverages these properties of HEX to determine how many HTTs can be minted for a given redemption day. 

When extracting HTTs from a stake, it should be noted that assigning the redemption day before end stake day imposes extra responsibility on the staker. Stakers who choose this strategy subject themselves to EES by any user in the event they fail to return their minted HTTs by redemption day. This is because HTTs that have reached redemption day need to access the underlying HEX that backs them and thus the collateralized stakes need to be ended. However, stakers in this position can simply buy back and return their borrowed HTTs before redemption to regain full control of their stake and avoid EES by the community. 

While this can be a very powerful strategy in leveraging the full value of your stake, it should only be done by advanced users who fully understand its implications. We therefore recommend users set their redemption day on or after end stake to eliminate the risk of EES entirely. 

### Formula
The above explanation leaves out a small component of the formula which is the 'Escrowed Rewards' (See [Redemption Process](/Actuator%20Protocol/redemption) for more info). We incorporate this component below to arrive at the rigorous and final formula: 

**Extractable Stake Value** = Staked HEX + HEX Payouts to Date - [Late End Stake Penalty (if any) OR Early End Stake Penalty (if any)] - End Stake Subsidy (if any)
