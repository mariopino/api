[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/contracts/types"](../modules/_interfaces_contracts_types_.md) › [TombstoneContractInfo](_interfaces_contracts_types_.tombstonecontractinfo.md)

# Interface: TombstoneContractInfo

Hash

## Hierarchy

  ↳ [Hash](_interfaces_runtime_types_.hash.md)

  ↳ **TombstoneContractInfo**

## Implements

* [Codec](_types_.codec.md)
* [IHash](_types_.ihash.md)

## Indexable

* \[ **index**: *number*\]: number

Hash

## Index

### Constructors

* [constructor](_interfaces_contracts_types_.tombstonecontractinfo.md#constructor)

### Accessors

* [encodedLength](_interfaces_contracts_types_.tombstonecontractinfo.md#encodedlength)
* [hash](_interfaces_contracts_types_.tombstonecontractinfo.md#hash)
* [isEmpty](_interfaces_contracts_types_.tombstonecontractinfo.md#isempty)
* [length](_interfaces_contracts_types_.tombstonecontractinfo.md#length)

### Methods

* [bitLength](_interfaces_contracts_types_.tombstonecontractinfo.md#bitlength)
* [eq](_interfaces_contracts_types_.tombstonecontractinfo.md#eq)
* [subarray](_interfaces_contracts_types_.tombstonecontractinfo.md#subarray)
* [toHex](_interfaces_contracts_types_.tombstonecontractinfo.md#tohex)
* [toJSON](_interfaces_contracts_types_.tombstonecontractinfo.md#tojson)
* [toRawType](_interfaces_contracts_types_.tombstonecontractinfo.md#torawtype)
* [toString](_interfaces_contracts_types_.tombstonecontractinfo.md#tostring)
* [toU8a](_interfaces_contracts_types_.tombstonecontractinfo.md#tou8a)
* [with](_interfaces_contracts_types_.tombstonecontractinfo.md#static-with)

## Constructors

###  constructor

\+ **new TombstoneContractInfo**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[TombstoneContractInfo](_interfaces_contracts_types_.tombstonecontractinfo.md)*

*Inherited from [H256](../classes/_primitive_h256_.h256.md).[constructor](../classes/_primitive_h256_.h256.md#constructor)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[constructor](../classes/_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/H256.ts:15](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/primitive/H256.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[TombstoneContractInfo](_interfaces_contracts_types_.tombstonecontractinfo.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L37)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[hash](../classes/_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[bitLength](../classes/_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L73)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[subarray](../classes/_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L87)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *Uint8Array*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toHex](../classes/_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:94](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L94)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [H256](../classes/_primitive_h256_.h256.md).[toRawType](../classes/_primitive_h256_.h256.md#torawtype)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[toRawType](../classes/_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/H256.ts:23](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/primitive/H256.ts#L23)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:115](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:124](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8a.ts#L124)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[with](../classes/_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [codec/U8aFixed.ts:50](https://github.com/polkadot-js/api/blob/155fd0f8b1/packages/types/src/codec/U8aFixed.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*
