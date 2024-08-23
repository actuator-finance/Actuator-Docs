---
sidebar_position: 2
---

# Actuator Wrapped HEX Stakes

Every Actuator wrapped stake is a HEX Stake Instance (HSI) and thus Actuator rides on top of the Hedron protocol. Actuator wrapped stakes can be created through the Actuator contract (which then invokes the Hedron contract and creates the HSI) or existing HSIs can be delegated to the Actuator contract. Actuator wrapped stakes retain the ability to mint Hedron at any time and can always be unwrapped back into a standard tokenized HSI. Once created/delegated, stakers can mint 'HEX Time Tokens' (HTTs) against the stake's underlying HEX value. Stakers can mint any amount of HTTs whenever they choose as many times as they want, as long as the total quantity minted doesn't exceed the extractable HEX value of the stake for the chosen redemption day (see 'Extractable HEX value' for more info). Additionally, users can retire any or all tokens they've minted at any time. If HTTs have been minted, stakers are not able to early end stake, nor are they able to tokenize their HSI (i.e. revoke delegation) until they've retired all HTTs. This ensures the system accounting is always balanced and guarantees 1 HTT will always be redeemable for 1 HEX at the designated redemption day. Once end stake day arrives, stakers can collect any HEX rewards/principal that hasn't been minted against (i.e. collateralized) and the remaining HEX is reserved for redemption by HTT holders.

### Flowchart
While not exhaustive, the below flowchart demonstrates the different paths an Actuator Wrapped Stake can take in its lifecycle. 
- Starting from the left and moving right represents the progression of the stake through time. 
- The area between the dotted vertical blue lines represents actions taken after stake start but before stake end.
- The dark shaded green bubbles represent the two entry points into the contract. Users can create new wrapped HEX stakes (labeled "Start HEX Stake") through the protocol or delegate existing stakes to the protocol (labeled "Delegate HSI to Actuator").
- The outlined green bubbles represent the various Actuator functions that can be performed on your HEX stake. 
- Movement across the two horizontal solid black lines represents transfer of assets in/out (e.g. HSI or HEX Time Tokens) of the protocol. 
![Alt text](/img/ActuatorFlowchart.png)
