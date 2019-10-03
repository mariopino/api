[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [SignerPayloadJSON](_types_.signerpayloadjson.md)

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_types_.signerpayloadjson.md#address)
* [blockHash](_types_.signerpayloadjson.md#blockhash)
* [blockNumber](_types_.signerpayloadjson.md#blocknumber)
* [era](_types_.signerpayloadjson.md#era)
* [genesisHash](_types_.signerpayloadjson.md#genesishash)
* [method](_types_.signerpayloadjson.md#method)
* [nonce](_types_.signerpayloadjson.md#nonce)
* [specVersion](_types_.signerpayloadjson.md#specversion)
* [tip](_types_.signerpayloadjson.md#tip)
* [version](_types_.signerpayloadjson.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:229](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L229)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [types.ts:234](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L234)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [types.ts:239](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L239)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [types.ts:244](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L244)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [types.ts:249](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L249)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [types.ts:254](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L254)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [types.ts:259](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L259)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [types.ts:264](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L264)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [types.ts:269](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L269)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [types.ts:274](https://github.com/polkadot-js/api/blob/f145fe7/packages/types/src/types.ts#L274)*

**`description`** The version of the extrinsic we are dealing with
