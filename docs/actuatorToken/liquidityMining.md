---
sidebar_position: 2
---

# Liquidity Mining

Liquidity mining, commonly referred to as farming, is pivotal for fair distribution of the Actuator token and bootstraps liquidity within key trading pools.

## Reward Allocation

A total of **750 billion tokens** have been allocated specifically for liquidity mining over a span of three years:

- **Year 1**: 350,000,000 tokens
- **Year 2**: 250,000,000 tokens
- **Year 3**: 150,000,000 tokens

The distribution follows a fixed supply curve, ensuring a systematic allocation of rewards over the specified period.

### Farm Selection and Weights
In order to eliminate admin keys and minimize the attack surface, the farmable pool are chosen from the onset and can't be changed after deployment. 
There are several factors to consider when deciding which HTT redemption days, and weights to assign for the farms. On the one hand, we want to incentive liquidity across many HTT redemption days to ensure every common time horizon for HEX staking is covered (since HEX stakes back HTTs). On the other hand, we want maximal liquidity in each pool and don't want liquidity spread too thin. With these tradeoffs in mind, we've chosen to prioritize these 2 objectives: liquidity and natural Schelling points. Firstly, to maximize liquidity, we'll tend towards incentivizing as few farms as necessary (especially in the first year). Secondly, we want the choice of which HTT redemption days to be a natural Schelling point that's highly defensible and fair. For this reason, we've chosen redemption days that are evenly spaced and are round numbers that are easy to remember. Additionally, the longer the time to redemption the greater the rewards for that farm (like 'Longer Pays Better'). We believe the below farm schedule meets those objectives. 
|        | YEAR 1 | YEAR 2 | YEAR 3 |
|--------|--------|--------|--------|
| HTT-3000 | 10%  | 5%     |        |
| HTT-4000 |      | 15%    | 5%     |
| HTT-5000 | 15%  | 20%    | 15%    |
| HTT-6000 |      | 25%    | 20%    |
| HTT-7000 | 75%  | 35%    | 25%    |
| HTT-8000 |      |        | 35%    |


<!-- ## Farmable Pools
Farmable pools are strategically selected to promote an even distribution of tokens (HTTs) across various redemptions days and concentrated zones of existing HSIs. The selection of these pools is aimed at maintaining balance and fairness in the reward distribution process. -->

<!-- ### Pool Selection and Rewards Adjustment
The selection of farmable pools and the allocation of rewards are dynamic and may be adjusted according to market conditions. This approach allows us to respond to economic shifts and user participation rates effectively:

- **Dynamic Allocation**: The relative rewards for each pool are subject to change at the discretion of the development team.
- **Strategic Choices**: Pools are chosen to ensure robust participation and optimal distribution of tokens. -->

## Farm Contract

Our farming contract is modeled largely after the **PulseX Incentive Token MasterChef Contract**, which was initially developed for SushiSwap. This model has been chosen for its proven effectiveness and robustness.

<!-- ## How to Start Farming

Farming will officially begin on **September 1st, 2024**. To participate, follow these steps:

1. Visit our farming platform: [Start Farming](https://Actuator.finance/farms)
2. Connect your wallet.
3. Choose a pool to provide liquidity to.
4. Stake your LP tokens to start earning rewards. -->

<!-- Please make sure to review the reward allocation for each pool, as they may vary based on the ongoing adjustments by our team.  -->

<!-- ## Conclusion -->

<!-- Our liquidity mining program is designed to be flexible and responsive to the community's needs and market dynamics. Follow us on X @ActuatorFinance for updates. -->

