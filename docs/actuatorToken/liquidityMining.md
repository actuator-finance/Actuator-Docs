---
sidebar_position: 2
---

# Liquidity Mining

75% of all ACTR tokens will be distributed to liquidity providers. Liquidity mining, commonly referred to as farming, is pivotal for fair distribution of the Actuator token and bootstraps liquidity within key trading pools.

## Reward Allocation

A total of **750 million ACTR tokens** have been allocated specifically for liquidity mining over a span of three years:

- **Year 1**: 350,000,000 tokens
- **Year 2**: 250,000,000 tokens
- **Year 3**: 150,000,000 tokens

The distribution follows a fixed supply curve, ensuring a systematic allocation of rewards over the specified period.

### Farm Selection and Weights
In order to eliminate admin keys and minimize the attack surface, the farmable pool are chosen from the onset and can't be changed after deployment. 
There are several factors to consider when deciding which HTT redemption days, and weights to assign for the farms. On the one hand, we want to incentivize liquidity across many HTT redemption days to ensure every common time horizon for HEX staking is covered (since HEX stakes back HTTs). On the other hand, we want maximal liquidity in each pool and don't want liquidity spread too thin. With these tradeoffs in mind, we've chosen to prioritize these 2 objectives: liquidity and natural Schelling points. Firstly, to maximize liquidity, we'll tend towards incentivizing as few farms as necessary (especially in the first year). Secondly, we want the choice of which HTT redemption days to be a natural Schelling point that's highly defensible and fair. For this reason, we've chosen redemption days that are evenly spaced, round numbers and are easy to remember. Additionally, the longer the time to redemption the greater the rewards for that farm (like 'Longer Pays Better'). We believe the below farm schedule meets those objectives. 
|        | YEAR 1 (Oct 9, '24) | YEAR 2 (Oct 9, '25) | YEAR 3 (Oct 9, '26) |
|--------|--------|--------|--------|
| HTT-3000 | 19%  | 10%     |        |
| HTT-4000 |      | 15%    | 10%     |
| HTT-5000 | 33%  | 20%    | 15%    |
| HTT-6000 |      | 25%    | 20%    |
| HTT-7000 | 48%  | 30%    | 25%    |
| HTT-8000 |      |        | 30%    |

<small>Figures in year 1 are rounded to nearest whole percent</small>

## Farm Contract

Our farming contract is modeled largely after the **PulseX Incentive Token MasterChef Contract**, which was initially developed for SushiSwap. This model has been chosen for its proven effectiveness and robustness.

