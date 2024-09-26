<!-- ---
sidebar_position: 6
---

# Whitepaper -->

### Introduction
Any given HEX stake has an 'intrinsic value' defined as the initial HEX staked plus accrued HEX rewards to date. This intrinsic amount of HEX is always growing, knowable at any given time, and unlockable at end stake. Actuator leverages these properties by allowing HEX stakers to mint a new type of token backed by the intrinsic HEX value of their stake. We're calling these tokens 'HEX Time Tokens' (HTTs). HTTs are fungible ERC20 tokens backed 1:1 by HEX at all times and redeemable 1:1 for HEX after end stake when the underlying HEX becomes unlocked. Notably, this approach enables distinct stakes to utilize their common collateral (intrinsic HEX value), and gain shared liquidity through a single, fungible token (assuming a common HTT redemption day). 

### Actuator Protocol Overview
Actuator is a decentralized protocol that wraps existing or new HEX stakes with additional functionality. Stake owners can mint fungible ERC20 tokens called 'HEX Time Tokens' (HTTs) backed 1:1 by their stake's underlying HEX. For every HEX Time Token minted, 1 HEX token is designated as collateral. The quantity of collateralized HEX is capped by the intrinsic HEX value of the underlying stake (i.e. staked HEX + accrued HEX rewards to date). Stakers can choose to forgo their collateralized HEX by selling their HTTs into the market or they can regain control of their collateral by retiring (i.e. returning) their HTTs any time before the designated redemption day. All outstanding HTTs are redeemable 1:1 for HEX on or after the designated redemption day. The redemption day is chosen by the staker when the HTTs are created and must fall on or after the end day of the underlying stake. Only one HTT can be minted for every one HEX staked or rewarded for a given HSI. Within a stake, any HEX that does not back HTTs (i.e. non-collateralized HEX) is simply collected by the original staker at end stake. No coordination, special timing, capacity limits or centralized intervention is required at any time. Prior to redemption day, the HTTs could be bought or sold through trading pools, allowing stakers to easily liquidate the intrinsic value of their stake at a fair price. Additionally, users can purchase HTTs (at the desired redemption day) and lock in a fixed rate of return (assuming the HTT trades at a discount to HEX) since they will be able to redeem their HTTs for the underlying HEX. Subsequently, this would result in a market-driven emergent yield curve for HEX across various redemption days thus creating new information for the HEX ecosystem to benchmark investments and drive new tools/opportunities.

### Actuator Wrapped Stakes
Every Actuator wrapped stake is a HEX Stake Instance (HSI) and thus Actuator rides on top of the Hedron protocol. Actuator wrapped stakes can be created through the Actuator contract (which then invokes the Hedron contract and creates the HSI) or existing HSIs can be delegated to the Actuator contract. Actuator wrapped stakes retain the ability to mint Hedron at any time and can always be unwrapped back into a standard tokenized HSI. Once created/delegated, stakers can mint 'HEX Time Tokens' (HTTs) against the stake's underlying HEX value. Stakers can mint any amount of HTTs whenever they choose as many times as they want, as long as the total quantity minted doesn't exceed the intrinsic HEX value of the stake. Additionally, users can retire any or all tokens they've minted at any time. If HTTs have been minted, stakers are not able to early end stake, nor are they able to tokenize their HSI (i.e. revoke delegation) until they've retired all HTTs. This ensures the system accounting is always balanced and guarantees 1 HTT will always be redeemable for 1 HEX at the designated redemption day. Once end stake day arrives, stakers can collect any HEX rewards/principal that hasn't been minted against (i.e. collateralized) and the remaining HEX is reserved for redemption by HTT holders.

### HEX Time Token (HTT)
A 'HEX Time Token' (HTT) is an ERC20 token that can be redeemed 1:1 for HEX at the designated redemption day. The redemption day is visible in the token symbol. For example, 1 HEX time token with symbol HTT-3000 is redeemable for 1 HEX on HEX day 3000. HTT holders have 2 weeks to redeem their tokens for HEX without penalty. However, after 2 weeks, HTT holders cannot be guaranteed a 1:1 redemption for HEX. This is due to the behavior of the HEX protocol. Since HTTs are backed by stakes, and stakes that end after 14 days begin to incur late penalties, these penalties will impact HTT redemption. After 2 weeks, redemption is on a first come first serve basis. With that being said, it may be the case that all redemptions after 14 weeks can still exchange 1:1 for HEX if all underlying stakes are unlocked on time. This is due to the strong community end stake incentive built into the protocol (see [Redemption Process](docs/Actuator Protocol/redemption) for more info).


### Redemption Process
The redemption process introduces challenges given that HTTs can be backed by many stakes. Users who attempt to redeem their HTTs may end up paying large sums of gas fees to initiate multiple end stakes. However, the system mostly eliminates these concerns by penalizing original stakers who fail to end their stake and incentivizing community end staking. All rewards accrued in the last 10% of a stake's life are held in 'escrow' (i.e. in the contract) and are not eligible as collateral for HTTs. Stakers who fail to end stake in a timely manner forgo up to all escrowed rewards. These rewards are instead credited to any user who initiates the end stake. Stakers have 3 grace days before escrowed rewards begin flowing to the end staker. Each day after the grace period (3 days), an additional 1/10th of the escrowed rewards are credited to the end staker up to the 10th day where 100% of escrowed rewards go the end staker. This gradual, linear increase ensures there's a 'break even' day where the end stake rewards equal or exceed the cost of gas when end staking. This allows for an elegant market-based solution to the gas cost problem associated with end stake.

### Example 1
- Create Stakes
  - Bob creates a HEX stake instance through Actuator with a principal of 150 HEX, ending on HEX day 3000. Alice creates a stake with a principal of 600 HEX, ending on day 3000 as well.
- Mint HEX Time Tokens
  - Both Alice and Bob immediately mint HEX-3000 in quantities equal to the size of their staked HEX (i.e. principal). Thus, Bob mints 150 HEX-3000 and Alice mints 600 HEX-3000. Resulting in a total of 750 HEX-3000 minted.
- Mint HEX Time Tokens against new rewards
  - 100 days later, Bob has accrued 25 HEX in rewards and wants to mint more HEX-3000 against this newly rewarded HEX. So Bob mints 25 HEX-3000 bringing his total to 175 HEX-3000.
- Sale of HEX Time Tokens
  - Bob sells all 175 HEX-3000 to Alice through PulseX. Alice has 775 HEX-3000. Bob has 0 HEX-3000. 
- End Stake
  - Bob goes to end stake, but only receives the rewards earned on his stake between days 100 and the end because he minted HEX-3000 against all accrued rewards between days 1 and 99. Bob also doesn't receive his principal because he minted HEX-3000 against that as well.
  - Alice goes to end stake and receives her accrued rewards over the course of the entire stake because Alice didn't mint any HEX-3000 against her rewards. But she doesn't receive her principal since she minted HEX-3000 against her principal. However, Alice still has 775 HEX-3000 which she can exchange 1 for 1 for HEX since the corresponding amount of HEX was withheld from Bob and Alice at end stake.

### Market Dynamics
Given 1 HEX Time token (HTT) is redeemable for 1 HEX in the future, we would expect a tight correlation in price between the 2 assets. However, the longer the time to redemption, the greater the discount a time token would have relative to HEX due to the time value of the asset (i.e. 1 HEX today is more than 1 HEX a year from now). Upon purchasing a HTT with a discount to HEX, the buyer effectively locks in a fixed rate of return in HEX terms given that 1 HTT is redeemable for exactly 1 HEX at the redemption day. 

The size of the discount would likely be driven by the expected return on an equivalent HEX stake. For example, if 1 HEX staked today for 5 years is projected to return 100%, we might expect a HTT redeemable in 5 years to trade at a 50% discount resulting in an equivalent ROI of 100% (Note these returns are purely hypothetical). However, the HTT has the added benefit of being liquid and offers a fixed rate of return compared to HEX stakes thus putting upward pressure on the price of HTT and thus lowering implied HTT ROI. We would expect many other factors driving HTT discounts relative to HEX. 

If the HTT becomes too expensive, users can create new stakes and mint HTTs (with the same redemption day) and sell them to drive the price back down and then take the proceeds and create a new stake to achieve amplified stake returns. This cycle can be repeated until the price is restored. 

If the price of a HTT becomes excessively cheap and results in an implied return higher than an equivalent stake, market participants can buy the HTT to lock in their return and thus putting upward pressure on price until price is restored.

As HTTs achieve price discovery, a yield curve will emerge showing the various rates of return across various redemption days based on the discount of HTTs relative to HEX. The curve can then be used to make more informed decisions for market participants.

### Use Cases
- Actuator Wrapped Stake
  - Gain instant liquidity on existing HSI by delegating to Actuator and then minting HTTs
  - Create a new stake and get instant liquidity back on the staked HEX
  - Progressively liquidate earned stake rewards thus providing regular income stream
  - Preserve optionality in the event stake needs to be liquidated at a future date
  - Achieve leveraged HEX Stake returns through **Amplified Stakes** 
- HEX Time Tokens
  - Lock in a fixed rate of return on HEX through purchase of HTTs
  - Leveraged play on HEX through purchase of HTTs
  - Indirectly participate in the upside of HEX stake rewards while retaining liquidity
  - Hedge undesirable changes in the HEX yield curve (e.g. hedge duration risk)
  - Arbitrage temporary misprice
  - Speculate on changing yield curve shape
  - Utilize yield curve to identify optimal HEX staking strategy



