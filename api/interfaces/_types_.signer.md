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

*Defined in [types.ts:256](https://github.com/polkadot-js/api/blob/8379689eaa/packages/api/src/types.ts#L256)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [types.ts:261](https://github.com/polkadot-js/api/blob/8379689eaa/packages/api/src/types.ts#L261)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:266](https://github.com/polkadot-js/api/blob/8379689eaa/packages/api/src/types.ts#L266)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`
