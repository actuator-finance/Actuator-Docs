---
sidebar_position: 2
---

# Actuator Wrapped Stakes

Every Actuator wrapped stake is a HEX Stake Instance (HSI) and thus Actuator rides on top of the Hedron protocol. Actuator wrapped stakes can be created through the Actuator contract (which then invokes the Hedron contract and creates the HSI) or existing HSIs can be delegated to the Actuator contract. Actuator wrapped stakes retain the ability to mint Hedron at any time and can always be unwrapped back into a standard tokenized HSI. Once created/delegated, stakers can mint 'HEX Time Tokens' (HTTs) against the stake's underlying HEX value. Stakers can mint any amount of HTTs whenever they choose as many times as they want, as long as the total quantity minted doesn't exceed the intrinsic HEX value of the stake. Additionally, users can retire any or all tokens they've minted at any time. If HTTs have been minted, stakers are not able to early end stake, nor are they able to tokenize their HSI (i.e. revoke delegation) until they've retired all HTTs. This ensures the system accounting is always balanced and guarantees 1 HTT will always be redeemable for 1 HEX at the designated redemption day. Once end stake day arrives, stakers can collect any HEX rewards/principal that hasn't been minted against (i.e. collateralized) and the remaining HEX is reserved for redemption by HTT holders.
