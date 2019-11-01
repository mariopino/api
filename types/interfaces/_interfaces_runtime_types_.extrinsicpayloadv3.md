[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicPayloadV3](_interfaces_runtime_types_.extrinsicpayloadv3.md)

# Interface: ExtrinsicPayloadV3 <**S, T, V, E**>

GenericExtrinsicPayloadV3

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

  ↳ **ExtrinsicPayloadV3**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicpayloadv3.md#constructor)

### Accessors

* [Type](_interfaces_runtime_types_.extrinsicpayloadv3.md#type)
* [blockHash](_interfaces_runtime_types_.extrinsicpayloadv3.md#blockhash)
* [encodedLength](_interfaces_runtime_types_.extrinsicpayloadv3.md#encodedlength)
* [era](_interfaces_runtime_types_.extrinsicpayloadv3.md#era)
* [genesisHash](_interfaces_runtime_types_.extrinsicpayloadv3.md#genesishash)
* [hash](_interfaces_runtime_types_.extrinsicpayloadv3.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicpayloadv3.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicpayloadv3.md#method)
* [nonce](_interfaces_runtime_types_.extrinsicpayloadv3.md#nonce)
* [specVersion](_interfaces_runtime_types_.extrinsicpayloadv3.md#specversion)
* [tip](_interfaces_runtime_types_.extrinsicpayloadv3.md#tip)

### Methods

* [eq](_interfaces_runtime_types_.extrinsicpayloadv3.md#eq)
* [get](_interfaces_runtime_types_.extrinsicpayloadv3.md#get)
* [getAtIndex](_interfaces_runtime_types_.extrinsicpayloadv3.md#getatindex)
* [sign](_interfaces_runtime_types_.extrinsicpayloadv3.md#sign)
* [toArray](_interfaces_runtime_types_.extrinsicpayloadv3.md#toarray)
* [toHex](_interfaces_runtime_types_.extrinsicpayloadv3.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicpayloadv3.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicpayloadv3.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicpayloadv3.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicpayloadv3.md#tou8a)
* [typesToMap](_interfaces_runtime_types_.extrinsicpayloadv3.md#static-typestomap)
* [with](_interfaces_runtime_types_.extrinsicpayloadv3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV3**(`value?`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicPayloadV3](_interfaces_runtime_types_.extrinsicpayloadv3.md)*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[constructor](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:40](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicPayloadV3](_interfaces_runtime_types_.extrinsicpayloadv3.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[blockHash](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#blockhash)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:48](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L48)*

**`description`** The block [Hash](_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[era](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#era)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:55](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L55)*

**`description`** The [ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[genesisHash](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#genesishash)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:62](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L62)*

**`description`** The genesis [Hash](_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[method](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#method)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:69](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L69)*

**`description`** The [Bytes](../classes/_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](../classes/_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[nonce](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#nonce)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:76](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L76)*

**`description`** The [Index](_interfaces_runtime_types_.index.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

___

###  specVersion

• **get specVersion**(): *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[specVersion](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#specversion)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:83](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L83)*

**`description`** The specVersion for this signature

**Returns:** *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[tip](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tip)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:90](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L90)*

**`description`** The tip [Balance](_interfaces_runtime_types_.balance.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](_types_.ikeyringpair.md)): *Uint8Array*

*Inherited from [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md).[sign](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#sign)*

*Defined in [primitive/Extrinsic/v3/ExtrinsicPayload.ts:97](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L97)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](_types_.ikeyringpair.md) |

**Returns:** *Uint8Array*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/2c44b5ca8a/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
