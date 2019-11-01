[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [DerivedStaking](_types_.derivedstaking.md)

# Interface: DerivedStaking

## Hierarchy

* [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md)

  ↳ **DerivedStaking**

## Index

### Properties

* [accountId](_types_.derivedstaking.md#accountid)
* [controllerId](_types_.derivedstaking.md#optional-controllerid)
* [nextSessionId](_types_.derivedstaking.md#optional-nextsessionid)
* [nextSessionIds](_types_.derivedstaking.md#nextsessionids)
* [nominators](_types_.derivedstaking.md#optional-nominators)
* [offline](_types_.derivedstaking.md#optional-offline)
* [online](_types_.derivedstaking.md#optional-online)
* [redeemable](_types_.derivedstaking.md#optional-redeemable)
* [rewardDestination](_types_.derivedstaking.md#optional-rewarddestination)
* [sessionId](_types_.derivedstaking.md#optional-sessionid)
* [sessionIds](_types_.derivedstaking.md#sessionids)
* [stakers](_types_.derivedstaking.md#optional-stakers)
* [stakingLedger](_types_.derivedstaking.md#optional-stakingledger)
* [stashId](_types_.derivedstaking.md#optional-stashid)
* [unlocking](_types_.derivedstaking.md#optional-unlocking)
* [validatorPrefs](_types_.derivedstaking.md#optional-validatorprefs)

## Properties

###  accountId

• **accountId**: *AccountId*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L114)*

___

### `Optional` controllerId

• **controllerId**? : *AccountId*

*Defined in [types.ts:115](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L115)*

___

### `Optional` nextSessionId

• **nextSessionId**? : *AccountId*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L117)*

___

###  nextSessionIds

• **nextSessionIds**: *AccountId[]*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L118)*

___

### `Optional` nominators

• **nominators**? : *AccountId[]*

*Defined in [types.ts:119](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L119)*

___

### `Optional` offline

• **offline**? : *object[]*

*Inherited from [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md).[offline](_types_.derivedstakingonlinestatus.md#optional-offline)*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L107)*

___

### `Optional` online

• **online**? : *undefined | object*

*Inherited from [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md).[online](_types_.derivedstakingonlinestatus.md#optional-online)*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L103)*

___

### `Optional` redeemable

• **redeemable**? : *Balance*

*Defined in [types.ts:120](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L120)*

___

### `Optional` rewardDestination

• **rewardDestination**? : *RewardDestination*

*Defined in [types.ts:121](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L121)*

___

### `Optional` sessionId

• **sessionId**? : *AccountId*

*Defined in [types.ts:123](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L123)*

___

###  sessionIds

• **sessionIds**: *AccountId[]*

*Defined in [types.ts:124](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L124)*

___

### `Optional` stakers

• **stakers**? : *Exposure*

*Defined in [types.ts:125](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L125)*

___

### `Optional` stakingLedger

• **stakingLedger**? : *StakingLedger*

*Defined in [types.ts:126](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L126)*

___

### `Optional` stashId

• **stashId**? : *AccountId*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L127)*

___

### `Optional` unlocking

• **unlocking**? : *[DerivedUnlocking](../modules/_types_.md#derivedunlocking)[]*

*Defined in [types.ts:128](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L128)*

___

### `Optional` validatorPrefs

• **validatorPrefs**? : *ValidatorPrefs*

*Defined in [types.ts:129](https://github.com/polkadot-js/api/blob/d41f6ec3ef/packages/api-derive/src/types.ts#L129)*
