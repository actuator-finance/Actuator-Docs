---
sidebar_position: 0
---

# Overview

Actuator is a decentralized protocol that wraps existing or new HEX stakes with additional functionality. Stake owners can mint fungible ERC20 tokens called 'HEX Time Tokens' (HTTs) backed 1:1 by their stake's underlying HEX. For every HEX Time Token minted, 1 HEX token is designated as collateral. The quantity of collateralized HEX is capped by the intrinsic HEX value of the underlying stake (i.e. staked HEX + accrued HEX rewards to date). Stakers can choose to forgo their collateralized HEX by selling their HTTs into the market or they can regain control of their collateral by retiring (i.e. returning) their HTTs any time before the designated redemption day. All outstanding HTTs are redeemable 1:1 for HEX on or after the designated redemption day. The redemption day is chosen by the staker when the HTTs are created. When creating HTTs, users can choose any redemption day where the 'Extractable Stake HEX' value is greater than zero (see [Extractable Stake Value](/Actuator%20Protocol/extractableStakeValue) for more info), however, users typically choose a redemption day that falls on or after end stake day. Only one HTT can be minted for every one HEX staked or rewarded for a given HSI. Within a stake, any HEX that does not back HTTs (i.e. non-collateralized HEX) is simply collected by the original staker at end stake. No coordination, special timing, capacity limits or centralized intervention is required at any time. Prior to redemption day, the HTTs could be bought or sold through trading pools, allowing stakers to easily liquidate the intrinsic value of their stake at an efficient price. Additionally, users can purchase HTTs (at the desired redemption day) and lock in a fixed rate of return (assuming the HTT trades at a discount to HEX) in HEX since they will be able to redeem their HTTs for the underlying HEX. Subsequently, this would result in a market-driven emergent yield curve for HEX across various redemption days thus creating new information for the HEX ecosystem to benchmark investments and drive new tools/opportunities.
