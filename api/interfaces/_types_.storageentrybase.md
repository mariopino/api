[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [StorageEntryBase](_types_.storageentrybase.md)

# Interface: StorageEntryBase <**ApiType, F**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

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

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/api/src/types.ts#L111)*

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

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/api/src/types.ts#L112)*

___

###  hash

• **hash**: *function*

*Defined in [types.ts:113](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/api/src/types.ts#L113)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/api/src/types.ts#L114)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Defined in [types.ts:116](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/api/src/types.ts#L116)*

___

###  size

• **size**: *function*

*Defined in [types.ts:115](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/api/src/types.ts#L115)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
