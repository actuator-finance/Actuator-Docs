---
sidebar_position: 7
---

# System Invariants/Properties
- 1 HEX Time Token (HTT) is always backed and redeemable for 1 HEX at the designated redemption day.
- The quantity of HEX a staker forgoes at end stake is exactly equivalent to the quantity of HTTs minted against a stake. Ownership of the stake's remaining underlying HEX is retained by the staker. 
- When redemption day falls on end stake day, the total quantity of HTTs that can be minted against a stake cannot exceed the principal + accrued interest.
- When redemption day falls after end stake day, the total quantity of HTTs that can be minted against a stake cannot exceed the principal + accrued interest - late end stake penalty.
- When redemption day falls before end stake day, the total quantity of HTTs that can be minted against a stake cannot exceed the principal + accrued interest - early end stake penalty.
- Any time before redemption day, stakers can regain full ownership/control of their stake by returning the quantity of HTTs minted.  
