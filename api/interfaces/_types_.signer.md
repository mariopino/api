[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Signer](_types_.signer.md)

# Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [signPayload](_types_.signer.md#optional-signpayload)
* [signRaw](_types_.signer.md#optional-signraw)
* [update](_types_.signer.md#optional-update)

## Properties

### `Optional` signPayload

• **signPayload**? : *undefined | function*

*Defined in [types.ts:263](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L263)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [types.ts:268](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L268)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:273](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api/src/types.ts#L273)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`
