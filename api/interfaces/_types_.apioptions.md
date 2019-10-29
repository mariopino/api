[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ApiOptions](_types_.apioptions.md)

# Interface: ApiOptions

## Hierarchy

* **ApiOptions**

## Index

### Properties

* [derives](_types_.apioptions.md#optional-derives)
* [metadata](_types_.apioptions.md#optional-metadata)
* [provider](_types_.apioptions.md#optional-provider)
* [rpc](_types_.apioptions.md#optional-rpc)
* [signer](_types_.apioptions.md#optional-signer)
* [source](_types_.apioptions.md#optional-source)
* [types](_types_.apioptions.md#optional-types)
* [typesChain](_types_.apioptions.md#optional-typeschain)
* [typesSpec](_types_.apioptions.md#optional-typesspec)

## Properties

### `Optional` derives

• **derives**? : *DeriveCustom*

*Defined in [types.ts:178](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L178)*

**`description`** Add custom derives to be injected

___

### `Optional` metadata

• **metadata**? : *Record‹string, string›*

*Defined in [types.ts:183](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L183)*

**`description`** prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain

___

### `Optional` provider

• **provider**? : *ProviderInterface*

*Defined in [types.ts:188](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L188)*

**`description`** Transport Provider from rpc-provider. If not specified, it will default to
connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___

### `Optional` rpc

• **rpc**? : *UserRpc*

*Defined in [types.ts:192](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L192)*

**`description`** User-defined RPC methods

___

### `Optional` signer

• **signer**? : *[Signer](_types_.signer.md)*

*Defined in [types.ts:196](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L196)*

**`description`** An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___

### `Optional` source

• **source**? : *ApiBase‹any›*

*Defined in [types.ts:200](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L200)*

**`description`** The source object to use for runtime information (only used when cloning)

___

### `Optional` types

• **types**? : *RegistryTypes*

*Defined in [types.ts:205](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L205)*

**`description`** Additional types used by runtime modules. This is nessusary if the runtime modules
uses types not available in the base Substrate runtime.

___

### `Optional` typesChain

• **typesChain**? : *Record‹string, RegistryTypes›*

*Defined in [types.ts:209](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L209)*

**`description`** Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`

___

### `Optional` typesSpec

• **typesSpec**? : *Record‹string, RegistryTypes›*

*Defined in [types.ts:213](https://github.com/polkadot-js/api/blob/f533f51003/packages/api/src/types.ts#L213)*

**`description`** Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
