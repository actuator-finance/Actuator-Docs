"use strict";(self.webpackChunkactuator_docs=self.webpackChunkactuator_docs||[]).push([[581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"index","unlisted":false},{"type":"category","label":"Actuator Protocol","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/Actuator Protocol/overview","docId":"Actuator Protocol/overview","unlisted":false},{"type":"link","label":"HEX Time Token (HTT)","href":"/Actuator Protocol/hexMaturityToken","docId":"Actuator Protocol/hexMaturityToken","unlisted":false},{"type":"link","label":"Actuator Wrapped HEX Stakes","href":"/Actuator Protocol/wrappedHSIs","docId":"Actuator Protocol/wrappedHSIs","unlisted":false},{"type":"link","label":"Extractable Stake Value","href":"/Actuator Protocol/extractableStakeValue","docId":"Actuator Protocol/extractableStakeValue","unlisted":false},{"type":"link","label":"Choosing the Redemption Day","href":"/Actuator Protocol/choosingTheRedemptionDay","docId":"Actuator Protocol/choosingTheRedemptionDay","unlisted":false},{"type":"link","label":"Redemption Process","href":"/Actuator Protocol/redemption","docId":"Actuator Protocol/redemption","unlisted":false},{"type":"link","label":"Examples","href":"/Actuator Protocol/examples","docId":"Actuator Protocol/examples","unlisted":false},{"type":"link","label":"System Invariants/Properties","href":"/Actuator Protocol/invariants","docId":"Actuator Protocol/invariants","unlisted":false},{"type":"link","label":"ELI5","href":"/Actuator Protocol/ELI5","docId":"Actuator Protocol/ELI5","unlisted":false}],"href":"/category/actuator-protocol"},{"type":"link","label":"FAQ","href":"/faq","docId":"faq","unlisted":false},{"type":"link","label":"Market Dynamics","href":"/marketDynamics","docId":"marketDynamics","unlisted":false},{"type":"link","label":"Use Cases","href":"/useCases","docId":"useCases","unlisted":false},{"type":"category","label":"Actuator Token","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/actuatorToken/overview","docId":"actuatorToken/overview","unlisted":false},{"type":"link","label":"Tokenomics","href":"/actuatorToken/tokenomics","docId":"actuatorToken/tokenomics","unlisted":false},{"type":"link","label":"Liquidity Mining","href":"/actuatorToken/liquidityMining","docId":"actuatorToken/liquidityMining","unlisted":false},{"type":"link","label":"ACTR Vaults","href":"/actuatorToken/vaults","docId":"actuatorToken/vaults","unlisted":false}],"href":"/category/actuator-token"},{"type":"link","label":"Glossary","href":"/glossary","docId":"glossary","unlisted":false},{"type":"link","label":"Audits","href":"/audits","docId":"audits","unlisted":false}]},"docs":{"Actuator Protocol/choosingTheRedemptionDay":{"id":"Actuator Protocol/choosingTheRedemptionDay","title":"Choosing the Redemption Day","description":"Introduction","sidebar":"tutorialSidebar"},"Actuator Protocol/ELI5":{"id":"Actuator Protocol/ELI5","title":"ELI5","description":"HEX","sidebar":"tutorialSidebar"},"Actuator Protocol/examples":{"id":"Actuator Protocol/examples","title":"Examples","description":"Example 1 - Basic Actions","sidebar":"tutorialSidebar"},"Actuator Protocol/extractableStakeValue":{"id":"Actuator Protocol/extractableStakeValue","title":"Extractable Stake Value","description":"Introduction","sidebar":"tutorialSidebar"},"Actuator Protocol/hexMaturityToken":{"id":"Actuator Protocol/hexMaturityToken","title":"HEX Time Token (HTT)","description":"A \'HEX Time Token\' (HTT) is an ERC20 token that can be redeemed 11 redemption for HEX. This is due to the behavior of the HEX protocol. Since HTTs are backed by stakes, and stakes that end after 14 days begin to incur late penalties, these penalties will impact HTT redemption. After 2 weeks, redemption is on a first come first serve basis. With that being said, it may be the case that all redemptions after 14 weeks can still exchange 1:1 for HEX if all underlying stakes are unlocked on time. This is due to the strong community end stake incentive built into the protocol (see \'Redemption Process\' for more info).","sidebar":"tutorialSidebar"},"Actuator Protocol/invariants":{"id":"Actuator Protocol/invariants","title":"System Invariants/Properties","description":"- 1 HEX Time Token (HTT) is always backed and redeemable for 1 HEX at the designated redemption day.","sidebar":"tutorialSidebar"},"Actuator Protocol/overview":{"id":"Actuator Protocol/overview","title":"Overview","description":"Actuator is a decentralized protocol that wraps existing or new HEX stakes with additional functionality. Stake owners can mint fungible ERC20 tokens called \'HEX Time Tokens\' (HTTs) backed 11 for HEX on or after the designated redemption day. The redemption day is chosen by the staker when the HTTs are created. When creating HTTs, users can choose any redemption day where the \'Extractable Stake HEX\' value is greater than zero (see \'Extractable Stake Value\' for more info), however, users typically choose a redemption day that falls on or after end stake day. Only one HTT can be minted for every one HEX staked or rewarded for a given HSI. Within a stake, any HEX that does not back HTTs (i.e. non-collateralized HEX) is simply collected by the original staker at end stake. No coordination, special timing, capacity limits or centralized intervention is required at any time. Prior to redemption day, the HTTs could be bought or sold through trading pools, allowing stakers to easily liquidate the intrinsic value of their stake at a fair price. Additionally, users can purchase HTTs (at the desired redemption day) and lock in a fixed rate of return (assuming the HTT trades at a discount to HEX) in HEX since they will be able to redeem their HTTs for the underlying HEX. Subsequently, this would result in a market-driven emergent yield curve for HEX across various redemption days thus creating new information for the HEX ecosystem to benchmark investments and drive new tools/opportunities.","sidebar":"tutorialSidebar"},"Actuator Protocol/redemption":{"id":"Actuator Protocol/redemption","title":"Redemption Process","description":"The redemption process introduces challenges given that HTTs can be backed by many stakes. Users who attempt to redeem their HTTs may end up paying large sums of gas fees to initiate multiple end stakes. However, the system mostly eliminates these concerns by penalizing original stakers who fail to end their stake and incentivizing community end staking. All rewards accrued in the last 10% of a stake\'s life are held in \'escrow\' (i.e. in the contract) and are not eligible as collateral for HTTs. This incentivizes the original staker to end the stake in order to collect their \'escrowed\' rewards. Stakers who fail to end stake in a timely manner forgo up to all escrowed rewards. These rewards are instead credited to any user who initiates the end stake. Stakers have 3 grace days before escrowed rewards begin flowing to the end staker. Each day after the grace period (3 days), an additional 1/10th of the escrowed rewards are credited to the end staker up to the 10th day where 100% of the escrowed rewards go the end staker. This gradual, linear increase helps ensure there\'s a \'breakeven\' day where the end stake rewards equal or exceed the cost of gas when end staking. This allows for an elegant market-based solution to the gas cost problem associated with end stake.","sidebar":"tutorialSidebar"},"Actuator Protocol/wrappedHSIs":{"id":"Actuator Protocol/wrappedHSIs","title":"Actuator Wrapped HEX Stakes","description":"Every Actuator wrapped stake is a HEX Stake Instance (HSI) and thus Actuator rides on top of the Hedron protocol. Actuator wrapped stakes can be created through the Actuator contract (which then invokes the Hedron contract and creates the HSI) or existing HSIs can be delegated to the Actuator contract and can always be unwrapped (i.e. revoke delegation) back into a standard HSI. Once created/delegated, stakers can mint \'HEX Time Tokens\' (HTTs) against the stake\'s underlying HEX value. Stakers can mint any amount of HTTs whenever they choose as many times as they want, as long as the total quantity minted never exceeds the extractable HEX value of the stake for the chosen redemption day (see \'Extractable HEX value\' for more info). Additionally, users can retire any or all HTTs they\'ve minted at any time. If HTTs have been minted, the underlying stake owner cannot early end stake, nor are they able to tokenize their HSI (i.e. revoke delegation) until they\'ve retired all HTTs. This ensures the system accounting is always balanced and guarantees 1 HTT will always be redeemable for 1 HEX at the designated redemption day. Once end stake day arrives, stakers can collect any HEX rewards/principal that hasn\'t been minted against (i.e. collateralized) and the remaining HEX is reserved for redemption by HTT holders.","sidebar":"tutorialSidebar"},"actuatorToken/liquidityMining":{"id":"actuatorToken/liquidityMining","title":"Liquidity Mining","description":"75% of all ACTR tokens will be distributed to liquidity providers. Liquidity mining, commonly referred to as farming, is pivotal for fair distribution of the Actuator token and bootstraps liquidity within key trading pools.","sidebar":"tutorialSidebar"},"actuatorToken/overview":{"id":"actuatorToken/overview","title":"Overview","description":"The ACTR Token, which will serve as the revenue sharing token for Actuator, is designed to have deflationary supply and be resistant to manipulations.","sidebar":"tutorialSidebar"},"actuatorToken/tokenomics":{"id":"actuatorToken/tokenomics","title":"Tokenomics","description":"Total Token Supply","sidebar":"tutorialSidebar"},"actuatorToken/vaults":{"id":"actuatorToken/vaults","title":"ACTR Vaults","description":"ACTR vaults provide ACTR token holders with a flexible and beneficial way to earn rewards in HTTs. To participate in the rewards, token holders must deposit their ACTR into a vault controlled by the Actuator token contract. During this process, depositors will select a vault which are distinguished by which HEX Time Token they will receive as rewards.","sidebar":"tutorialSidebar"},"audits":{"id":"audits","title":"Audits","description":"Security Audits","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"What is a HEX Time token (HTT)?","sidebar":"tutorialSidebar"},"glossary":{"id":"glossary","title":"Glossary","description":"Actuator: A decentralized protocol that wraps existing or new HEX stakes with additional functionality, allowing users to mint HEX Time Tokens (HTTs) against their stakes.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Introduction","description":"Any given HEX stake has an \'intrinsic value\' defined as the initial HEX staked plus accrued HEX rewards to date. This intrinsic amount of HEX is always growing, knowable at any given time, and unlockable at end stake. Actuator leverages these properties by allowing HEX stakers to mint a new type of token backed by the intrinsic HEX value of their stake. We\'re calling these tokens \'HEX Time Tokens\' (HTTs). HTTs are fungible ERC20 tokens backed 11 for HEX after end stake when the underlying HEX becomes unlocked. Notably, this approach enables distinct stakes to utilize their common collateral (intrinsic HEX value), and gain shared liquidity through a single, fungible token (assuming a common HTT redemption day).","sidebar":"tutorialSidebar"},"marketDynamics":{"id":"marketDynamics","title":"Market Dynamics","description":"HEX Time Token (HTT) Correlation to HEX","sidebar":"tutorialSidebar"},"useCases":{"id":"useCases","title":"Use Cases","description":"- Actuator Wrapped Stakes","sidebar":"tutorialSidebar"}}}')}}]);