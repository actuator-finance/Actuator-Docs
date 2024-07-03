---
sidebar_position: 5
---

# Examples

## Example 1 - Basic Actions
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

## Example 2 - Custom Redemption Day
- Create Stake
  - Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 1900. 
- Mint HEX Time Tokens
  - Bob wants to mint and sell HTT-1900 but there is no liquid trading pool to trade HTT-1900 in. There is, however, a liquid pool for HTT-2000.
  - Bob mints 150 HTT-2000 against his stake and sells 150 HTT-2000 into the trading pool.
- Retire HEX Time Tokens
  - Day 1850 arrives and Bob wants to regain control of a portion of the collateralized HEX in his stake.
  - Bob buys 50 HTT-2000 from the trading pool and returns the 50 HTT-2000 to Actuator which is then burned. 
  - Bob now only has 100 HTT-2000 outstanding against his stake.
- End Stake
  - Day 1900 arrives
  - Bob invokes end stake and receives the full HEX proceeds from his stake except for the 100 HEX that was collateralized. 
  - The 100 collateralized HEX is held in reserve in the protocol until redemption on day 2000
- Redemption Day
  - Day 2000 arrives
  - All HTT-2000 holders can redeem their HTT-2000 1:1 for HEX which includes the collateralized HEX held in reserve from Bob's stake. 

## Example 3 - Community End Stake Incentive
- Create Stake
  - Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 3000. 
- Mint HEX Time Tokens
  - Bob mints 150 HTT-3000 against his stake and sends the 150 HTT-3000 to Alice.
- End Stake
  - Day 3000 arrives
  - Bob lost his private keys and is unable to end his stake
  - Alice needs to end Bob's stake to unlock HEX to redeem her 150 HTT-3000 but she doesn't want to pay the gas costs
  - Day 3003 arrives
  - 1/10th of Bob's 'escrowed' rewards (all rewards earned in the final 10% of the stake's life are 'escrowed') will now be paid out to whoever ends the stake but the gas costs still exceed the end stake rewards so no one chooses to unlock the stake
  - Day 3007 arrives
  - 5/10ths of Bob's escrowed rewards will now be paid out to the end staker and that amount happens to exceed the gas costs. 
  - Charlie who owns no HTTs or stakes chooses to end Bob's stake to earn the end stake reward. The remaining HEX proceeds go to Bob except for collateralized 150 HEX held in reserve. 
  - Alice then redeems here 150 HTT-3000 for 150 HEX without having to ever end stake. 
  - Alice invokes end stake on Bob's stake and receives the full HEX proceeds from his stake except for the 100 HEX that was collateralized. 
  - The 100 collateralized HEX is held in reserve in the protocol until redemption on day 3000

## Example 4 - Late Redemption 1
- Create Stake
  - Bob creates a new HSI through Actuator with a principal of 150 HEX, ending on HEX day 3000. 
- Mint HEX Time Tokens
  - Bob mints 150 HTT-3000 against his stake and sends the 150 HTT-3000 to Alice.
- End Stake
  - Day 3000 arrives
  - Bob ends his stake and receives the proceeds except for the 150 collateralized HEX.
  - Alice forgets to redeem her HTT.
- 1000 days pass
  - Alice finally remembers she owns 150 HTT-3000 tokens.
  - Alice redeems 150 HTT-3000 for 150 HEX which had been held reserve until now. 

## Example 4 - Late Redemption 2
- Create Stake
  - Bob creates a new HSI through Actuator with a principal of 100 HEX, ending on HEX day 3000. 
- Mint HEX Time Tokens
  - Bob mints 100 HTT-3000 against his stake and sends the 100 HTT-3000 to Alice.
- End Stake
  - Day 3000 arrives
  - Bob's stake has accrued an additional 100 HEX in rewards bringing the total proceeds to 200 HEX.
  - Bob lost his private keys and fails to end stake 
  - Alice forgets to redeem her 100 HTT-3000 
- 200 days pass
  - Alice remembers to redeem so she ends Bob's stake.
  - roughly 25% of Bob's stake value is penalized (enforced by HEX protocol) bringing his total value to 150 HEX
  - HTT holders have higher priority over stakers so Alice redeems her 100 HTT-3000 for the full 100 HEX
  - Only 50 HEX goes to Bob instead of 100 HEX due to the 50 HEX penalty and the 100 collateralized HEX belonging to Alice

