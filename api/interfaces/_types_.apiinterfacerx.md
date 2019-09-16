**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › [&quot;types&quot;](../modules/_types_.md) › [ApiInterfaceRx](_types_.apiinterfacerx.md)

# Interface: ApiInterfaceRx

## Hierarchy

* **ApiInterfaceRx**

## Index

### Properties

* [consts](_types_.apiinterfacerx.md#consts)
* [extrinsicType](_types_.apiinterfacerx.md#extrinsictype)
* [genesisHash](_types_.apiinterfacerx.md#genesishash)
* [hasSubscriptions](_types_.apiinterfacerx.md#hassubscriptions)
* [query](_types_.apiinterfacerx.md#query)
* [queryMulti](_types_.apiinterfacerx.md#querymulti)
* [rpc](_types_.apiinterfacerx.md#rpc)
* [runtimeMetadata](_types_.apiinterfacerx.md#runtimemetadata)
* [runtimeVersion](_types_.apiinterfacerx.md#runtimeversion)
* [signer](_types_.apiinterfacerx.md#optional-signer)
* [tx](_types_.apiinterfacerx.md#tx)

## Properties

###  consts

• **consts**: *Constants*

*Defined in [types.ts:203](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L203)*

___

###  extrinsicType

• **extrinsicType**: *number*

*Defined in [types.ts:204](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L204)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Defined in [types.ts:205](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L205)*

___

###  hasSubscriptions

• **hasSubscriptions**: *boolean*

*Defined in [types.ts:206](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L206)*

___

###  query

• **query**: *[QueryableStorage](_types_.queryablestorage.md)‹"rxjs"›*

*Defined in [types.ts:209](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L209)*

___

###  queryMulti

• **queryMulti**: *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹"rxjs"›*

*Defined in [types.ts:210](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L210)*

___

###  rpc

• **rpc**: *[DecoratedRpc](../modules/_types_.md#decoratedrpc)‹"rxjs", RpcInterface›*

*Defined in [types.ts:211](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L211)*

___

###  runtimeMetadata

• **runtimeMetadata**: *Metadata*

*Defined in [types.ts:207](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L207)*

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Defined in [types.ts:208](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L208)*

___

### `Optional` signer

• **signer**? : *[Signer](_types_.signer.md)*

*Defined in [types.ts:213](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L213)*

___

###  tx

• **tx**: *[SubmittableExtrinsics](_types_.submittableextrinsics.md)‹"rxjs"›*

*Defined in [types.ts:212](https://github.com/polkadot-js/api/blob/587c988/packages/api/src/types.ts#L212)*