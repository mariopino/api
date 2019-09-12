**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › [&quot;types&quot;](_types_.md)

# External module: "types"

## Index

### Interfaces

* [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)
* [PromiseResult](../interfaces/_types_.promiseresult.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [Signer](../interfaces/_types_.signer.md)
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [SignerResult](../interfaces/_types_.signerresult.md)
* [StorageEntryObservable](../interfaces/_types_.storageentryobservable.md)
* [StorageEntryPromise](../interfaces/_types_.storageentrypromise.md)
* [StorageEntryPromiseMulti](../interfaces/_types_.storageentrypromisemulti.md)
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
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [QueryableStorageMultiArgs](_types_.md#queryablestoragemultiargs)
* [RxResult](_types_.md#rxresult)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterfaceEvents

Ƭ **ApiInterfaceEvents**: *ProviderInterfaceEmitted | "ready"*

*Defined in [types.ts:216](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L216)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:218](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L218)*

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L53)*

#### Type declaration:

▸ (`method`: function, `options?`: [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)): *any*

**Parameters:**

▪ **method**: *function*

▸ (...`args`: any[]): *Observable‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **options**: *[DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)*

___

###  DecoratedRpc

Ƭ **DecoratedRpc**: *object*

*Defined in [types.ts:83](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L83)*

#### Type declaration:

___

###  DecoratedRpcSection

Ƭ **DecoratedRpcSection**: *object*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L77)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *MethodResult<ApiType, F>*

*Defined in [types.ts:73](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L73)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *ObsInnerType<O>*

*Defined in [types.ts:43](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L43)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *QueryableStorageEntry<ApiType>*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L118)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *QueryableStorageMulti<ApiType>*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L141)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹ApiType› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹ApiType›, Array]*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L127)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *[QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)‹ApiType›[]*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L131)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:63](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L63)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *Observable‹[ObsInnerType](_types_.md#obsinnertype)‹ReturnType‹F›››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹function›*

*Defined in [types.ts:45](https://github.com/polkadot-js/api/blob/b62b1b2/packages/api/src/types.ts#L45)*