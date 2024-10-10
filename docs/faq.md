---
sidebar_position: 3
---

# FAQ

### What is a HEX Time token (HTT)?
An ERC20 token that can be redeemed 1:1 for HEX at the designated HEX day (i.e. redemption day). The redemption day is visible in the token symbol. For example, a HTT with  symbol HTT-3000 is redeemable 1:1 for HEX on day 3000.
### How are HEX Time Tokens (HTT) minted?
Anyone can mint HEX Time Tokens if they have created/delegated a HEX Stake Instance (HSI) through Actuator. Users can mint HTTs against their principal and any accrued rewards of the stake.
### How is the redemption day for a HEX Time Token (HTT) determined?
The redemption day is set by the minter and can be set to any day where the 'Extractable Stake HEX' value is greater than zero (see [Extractable Stake Value](Actuator%20Protocol/extractableStakeValue) for more info). However, setting the redemption day prior to end stake day should only be done by advanced users who fully understand it's implications (see [Choosing a Redemption Day](Actuator%20Protocol/choosingTheRedemptionDay) for more info). Typically, users choose a redemption day that falls on or after end stake day on the underlying stake.
### Are HEX Time Tokens fungible (HTT)?
HEX Time Tokens that have a common redemption day are fungible, even if they are backed by distinct stakes. This is a key innovation of the protocol that enables broader liquidity and market efficiency of stakes as collateral.
### Can I still early end stake?
Yes, Actuator wrapped HSI supports all the same operations as an HSI assuming there are no HTTs minted against the stake. If users have outstanding HTTs minted against their stake, the system prohibits early end stake to ensure 1:1 backing of HTTs.
### Why would I want to sell my minted HEX Time Tokens (HTT)?
To unlock the stake value and monetize your stake at a fair price while retaining control of the stake. Additionally, you can always buy back the HEX time tokens and retire them and regain full control over your stake.
### Why would I want to buy HEX Time Tokens (HTT)?
1. Achieve similar investment growth to HEX stakes while remaining in liquid tokens
2. Take advantage of mispricing. For example, a discounted HTT may result in a greater expected return than an equivalent HEX stake.
3. Lock in a fixed rate of return in HEX terms because 1 HTT is redeemable for 1 HEX token at redemption day. This is distinct from typical HEX staking where future end stake payout is indeterminate and is dependent upon the actions of other stakers.
### Why am I not allowed to mint tokens against rewards earned in the final 10% of the stake's life?
Up to 10% of the rewards for a given stake are reserved in the event the staker fails to end stake on time. In which case, the rewards instead go to the user who chooses to end the stake. Since HTT holders depend on 'stakeEnd' being invoked in a timely fashion, it's important there is minimal friction to ending a stake in the event the original staker fails to do so. 10% is chosen as it will very likely offset any gas costs associated with end staking and provides a strong incentive for the community or any HTT holder to endstake if the stake owner does not.
### Is there a late redemption penalty?
Similar to HEX stakes, there is a 14-day period where there is no penalty and tokens can be redeemed 1:1 for HEX. However, after 14 days you may be subject to penalties. Given HEX Time Tokens (HTT) are backed by HEX stakes, any stakes that are not unlocked after 14 days begin incurring penalties (enforced by the HEX protocol) and thus the HTTs may experience depreciation as well. The exact amount of penalties will depend on how many underlying stakes are in penalty. 
### If I only mint and sell a portion of my stake, can I still collect any remaining principal/rewards at end stake?
Yes, you retain full ownership to any remaining HEX proceeds from your stake assuming you end stake on time. 
<!-- however each day you fail to end stake after maturity, and additional 1% of the stake rewards (up to 10%) goes to the end staker instead of the stake owner. This ensure stake owners can still collect their full rewards, while also protecting HTT holders who have claims on the stake's underlying HEX and may need to end stake themselves. -->
### What gives HEX Time Tokens (HTT) value?
Since 1 HTT is redeemable for 1 HEX token at the designated redemption day, we can expect a close correlation to the HEX price with a discount due to the time value of money. The longer the time the redemption, the greater the discount in price since 1 HEX today is worth more than 1 HEX locked for a year. Once a HTT is redeemable, we would expect 1 HTT to equal 1 HEX. Otherwise, an arbitrage opportunity exists.
### Why would one set the redemption day of minted HEX Time Tokens to a day greater than the underlying stake's end day?
If there is no liquid trading pool for that given token's redemption day, users can choose a later day that matches a redemption day with a more liquid pool. See 'Choosing a Redemption Day' to learn more.  
### When minting tokens whose redemption day is after the underlying stake's end day, why is the extractable HTT amount less than my total principal + accrued rewards?
The further away redemption day is from the stake end day, the extractable amount decreases to account for the potential late end stake penalty enforced by the HEX protocol. The reason is because the HEX protocol begins penalizing stakes that fail to end stake starting 2 weeks after end day. While Actuator stakers can easily avoid this by timely ending their stake (like any other HEX stake or HSI), the Actuator system must assume worst case scenario that the original stake creator will fail to end stake and thus result in maximum penalties leading up to the redemption day of the minted tokens. This ensures all minted HTTs will be redeemable 1:1 for HEX on their designated redemption day.  
### How is Actuator different than Hedron?
Actuator enables stakers to mint HEX Time Tokens (HTT) based on their stake size and progress—similar to Hedron, but with key differences. HTTs are fully collateralized by HEX and redeemable 1:1 for the underlying HEX at end stake. In contrast, owning HDRN does not represent direct claim/ownership on $HEX or HEX stakes.
### How is Actuator related to Hedron?
In the same way a HSI is a wrapper around a HEX stake with added functionality, a Actuator stake is a wrapper around a HSI with added functionality.
### If I extract HEX Time Tokens (HTT) from my stake and sell them, do I still own my stake? 
You are now a partial owner of the stake and whoever holds the minted tokens effectively owns the rest of the stake. The HEX that you the staker can collect at end stake is lowered by the amount of HTTs minted.
### How many HEX Time Tokens (HTTs) can I extract from my stake?
You can extract your initially staked HEX + accrued HEX rewards (assuming redemption day equals end stake day). This ensures the quantity minted is never greater than the amount of HEX guaranteed to be available at end stake. As the stake progresses, users can perform multiple extractions on the newly accrued HEX rewards.
### What additional features do Actuator stakes provide over HSIs
Every HEX stake can be thought of as a claim on HEX tokens (stake principal + accrued rewards) that is unlockable at a particular date (end stake) in the future. Actuator allows a staker to mint 1 token for every claimable HEX at end stake. 
### Can I extract claims from my stake whenever I want?
Yes, as long as you have accrued rewards on the stake that haven't already been extracted against.
### Can I return/retire HEX Time Tokens minted against my stake whenever I want?
Yes, and this allows you to regain full control and ownership of the stake.
### If I already have an existing HSI can I still wrap it through Actuator to mint HEX Time Tokens.
Yes, since Actuator is a wrapper around Hedron, you can wrap your existing HSI through Actuator and utilize all Actuator functionality. Additionally, you can unwrap a Actuator stake back to an HSI.
### Who pays for the gas to end stakes that are backing HEX Time Tokens?
Once end day arrives, anyone can end a stake including the staker. However, after 3 days without stakeEnd being called, each additional day that passes results in an additional 1% of the stake rewards (up to 10%) going towards the user who calls stakeEnd (instead of the original staker). This ensures that even if gas is high, any user will have sufficient incentive to end a given stake as the rewards increase each day.
### How is this different than pooled HEX staking protocols?
- Pooled protocols are socialized staking whereas Actuator enables personal control over your own stakes. 
- Pooled protocol tokens represent ownership over an indeterminate amount of HEX at a future date. HEX Time Tokens represent ownership over a determinate amount of HEX at a future date. i.e. 100 HTT-2500 is backed by exactly 100 HEX unlockable on day 2500. 
- Pooled staking protocols are not compatible with existing HSIs. 
- Pooled protocol are analogous to 'Closed-End Funds' due to the limited minting window. Actuator is more analogous to 'Open-End Funds' given HTTs can be freely minted. 

### what are Amplified Stakes?
Amplified stakes are essentially levered HEX stakes which can be created through the Actuator protocol. Once a user creates a stake and extracts the HTTs, the can then go and sell the HTTs for HEX and re-stake the HEX and repeat this cycle. If HTTs are overpriced, then users take advantage of this mispricing and potentially achieve higher returns on the amplified HEX stakes. 
### How does the ACTR token staking work and what are the benefits?
ACTR token staking allows holders to earn rewards from the fees generated by HTT creation. Stakers choose a specific redemption day to stake against, and receive a pro-rata share of the fee imposed on HTT creation (1%) for that redemption day. There's a 90-day lock-up period, with an early unlock penalty starting at 100% and decreasing linearly to 0% over the lock-up period.
### Can I create HTTs with any redemption day, or are there restrictions?
Users can choose any redemption day where the Extractable Stake Value is greater than 0 HEX (see [Extractable Stake Value](Actuator%20Protocol/extractableStakeValue) for more info). If choosing a redemption day on or after end stake day, redemption day must be no greater than 630 days after end stake of the underlying stake. 630 days relates to the maximal late stake period before 100% penalties (700 days). There's an additional 70 days (700 - 70) off limits to escrow value for the community end stake incentive. When choosing a redemption day before end stake day, users can choose any day beginning shortly after mid-stake. This is due to the nature of the HEX protocol where HEX EES proceeds can't be guaranteed in the first half of the life of a stake. 
### How does Actuator ensure that there will always be enough HEX to redeem all HTTs at redemption day?
Actuator ensures this by only allowing users to mint HTTs against the intrinsic value of their stake (principal + accrued rewards). The protocol also accounts for potential penalties by limiting the extractable value when redemption days are set beyond the stake's end date. This ensures that even if the underlying stake is penalized, there will always be enough HEX to redeem all HTTs at the designated redemption day.
### What are the risks associated with buying or holding HTTs?
- Smart Contract Risk:
  - Risk: Vulnerabilities in the smart contract could lead to loss of funds.
  - Mitigation: The protocol will undergo a thorough audit by a reputable firm. Additionally, the contract code will be open source, allowing for community review.
- End stake gas costs:
  - Risk: HTT holders may need to end stake and incur gas costs to free up HEX for redemption.
  - Mitigation: The protocol implements a community end stake incentive. After a 3-day grace period, a portion of stake rewards (up to 10%) is offered to anyone who ends the stake, ensuring timely endings.
- Mispricing Risk:
  - Risk: HTTs trading at a discount that's significantly higher or lower than expected based on the time value of money and prevailing HEX staking returns. This could lead to anomalous advantages or disadvantages for buyers or sellers of HTTs.
  - Mitigation: 'Arbitrage' opportunities exist in both directions:
    - If the discount is too large (HTTs underpriced), users can buy HTTs to lock in higher-than-expected returns.
    - If the discount is too small (HTTs overpriced), users can create new stakes, mint HTTs, and sell them at a premium, a strategy known as "Amplified Stakes".
These arbitrage mechanisms help to maintain appropriate pricing relative to HEX and current staking returns, creating a more efficient market for HTTs.
- Underlying Stake Penalties:
  - Risk: The underlying HEX stake being penalized, affecting redemption after the 14-day grace period post-redemption day.
  - Mitigation: The community end stake incentive increases the likelihood users can fully redeem after the HEX 14-day grace period. Furthermore, HEX stakers are already familiar and aware of this risk when failing to end stake after the grace period.
- Liquidity Risk:
  - Risk: Lack of liquidity in certain HTT markets, making it difficult to buy or sell.
  - Mitigation: The protocol incentivizes liquidity provision through its ACTR token staking mechanism, rewarding liquidity providers with a share of HTT creation fees.
### How does the community end stake incentive work?
If a stake isn't unlocked within 3 days of end stake, a portion of the stake's rewards (rewards earned in the final 10% of a stakes life) is reserved for whoever ends the stake. Each day that passes after the 3-day grace period, an additional 1/10 of the reserved rewards will go to the end staker. This incentivizes timely stake endings, protecting HTT holders.
### What happens to unredeemed HTTs after the redemption?
HTTs can still be redeemed after the redemption day. There's a 14-day grace period where redemption is guaranteed at 1:1. After that, redemption is still possible but may be subject to penalties if the underlying stakes weren't ended on time.
### How does Actuator impact the overall HEX ecosystem and tokenomics?
Actuator enhances the HEX ecosystem by providing more liquidity options for stakers, increasing the overall demand and length for stakes, and creating a yield curve that offers more information for decision-making. It doesn't fundamentally change HEX tokenomics but provides new ways to interact with and derive value from HEX stakes.



<!-- ### What is a HEX maturity token (HTT)?
An ERC20 token that can be redeemed 1:1 for HEX at the specified HEX day (i.e. the maturity day). The maturity day is visible in the token symbol. For example, a maturity token with symbol HTT-1926 is redeemable 1:1 for HEX on HEX day 1926.
### How are HEX maturity tokens (HTT) minted?
Anyone can mint HEX maturity tokens if they have created an HSI through Actuator. Users can mint HEX maturity tokens against their principal and any accrued rewards of the stake.
### How is the maturity day for a HEX maturity token (HTT) determined?
The maturity is set by the minter and must be on or after the end stake day of its underlying stake. 
### Are HEX maturity tokens fungible?
Only HEX maturity tokens that have a common maturity day are fungible.
### Are HEX maturity tokens with the same maturity but different underlying stakes fungible?
Yes, so long at the maturity day of the HTTs are the same, they are the same ERC20 token.
### Can I still early end stake?
Yes, a Actuator wrapped HSI supports all the same operations as an HSI assuming there are no HTTs minted against the stake.
### Why would I want to sell my minted HEX maturity tokens?
In order to unlock the stake value and monetize your stake at a fair price while retaining control of the stake. Additionally, you can always buy back the maturity tokens and retire them and regain full control over your stake.
### Why would I want to buy maturity tokens?
1. Achieve similar investment growth to HEX stakes while remaining in liquid tokens
2. Take advantage of a mis-pricing. For example, a discounted maturity token may result in a greater expected return than an equivalent HEX stake.
3. Lock in a fixed rate of return in HEX terms because 1 maturity token is redeemable for 1 HEX token at maturity. This is distinct from typical HEX staking where future end stake payout is indeterminate.
### Why am I not allowed to mint tokens against rewards earned in the final 10% of the stake's life?
The final 10% of rewards for a given stake are reserved in the event the staker fails to end stake on time. In which case, the rewards instead go to the user who chooses to end the stake. Since holders of maturity tokens depend on 'stakeEnd' being invoked in a timely fashion, it's important there is minimal friction to ending a stake in the event the original staker fails to do so. 10% is chosen as will very likely more than offset any gas costs associated with end staking. 
### if I only mint and sell a portion of my stake, can I still collect any remaining principal/rewards at end stake?
Yes, you retain full rights to any remaining HEX proceeds from your stake, however each day you fail to end stake after maturity, and additional 1% of the stake rewards (up to 10%) goes to the end staker instead of the stake owner. This ensure stake owners can still collect their full rewards, while also protecting HTT holders who have claims on the stake's underlying HEX and may need to end stake themselves.
### Why would one set the maturity day of minted HEX maturity tokens to a date greater than the end stake day of the underlying stake?
if there is no liquid trading pool for that given token's maturity, users can choose a later day that matches a maturity with a more liquid pool.
### When minting tokens whose maturity day is after the underlying stake's end day, why is the mintable HTT amount less than my total principal + accrued rewards?
The further away the maturity day is from the stake end day, The mintable amount decreases to account for the potential late end stake penalty enforced by the HEX protocol. The reason is due to the fact that HEX protocol begin penalizes stakes that fail to end stake starting 2 weeks after end day. While Actuator stakers can easily avoid this by timely ending their stake (like any other HEX stake or HSI), the Actuator system must assume worst case scenario that the original stake creator will fail to end stake and thus result in maximum penalties leading up to the maturity day of the minted tokens. This ensures all minted HEX tokens for a given maturity will be redeemable 1:1 for HEX at maturity.  
### How is Actuator related to Hedron?
In the same way a HSI is a wrapper around a HEX stake with added functionality, a Actuator stake is a wrapper around a HSI with added functionality
### How many HEX maturity tokens (HTTs) can I extract from my stake?
Only your initially staked HEX + accrued HEX rewards. This ensures the quantity minted is never greater than the amount of HEX guaranteed to be available at end stake. 
### What additional features do Actuator stakes provide over HSIs
Every HEX stake can be thought of as a claim on HEX (stake principal + accrued rewards) that is unlockable at a particular date (end stake) in the future. Actuator allows a staker to mint 1 token for every claimable HEX at end stake. 
### Can I extract claims from my stake whenever I want?
yes, as long as you have accrued rewards on the stake that haven't already been minted/extracted against.
### Can I return/retire maturity tokens minted against my stake whenever I want?
yes, and this allows you to regain full control and ownership of the stake.
### How does the redemption process work?
at the time of redemption, 
### If I already have an existing HSI can I still wrap it as a Actuator-HSI to mint maturity tokens.
Yes, since Actuator is a wrapper around Hedron, you can wrap your existing HSI as a Actuator stake and utilize all Actuator functionality. Additional, you can unwrap a Actuator stake back to an HSI.
### Who pays for the gas to end stakes that are backing maturity tokens?
Once end day arrives, anyone can end a stake including the staker. However, each day that passes where a stake isn't ended, and additionall 1% of the stake rewards are reserved for the user who end stakes (instead of the original staker). This ensure that even if gas is high, end stakers will likely be fully reimbursed for gas costs (in HEX) if the wait.

### How would one know if a given maturity token is overpriced or underpriced
### what's the expected price of a given maturity token relative to HEX?
### how is this different from Maxi
- maxi tokens represent ownership over an indeterminate amount of HEX at a future date. HEX maturity tokens represents ownership over a determinate amount of HEX at a future date. i.e. 100 HEX-2135 is backed by exactly 100 HEX unlockable on day 2135. 
- maxi tokens are priced inaccurately due to artificial supply contraints. While volatility is a benefit for many, if you're looking to liquidate your maxi tokens at a certain date in the future, this number not desirable. Whereas Actuator allows for fluid creation of HEX maturity tokens ensuring the price is in line with HEX with a discount due to the time value of money. 
- Existing HSI owners cannot mint maxi tokens against their HSI. 

### if I sell my maturity tokens, what happens to my HEX in my stake
when you sell maturity tokens you're effectively selling your HEX. the only way to get your HEX back is to either redeem your maturity tokens or retire your maturity tokens before end stake
### why are the last 10% chosen as the reserve for the community end stake incentive?
Rewards accrued at the end of the stake life are less likely to benefit from monetization than rewards acrrued early on. 
### Does this break the delayed gratification of HEX and the game theory of HEX
Stakers can only mint HTT against the intrinsic value of their HEX stake and not value they haven't yet earned. i.e. you only get what you've earned. 
### arn't you just pulling buy pressure away from hex through these token?
HTTs only exist as because of HEX stakes. every purchase of an HTT increases the incentive to create more stakes to create new supply of HTTs. Thus on net, the existence of HTTs increase the amount of staking and thus take more HEX more HEX to come off the market into long terms stakes. additionally, HTTs increase the incentive to stake longer and in larger amounts thus taking more HEX off the market and locking up for longer.
### what drives the shape of the curve?
the price of the HTT in the pools
-->
### Why was the last 10% of stake rewards chosen as the reserve portion for the community end stake incentive?
Rewards accrued at the end of the stake life are less likely to benefit from monetization than rewards accrued early on. 
### If no ACTR vault exists at a particular redemption day, is there still an HTT creation fee?
No, the HTT creation fee is waived if there are no ACTR stakers for that redemption day. 
### Can I still mint my stake's Hedron?
Yes, even if you've extracted HTTs against your stake, you can always mint any earned Hedron from your stake. 
### Is the full intrinsic HEX value of my stake eligible as collateral for HTTs?
Generally speaking, yes, however there are notable restrictions. HEX rewards earned in the final 10% of a stake's life are not eligible as they are reserved for the community end stake subsidy. Furthermore, HTTs whose maturities are set after end stake further decrease the eligible HEX collateral to account for the added possibility of late end stake penalty. 