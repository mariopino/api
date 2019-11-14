[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [DerivedStaking](_types_.derivedstaking.md)

# Interface: DerivedStaking

## Hierarchy

* [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md)

* [DerivedStakingStash](_types_.derivedstakingstash.md)

  ↳ **DerivedStaking**

## Index

### Properties

* [accountId](_types_.derivedstaking.md#accountid)
* [controllerId](_types_.derivedstaking.md#optional-controllerid)
* [nextKeys](_types_.derivedstaking.md#optional-nextkeys)
* [nextSessionIds](_types_.derivedstaking.md#nextsessionids)
* [nominators](_types_.derivedstaking.md#optional-nominators)
* [offline](_types_.derivedstaking.md#optional-offline)
* [online](_types_.derivedstaking.md#optional-online)
* [redeemable](_types_.derivedstaking.md#optional-redeemable)
* [rewardDestination](_types_.derivedstaking.md#optional-rewarddestination)
* [sessionIds](_types_.derivedstaking.md#sessionids)
* [stakers](_types_.derivedstaking.md#optional-stakers)
* [stakingLedger](_types_.derivedstaking.md#optional-stakingledger)
* [stashId](_types_.derivedstaking.md#optional-stashid)
* [unlocking](_types_.derivedstaking.md#optional-unlocking)
* [validatorPrefs](_types_.derivedstaking.md#optional-validatorprefs)

## Properties

###  accountId

• **accountId**: *AccountId*

*Defined in [types.ts:137](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L137)*

___

### `Optional` controllerId

• **controllerId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[controllerId](_types_.derivedstakingstash.md#optional-controllerid)*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L127)*

___

### `Optional` nextKeys

• **nextKeys**? : *Keys*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nextKeys](_types_.derivedstakingstash.md#optional-nextkeys)*

*Defined in [types.ts:130](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L130)*

___

###  nextSessionIds

• **nextSessionIds**: *AccountId[]*

*Defined in [types.ts:138](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L138)*

___

### `Optional` nominators

• **nominators**? : *AccountId[]*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nominators](_types_.derivedstakingstash.md#optional-nominators)*

*Defined in [types.ts:128](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L128)*

___

### `Optional` offline

• **offline**? : *object[]*

*Inherited from [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md).[offline](_types_.derivedstakingonlinestatus.md#optional-offline)*

*Defined in [types.ts:115](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L115)*

___

### `Optional` online

• **online**? : *undefined | object*

*Inherited from [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md).[online](_types_.derivedstakingonlinestatus.md#optional-online)*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L111)*

___

### `Optional` redeemable

• **redeemable**? : *Balance*

*Defined in [types.ts:139](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L139)*

___

### `Optional` rewardDestination

• **rewardDestination**? : *RewardDestination*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[rewardDestination](_types_.derivedstakingstash.md#optional-rewarddestination)*

*Defined in [types.ts:129](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L129)*

___

###  sessionIds

• **sessionIds**: *AccountId[]*

*Defined in [types.ts:140](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L140)*

___

### `Optional` stakers

• **stakers**? : *Exposure*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stakers](_types_.derivedstakingstash.md#optional-stakers)*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L131)*

___

### `Optional` stakingLedger

• **stakingLedger**? : *StakingLedger*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L141)*

___

### `Optional` stashId

• **stashId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stashId](_types_.derivedstakingstash.md#optional-stashid)*

*Defined in [types.ts:132](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L132)*

___

### `Optional` unlocking

• **unlocking**? : *[DerivedUnlocking](../modules/_types_.md#derivedunlocking)[]*

*Defined in [types.ts:142](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L142)*

___

### `Optional` validatorPrefs

• **validatorPrefs**? : *ValidatorPrefs*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[validatorPrefs](_types_.derivedstakingstash.md#optional-validatorprefs)*

*Defined in [types.ts:133](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-derive/src/types.ts#L133)*
