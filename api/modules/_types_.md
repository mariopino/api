[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)
* [PromiseResult](../interfaces/_types_.promiseresult.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageExact](../interfaces/_types_.queryablestorageexact.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [RxResult](../interfaces/_types_.rxresult.md)
* [Signer](../interfaces/_types_.signer.md)
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [SignerResult](../interfaces/_types_.signerresult.md)
* [StorageEntryBase](../interfaces/_types_.storageentrybase.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterfaceEvents](_types_.md#apiinterfaceevents)
* [ApiTypes](_types_.md#apitypes)
* [DecorateMethod](_types_.md#decoratemethod)
* [DecoratedRpc](_types_.md#decoratedrpc)
* [DecoratedRpcSection](_types_.md#decoratedrpcsection)
* [MethodResult](_types_.md#methodresult)
* [ObsInnerType](_types_.md#obsinnertype)
* [PromiseOrObs](_types_.md#promiseorobs)
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [StorageEntryExact](_types_.md#storageentryexact)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterfaceEvents

Ƭ **ApiInterfaceEvents**: *ProviderInterfaceEmitted | "ready"*

*Defined in [types.ts:238](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L238)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:240](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L240)*

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [types.ts:59](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L59)*

#### Type declaration:

▸ <**Method**>(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)): *any*

**Type parameters:**

▪ **Method**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md) |

___

###  DecoratedRpc

Ƭ **DecoratedRpc**: *object*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L96)*

#### Type declaration:

___

###  DecoratedRpcSection

Ƭ **DecoratedRpcSection**: *object*

*Defined in [types.ts:90](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L90)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *MethodResult<ApiType, F>*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L86)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *ObsInnerType<O>*

*Defined in [types.ts:49](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L49)*

___

###  PromiseOrObs

Ƭ **PromiseOrObs**: *PromiseOrObs<ApiType, T>*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L81)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *QueryableStorageEntry<ApiType>*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L131)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *QueryableStorageMulti<ApiType>*

*Defined in [types.ts:152](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L152)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹ApiType› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹ApiType›, undefined | string | number | false | true | Codec | Uint8Array‹› | BN‹› | CodecArgArray‹› | CodecArgObject]*

*Defined in [types.ts:140](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L140)*

___

###  StorageEntryExact

Ƭ **StorageEntryExact**: *[MethodResult](_types_.md#methodresult)‹ApiType, F› & [StorageEntryBase](../interfaces/_types_.storageentrybase.md)‹ApiType, F›*

*Defined in [types.ts:126](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L126)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹function›*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L51)*
