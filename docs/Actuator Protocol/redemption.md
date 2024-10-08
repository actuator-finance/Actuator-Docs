---
sidebar_position: 5
---

# Redemption Process
The redemption process introduces challenges given that HTTs can be backed by many stakes. Users who attempt to redeem their HTTs may end up paying large sums of gas fees to initiate multiple end stakes. However, the system mostly eliminates these concerns by penalizing original stakers who fail to end their stake and incentivizing community end staking. All rewards accrued in the last 10% of a stake's life are held in 'escrow' (i.e. in the contract) and are not eligible as collateral for HTTs. This incentivizes the original staker to end the stake in order to collect their 'escrowed' rewards. Stakers who fail to end stake in a timely manner forgo up to all escrowed rewards. These rewards are instead credited to any user who initiates the end stake. Stakers have 3 grace days before escrowed rewards begin flowing to the end staker. Each day after the grace period (3 days), an additional 1/10th of the escrowed rewards are credited to the end staker up to the 10th day where 100% of the escrowed rewards go to the end staker. This gradual, linear increase helps ensure there's a 'breakeven' day where the end stake rewards equal or exceed the cost of gas when end staking. This allows for an elegant market-based solution to the gas cost problem associated with end stake.

![Alt text](/img/actuator_redemption_process.png)
