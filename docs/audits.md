---
sidebar_position: 9
---

# Audits

## Security Audits
#### SourceHat 
SourceHat completed an audit of the Actuator contracts on August 27th. The report can be found here: https://sourcehat.com/audits/ActuatorFinance/

#### Dedaub 
Dedaub completed an audit of the Actuator contracts on September 6th. The report can be found here: https://dedaub.com/audits/actuator/actuator-finance-sep-06-2024

## Financial Audits
#### Dedaub 
Dedaub completed a financial audit which verified the following key financial invariants: 
- 1 'HEX Time Token' (HTT) is always redeemable for 1 HEX at the designated redemption day - assuming all HTT holders invoke redemption no later than 14 days after redemption day
- After minting HTTs against a stake, the quantity of HEX the staker forgoes at end stake is exactly equivalent to the quantity of HTTs created - assuming the stake is ended before the 'end stake subsidy' kicks in on the fourth day after end stake.

The report can be found here: https://dedaub.com/audits/actuator/actuator-finance-sep-06-2024/#financial-invariant-verification
