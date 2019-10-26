[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)

# Interface: ExtrinsicPayload

GenericExtrinsicPayload

## Hierarchy

  ↳ [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)

  ↳ **ExtrinsicPayload**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicpayload.md#constructor)

### Accessors

* [blockHash](_interfaces_runtime_types_.extrinsicpayload.md#blockhash)
* [encodedLength](_interfaces_runtime_types_.extrinsicpayload.md#encodedlength)
* [era](_interfaces_runtime_types_.extrinsicpayload.md#era)
* [genesisHash](_interfaces_runtime_types_.extrinsicpayload.md#genesishash)
* [hash](_interfaces_runtime_types_.extrinsicpayload.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicpayload.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicpayload.md#method)
* [nonce](_interfaces_runtime_types_.extrinsicpayload.md#nonce)
* [specVersion](_interfaces_runtime_types_.extrinsicpayload.md#specversion)
* [tip](_interfaces_runtime_types_.extrinsicpayload.md#tip)

### Methods

* [eq](_interfaces_runtime_types_.extrinsicpayload.md#eq)
* [sign](_interfaces_runtime_types_.extrinsicpayload.md#sign)
* [toHex](_interfaces_runtime_types_.extrinsicpayload.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicpayload.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicpayload.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicpayload.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicpayload.md#tou8a)
* [decodeExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md#static-decodeextrinsicpayload)

## Constructors

###  constructor

\+ **new ExtrinsicPayload**(`value`: Partial‹[ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md)› | Uint8Array | string | undefined, `__namedParameters`: object): *[ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[constructor](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Partial‹[ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md)› &#124; Uint8Array &#124; string &#124; undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)*

## Accessors

###  blockHash

• **get blockHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[blockHash](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#blockhash)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:57](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L57)*

**`description`** The block [Hash](_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Base.ts:25](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/codec/Base.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[era](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#era)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:64](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L64)*

**`description`** The [ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[genesisHash](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#genesishash)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:71](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L71)*

**`description`** The genesis block [Hash](_interfaces_runtime_types_.hash.md) the signature applies to

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[U8a](../classes/_codec_u8a_.u8a.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[method](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#method)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:79](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L79)*

**`description`** The [U8a](../classes/_codec_u8a_.u8a.md) contained in the payload

**Returns:** *[U8a](../classes/_codec_u8a_.u8a.md)*

___

###  nonce

• **get nonce**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[nonce](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#nonce)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:86](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L86)*

**`description`** The [Index](_interfaces_runtime_types_.index.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

___

###  specVersion

• **get specVersion**(): *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[specVersion](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#specversion)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:93](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L93)*

**`description`** The specVersion as a [u32](_interfaceregistry_.interfaceregistry.md#u32) for this payload

**Returns:** *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[tip](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tip)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:101](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L101)*

**`description`** The [Balance](_interfaces_runtime_types_.balance.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[eq](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:109](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L109)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](_types_.ikeyringpair.md)): *object*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[sign](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#sign)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:116](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L116)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](_types_.ikeyringpair.md) |

**Returns:** *object*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/Base.ts:53](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/codec/Base.ts#L53)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[toJSON](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:131](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L131)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Base.ts:82](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/codec/Base.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[toString](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:138](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L138)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:75](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/codec/Base.ts#L75)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsicPayload

▸ **decodeExtrinsicPayload**(`value`: [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string | undefined, `version`: number): *ExtrinsicPayloadVx*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[decodeExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#static-decodeextrinsicpayload)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:46](https://github.com/polkadot-js/api/blob/fae67e72ee/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) &#124; [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicPayloadVx*
