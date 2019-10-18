[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Extrinsic](_interfaces_runtime_types_.extrinsic.md)

# Interface: Extrinsic

GenericExtrinsic

## Hierarchy

  ↳ [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

  ↳ **Extrinsic**

## Implements

* [Codec](_types_.codec.md)
* [IExtrinsic](_types_.iextrinsic.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsic.md#constructor)

### Accessors

* [args](_interfaces_runtime_types_.extrinsic.md#args)
* [argsDef](_interfaces_runtime_types_.extrinsic.md#argsdef)
* [callIndex](_interfaces_runtime_types_.extrinsic.md#callindex)
* [data](_interfaces_runtime_types_.extrinsic.md#data)
* [encodedLength](_interfaces_runtime_types_.extrinsic.md#encodedlength)
* [era](_interfaces_runtime_types_.extrinsic.md#era)
* [hasOrigin](_interfaces_runtime_types_.extrinsic.md#hasorigin)
* [hash](_interfaces_runtime_types_.extrinsic.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsic.md#isempty)
* [isSigned](_interfaces_runtime_types_.extrinsic.md#issigned)
* [length](_interfaces_runtime_types_.extrinsic.md#length)
* [meta](_interfaces_runtime_types_.extrinsic.md#meta)
* [method](_interfaces_runtime_types_.extrinsic.md#method)
* [nonce](_interfaces_runtime_types_.extrinsic.md#nonce)
* [signature](_interfaces_runtime_types_.extrinsic.md#signature)
* [signer](_interfaces_runtime_types_.extrinsic.md#signer)
* [tip](_interfaces_runtime_types_.extrinsic.md#tip)
* [type](_interfaces_runtime_types_.extrinsic.md#type)
* [version](_interfaces_runtime_types_.extrinsic.md#version)

### Methods

* [addSignature](_interfaces_runtime_types_.extrinsic.md#addsignature)
* [eq](_interfaces_runtime_types_.extrinsic.md#eq)
* [sign](_interfaces_runtime_types_.extrinsic.md#sign)
* [toHex](_interfaces_runtime_types_.extrinsic.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsic.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsic.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsic.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsic.md#tou8a)
* [decodeExtrinsic](_interfaces_runtime_types_.extrinsic.md#static-decodeextrinsic)

## Constructors

###  constructor

\+ **new Extrinsic**(`value`: [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_types_.md#anyu8a) | [Call](_interfaces_runtime_types_.call.md) | undefined, `__namedParameters`: object): *[Extrinsic](_interfaces_runtime_types_.extrinsic.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[constructor](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:49](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; [Call](_interfaces_runtime_types_.call.md) &#124; undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[Extrinsic](_interfaces_runtime_types_.extrinsic.md)*

## Accessors

###  args

• **get args**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[args](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#args)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:116](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L116)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Call](_interfaces_runtime_types_.call.md)

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[argsDef](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#argsdef)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:123](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L123)*

**`description`** The argument definitions, compatible with [Call](_interfaces_runtime_types_.call.md)

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *Uint8Array*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[callIndex](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#callindex)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:130](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L130)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *Uint8Array*

___

###  data

• **get data**(): *Uint8Array*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[data](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#data)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:137](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L137)*

**`description`** The actual data for the Call

**Returns:** *Uint8Array*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[encodedLength](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:151](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L151)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[era](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#era)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:144](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L144)*

**`description`** The era for this extrinsic

**Returns:** *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[hasOrigin](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#hasorigin)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:158](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L158)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[isSigned](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#issigned)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:165](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L165)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[length](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#length)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:172](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L172)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[meta](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#meta)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:179](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L179)*

**`description`** The [FunctionMetadataLatest](_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) that describes the extrinsic

**Returns:** *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

___

###  method

• **get method**(): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[method](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#method)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:186](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L186)*

**`description`** The [Call](_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

___

###  nonce

• **get nonce**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[nonce](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#nonce)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:193](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L193)*

**`description`** The nonce for this extrinsic

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

___

###  signature

• **get signature**(): *[IHash](_types_.ihash.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[signature](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#signature)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:200](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L200)*

**`description`** The [[ExtrinsicSignature]]

**Returns:** *[IHash](_types_.ihash.md)*

___

###  signer

• **get signer**(): *[Address](_interfaces_runtime_types_.address.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[signer](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#signer)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:207](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L207)*

**`description`** The [Address](_interfaces_runtime_types_.address.md) that signed

**Returns:** *[Address](_interfaces_runtime_types_.address.md)*

___

###  tip

• **get tip**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[tip](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tip)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:214](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L214)*

**`description`** Forwards compat

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

___

###  type

• **get type**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[type](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#type)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:221](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L221)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[version](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#version)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:228](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L228)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[addSignature](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#addsignature)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:235](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L235)*

**`description`** Injects an already-generated signature into the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Base.ts:46](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/codec/Base.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[sign](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#sign)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:244](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L244)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toHex](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:253](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L253)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toJSON](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:260](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L260)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toRawType](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:267](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L267)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:67](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toU8a](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:275](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L275)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value`: [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_types_.md#anyu8a) | [Call](_interfaces_runtime_types_.call.md) | undefined, `version`: number): *ExtrinsicVx | [ExtrinsicUnknown](_interfaces_runtime_types_.extrinsicunknown.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[decodeExtrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#static-decodeextrinsic)*

*Defined in [primitive/Extrinsic/Extrinsic.ts:67](https://github.com/polkadot-js/api/blob/e49427ac61/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L67)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; [Call](_interfaces_runtime_types_.call.md) &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicVx | [ExtrinsicUnknown](_interfaces_runtime_types_.extrinsicunknown.md)*
