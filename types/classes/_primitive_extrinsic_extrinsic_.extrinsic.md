[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/Extrinsic"](../modules/_primitive_extrinsic_extrinsic_.md) › [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

# Class: Extrinsic

**`name`** Extrinsic

**`description`** 
Representation of an Extrinsic in the system. It contains the actual call,
(optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:
- signed, to create a transaction
- left as is, to create an inherent

## Hierarchy

* [Base](_codec_base_.base.md)‹ExtrinsicVx | [ExtrinsicUnknown](../interfaces/_interfaces_runtime_types_.extrinsicunknown.md)›

  ↳ **Extrinsic**

  ↳ [Extrinsic](../interfaces/_interfaces_runtime_types_.extrinsic.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsic_.extrinsic.md#constructor)

### Accessors

* [args](_primitive_extrinsic_extrinsic_.extrinsic.md#args)
* [argsDef](_primitive_extrinsic_extrinsic_.extrinsic.md#argsdef)
* [callIndex](_primitive_extrinsic_extrinsic_.extrinsic.md#callindex)
* [data](_primitive_extrinsic_extrinsic_.extrinsic.md#data)
* [encodedLength](_primitive_extrinsic_extrinsic_.extrinsic.md#encodedlength)
* [era](_primitive_extrinsic_extrinsic_.extrinsic.md#era)
* [hasOrigin](_primitive_extrinsic_extrinsic_.extrinsic.md#hasorigin)
* [hash](_primitive_extrinsic_extrinsic_.extrinsic.md#hash)
* [isEmpty](_primitive_extrinsic_extrinsic_.extrinsic.md#isempty)
* [isSigned](_primitive_extrinsic_extrinsic_.extrinsic.md#issigned)
* [length](_primitive_extrinsic_extrinsic_.extrinsic.md#length)
* [meta](_primitive_extrinsic_extrinsic_.extrinsic.md#meta)
* [method](_primitive_extrinsic_extrinsic_.extrinsic.md#method)
* [nonce](_primitive_extrinsic_extrinsic_.extrinsic.md#nonce)
* [signature](_primitive_extrinsic_extrinsic_.extrinsic.md#signature)
* [signer](_primitive_extrinsic_extrinsic_.extrinsic.md#signer)
* [tip](_primitive_extrinsic_extrinsic_.extrinsic.md#tip)
* [type](_primitive_extrinsic_extrinsic_.extrinsic.md#type)
* [version](_primitive_extrinsic_extrinsic_.extrinsic.md#version)

### Methods

* [addSignature](_primitive_extrinsic_extrinsic_.extrinsic.md#addsignature)
* [eq](_primitive_extrinsic_extrinsic_.extrinsic.md#eq)
* [sign](_primitive_extrinsic_extrinsic_.extrinsic.md#sign)
* [toHex](_primitive_extrinsic_extrinsic_.extrinsic.md#tohex)
* [toJSON](_primitive_extrinsic_extrinsic_.extrinsic.md#tojson)
* [toRawType](_primitive_extrinsic_extrinsic_.extrinsic.md#torawtype)
* [toString](_primitive_extrinsic_extrinsic_.extrinsic.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsic_.extrinsic.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md#static-decodeextrinsic)

## Constructors

###  constructor

\+ **new Extrinsic**(`value`: [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_types_.md#anyu8a) | [Call](../interfaces/_interfaces_runtime_types_.call.md) | undefined, `__namedParameters`: object): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:49](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; [Call](../interfaces/_interfaces_runtime_types_.call.md) &#124; undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

## Accessors

###  args

• **get args**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [primitive/Extrinsic/Extrinsic.ts:116](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L116)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Call](../interfaces/_interfaces_runtime_types_.call.md)

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:123](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L123)*

**`description`** The argument definitions, compatible with [Call](../interfaces/_interfaces_runtime_types_.call.md)

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *Uint8Array*

*Defined in [primitive/Extrinsic/Extrinsic.ts:130](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L130)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *Uint8Array*

___

###  data

• **get data**(): *Uint8Array*

*Defined in [primitive/Extrinsic/Extrinsic.ts:137](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L137)*

**`description`** The actual data for the Call

**Returns:** *Uint8Array*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:151](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L151)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:144](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L144)*

**`description`** The era for this extrinsic

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [primitive/Extrinsic/Extrinsic.ts:158](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L158)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [primitive/Extrinsic/Extrinsic.ts:165](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L165)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Defined in [primitive/Extrinsic/Extrinsic.ts:172](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L172)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *[FunctionMetadataLatest](../interfaces/_interfaces_metadata_types_.functionmetadatalatest.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:179](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L179)*

**`description`** The [FunctionMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) that describes the extrinsic

**Returns:** *[FunctionMetadataLatest](../interfaces/_interfaces_metadata_types_.functionmetadatalatest.md)*

___

###  method

• **get method**(): *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:186](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L186)*

**`description`** The [Call](../interfaces/_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

*Defined in [primitive/Extrinsic/Extrinsic.ts:193](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L193)*

**`description`** The nonce for this extrinsic

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

___

###  signature

• **get signature**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:200](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L200)*

**`description`** The [[ExtrinsicSignature]]

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  signer

• **get signer**(): *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:207](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L207)*

**`description`** The [Address](_primitive_generic_address_.address.md) that signed

**Returns:** *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

*Defined in [primitive/Extrinsic/Extrinsic.ts:214](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L214)*

**`description`** Forwards compat

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

___

###  type

• **get type**(): *number*

*Defined in [primitive/Extrinsic/Extrinsic.ts:221](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L221)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Defined in [primitive/Extrinsic/Extrinsic.ts:228](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L228)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../interfaces/_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:235](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L235)*

**`description`** Injects an already-generated signature into the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../interfaces/_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Inherited from [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Base.ts:46](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/codec/Base.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:244](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L244)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:253](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L253)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:260](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L260)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:267](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L267)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:67](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:275](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L275)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value`: [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_types_.md#anyu8a) | [Call](../interfaces/_interfaces_runtime_types_.call.md) | undefined, `version`: number): *ExtrinsicVx | [ExtrinsicUnknown](../interfaces/_interfaces_runtime_types_.extrinsicunknown.md)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:67](https://github.com/polkadot-js/api/blob/30f62f4024/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L67)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; [Call](../interfaces/_interfaces_runtime_types_.call.md) &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicVx | [ExtrinsicUnknown](../interfaces/_interfaces_runtime_types_.extrinsicunknown.md)*
