[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/elections/types"](../modules/_interfaces_elections_types_.md) › [Vote](_interfaces_elections_types_.vote.md)

# Interface: Vote

GenericVote

## Hierarchy

  ↳ [Vote](../classes/_primitive_generic_vote_.vote.md)

  ↳ **Vote**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: number

GenericVote

## Index

### Constructors

* [constructor](_interfaces_elections_types_.vote.md#constructor)

### Accessors

* [conviction](_interfaces_elections_types_.vote.md#conviction)
* [encodedLength](_interfaces_elections_types_.vote.md#encodedlength)
* [hash](_interfaces_elections_types_.vote.md#hash)
* [isAye](_interfaces_elections_types_.vote.md#isaye)
* [isEmpty](_interfaces_elections_types_.vote.md#isempty)
* [isNay](_interfaces_elections_types_.vote.md#isnay)
* [length](_interfaces_elections_types_.vote.md#length)

### Methods

* [bitLength](_interfaces_elections_types_.vote.md#bitlength)
* [eq](_interfaces_elections_types_.vote.md#eq)
* [subarray](_interfaces_elections_types_.vote.md#subarray)
* [toHex](_interfaces_elections_types_.vote.md#tohex)
* [toJSON](_interfaces_elections_types_.vote.md#tojson)
* [toRawType](_interfaces_elections_types_.vote.md#torawtype)
* [toString](_interfaces_elections_types_.vote.md#tostring)
* [toU8a](_interfaces_elections_types_.vote.md#tou8a)
* [with](_interfaces_elections_types_.vote.md#static-with)

## Constructors

###  constructor

\+ **new Vote**(`value?`: InputTypes): *[Vote](_interfaces_elections_types_.vote.md)*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[constructor](../classes/_primitive_generic_vote_.vote.md#constructor)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[constructor](../classes/_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/Generic/Vote.ts:33](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Generic/Vote.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | InputTypes |

**Returns:** *[Vote](_interfaces_elections_types_.vote.md)*

## Accessors

###  conviction

• **get conviction**(): *[Conviction](_interfaces_democracy_types_.conviction.md)*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[conviction](../classes/_primitive_generic_vote_.vote.md#conviction)*

*Defined in [primitive/Generic/Vote.ts:79](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Generic/Vote.ts#L79)*

**`description`** returns a V2 conviction

**Returns:** *[Conviction](_interfaces_democracy_types_.conviction.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L37)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[hash](../classes/_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isAye

• **get isAye**(): *boolean*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[isAye](../classes/_primitive_generic_vote_.vote.md#isaye)*

*Defined in [primitive/Generic/Vote.ts:86](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Generic/Vote.ts#L86)*

**`description`** true if the wrapped value is a positive vote

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  isNay

• **get isNay**(): *boolean*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[isNay](../classes/_primitive_generic_vote_.vote.md#isnay)*

*Defined in [primitive/Generic/Vote.ts:93](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Generic/Vote.ts#L93)*

**`description`** true if the wrapped value is a negative vote

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[bitLength](../classes/_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L73)*

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

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L87)*

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

*Defined in [codec/U8a.ts:94](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L94)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[toRawType](../classes/_primitive_generic_vote_.vote.md#torawtype)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[toRawType](../classes/_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/Generic/Vote.ts:100](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Generic/Vote.ts#L100)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:115](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:124](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8a.ts#L124)*

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

*Defined in [codec/U8aFixed.ts:50](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/U8aFixed.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*
