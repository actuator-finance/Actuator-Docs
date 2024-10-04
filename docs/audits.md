---
sidebar_position: 9
---

# Audits

### Security Audits
#### [Dedaub](https://dedaub.com/) - September 6th
- Full report - [https://dedaub.com/audits/actuator/actuator-finance-sep-06-2024](https://dedaub.com/audits/actuator/actuator-finance-sep-06-2024)
- "2 auditors worked on the codebase for 5 days (each)"
- "A single low severity issue was found." (and has since been resolved)

#### [SourceHat](https://sourcehat.com/) - August 27th
- Full report - [https://sourcehat.com/audits/ActuatorFinance/](https://sourcehat.com/audits/ActuatorFinance/)
- "All findings have been resolved, and minimal centralized aspects are present."
- Vulnerability Analysis marked PASS on all categories.

<!-- SourceHat completed an audit of the Actuator contracts on August 27th. The report can be found here: https://sourcehat.com/audits/ActuatorFinance/ -->

### Financial Audit
#### [Dedaub](https://dedaub.com/) - September 6th
- Full report - [https://dedaub.com/audits/actuator/actuator-finance-sep-06-2024/#financial-invariant-verification](https://dedaub.com/audits/actuator/actuator-finance-sep-06-2024/#financial-invariant-verification)
- The financial audit verified the following key financial invariants: 
  - 1 'HEX Time Token' (HTT) is always redeemable for 1 HEX at the designated redemption day - assuming all HTT holders invoke redemption no later than 14 days after redemption day
  - After minting HTTs against a stake, the quantity of HEX the staker forgoes at end stake is exactly equivalent to the quantity of HTTs created - assuming the stake is ended before the 'end stake subsidy' kicks in on the fourth day after end stake.

