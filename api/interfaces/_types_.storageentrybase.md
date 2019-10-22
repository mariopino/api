[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [StorageEntryBase](_types_.storageentrybase.md)

# Interface: StorageEntryBase <**ApiType, F**>

## Type parameters

▪ **ApiType**

▪ **F**: *AnyFunction*

## Hierarchy

* **StorageEntryBase**

## Index

### Properties

* [at](_types_.storageentrybase.md#at)
* [creator](_types_.storageentrybase.md#creator)
* [hash](_types_.storageentrybase.md#hash)
* [key](_types_.storageentrybase.md#key)
* [multi](_types_.storageentrybase.md#multi)
* [size](_types_.storageentrybase.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [types.ts:104](https://github.com/polkadot-js/api/blob/26c2774992/packages/api/src/types.ts#L104)*

#### Type declaration:

▸ (`hash`: Hash | Uint8Array | string, ...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_.md#promiseorobs)‹ApiType, [ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | Hash &#124; Uint8Array &#124; string |
`...args` | Parameters‹F› |

___

###  creator

• **creator**: *StorageEntry*

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/26c2774992/packages/api/src/types.ts#L105)*

___

###  hash

• **hash**: *function*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/26c2774992/packages/api/src/types.ts#L106)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/26c2774992/packages/api/src/types.ts#L107)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Defined in [types.ts:109](https://github.com/polkadot-js/api/blob/26c2774992/packages/api/src/types.ts#L109)*

___

###  size

• **size**: *function*

*Defined in [types.ts:108](https://github.com/polkadot-js/api/blob/26c2774992/packages/api/src/types.ts#L108)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
