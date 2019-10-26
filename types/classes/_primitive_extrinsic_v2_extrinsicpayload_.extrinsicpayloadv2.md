[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v2/ExtrinsicPayload"](../modules/_primitive_extrinsic_v2_extrinsicpayload_.md) › [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)

# Class: ExtrinsicPayloadV2 <**S, T, V, E**>

**`name`** ExtrinsicPayloadV2

**`description`** 
A signing payload for an [Extrinsic](../interfaces/_interfaces_runtime_types_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV2**

  ↳ [ExtrinsicPayloadV2](../interfaces/_interfaces_runtime_types_.extrinsicpayloadv2.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#type)
* [blockHash](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#blockhash)
* [encodedLength](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#encodedlength)
* [era](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#era)
* [hash](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#hash)
* [isEmpty](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#isempty)
* [method](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#method)
* [nonce](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#nonce)
* [tip](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tip)

### Methods

* [eq](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#eq)
* [get](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#getatindex)
* [sign](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#sign)
* [toArray](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#toarray)
* [toHex](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#torawtype)
* [toString](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tou8a)
* [typesToMap](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#static-typestomap)
* [with](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV2**(`value?`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:42](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:50](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L50)*

**`description`** The block [Hash](../interfaces/_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:57](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L57)*

**`description`** The [ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:64](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L64)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:71](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L71)*

**`description`** The [Index](../interfaces/_interfaces_runtime_types_.index.md)

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:78](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L78)*

**`description`** The tip [Balance](../interfaces/_interfaces_runtime_types_.balance.md)

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *Uint8Array*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:85](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L85)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |

**Returns:** *Uint8Array*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/6e96fd6a55/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
