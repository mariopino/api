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

*Defined in [types.ts:317](https://github.com/polkadot-js/api/blob/6ec3815/packages/api/src/types.ts#L317)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [types.ts:322](https://github.com/polkadot-js/api/blob/6ec3815/packages/api/src/types.ts#L322)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:327](https://github.com/polkadot-js/api/blob/6ec3815/packages/api/src/types.ts#L327)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`