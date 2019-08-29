> # Interface: Signer

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

*Defined in [types.ts:307](https://github.com/polkadot-js/api/blob/d905b4f/packages/api/src/types.ts#L307)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [types.ts:312](https://github.com/polkadot-js/api/blob/d905b4f/packages/api/src/types.ts#L312)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:317](https://github.com/polkadot-js/api/blob/d905b4f/packages/api/src/types.ts#L317)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`