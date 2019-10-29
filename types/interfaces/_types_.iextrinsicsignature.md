[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IExtrinsicSignature](_types_.iextrinsicsignature.md)

# Interface: IExtrinsicSignature

## Hierarchy

* ExtrinsicSignatureBase

* [Codec](_types_.codec.md)

  ↳ **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicsignature.md#encodedlength)
* [era](_types_.iextrinsicsignature.md#era)
* [hash](_types_.iextrinsicsignature.md#hash)
* [isEmpty](_types_.iextrinsicsignature.md#isempty)
* [isSigned](_types_.iextrinsicsignature.md#issigned)
* [nonce](_types_.iextrinsicsignature.md#nonce)
* [signature](_types_.iextrinsicsignature.md#signature)
* [signer](_types_.iextrinsicsignature.md#signer)
* [tip](_types_.iextrinsicsignature.md#tip)

### Methods

* [addSignature](_types_.iextrinsicsignature.md#addsignature)
* [eq](_types_.iextrinsicsignature.md#eq)
* [sign](_types_.iextrinsicsignature.md#sign)
* [toHex](_types_.iextrinsicsignature.md#tohex)
* [toJSON](_types_.iextrinsicsignature.md#tojson)
* [toRawType](_types_.iextrinsicsignature.md#torawtype)
* [toString](_types_.iextrinsicsignature.md#tostring)
* [toU8a](_types_.iextrinsicsignature.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [types.ts:176](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L176)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types.ts:175](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L175)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from void*

*Defined in [types.ts:177](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L177)*

___

###  signature

• **signature**: *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Inherited from void*

*Defined in [types.ts:178](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L178)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_generic_address_.address.md)*

*Inherited from void*

*Defined in [types.ts:179](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L179)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from void*

*Defined in [types.ts:180](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L180)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_generic_address_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: Uint8Array | string): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:195](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_generic_address_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | Uint8Array &#124; string |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`method`: [Call](../classes/_primitive_generic_call_.call.md), `account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:196](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](../classes/_primitive_generic_call_.call.md) |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L97)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/types.ts#L118)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
