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

*Defined in [types.ts:309](https://github.com/polkadot-js/api/blob/096aa83/packages/api/src/types.ts#L309)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [types.ts:314](https://github.com/polkadot-js/api/blob/096aa83/packages/api/src/types.ts#L314)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:319](https://github.com/polkadot-js/api/blob/096aa83/packages/api/src/types.ts#L319)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`