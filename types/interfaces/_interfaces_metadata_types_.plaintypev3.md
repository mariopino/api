[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [PlainTypeV3](_interfaces_metadata_types_.plaintypev3.md)

# Interface: PlainTypeV3

Type

## Hierarchy

  ↳ [Type](../classes/_primitive_type_.type.md)

  ↳ **PlainTypeV3**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: string

Type

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.plaintypev3.md#constructor)

### Accessors

* [encodedLength](_interfaces_metadata_types_.plaintypev3.md#encodedlength)
* [hash](_interfaces_metadata_types_.plaintypev3.md#hash)
* [isEmpty](_interfaces_metadata_types_.plaintypev3.md#isempty)
* [length](_interfaces_metadata_types_.plaintypev3.md#length)

### Methods

* [eq](_interfaces_metadata_types_.plaintypev3.md#eq)
* [toHex](_interfaces_metadata_types_.plaintypev3.md#tohex)
* [toJSON](_interfaces_metadata_types_.plaintypev3.md#tojson)
* [toRawType](_interfaces_metadata_types_.plaintypev3.md#torawtype)
* [toString](_interfaces_metadata_types_.plaintypev3.md#tostring)
* [toU8a](_interfaces_metadata_types_.plaintypev3.md#tou8a)

## Constructors

###  constructor

\+ **new PlainTypeV3**(`value`: [Text](../classes/_primitive_text_.text.md) | Uint8Array | string): *[PlainTypeV3](_interfaces_metadata_types_.plaintypev3.md)*

*Inherited from [Type](../classes/_primitive_type_.type.md).[constructor](../classes/_primitive_type_.type.md#constructor)*

*Overrides [Text](../classes/_primitive_text_.text.md).[constructor](../classes/_primitive_text_.text.md#constructor)*

*Defined in [primitive/Type.ts:16](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Type.ts#L16)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Text](../classes/_primitive_text_.text.md) &#124; Uint8Array &#124; string | "" |

**Returns:** *[PlainTypeV3](_interfaces_metadata_types_.plaintypev3.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Type](../classes/_primitive_type_.type.md).[encodedLength](../classes/_primitive_type_.type.md#encodedlength)*

*Overrides [Text](../classes/_primitive_text_.text.md).[encodedLength](../classes/_primitive_text_.text.md#encodedlength)*

*Defined in [primitive/Type.ts:36](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Type.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Text](../classes/_primitive_text_.text.md).[hash](../classes/_primitive_text_.text.md#hash)*

*Defined in [primitive/Text.ts:59](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L59)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](../classes/_primitive_text_.text.md).[isEmpty](../classes/_primitive_text_.text.md#isempty)*

*Defined in [primitive/Text.ts:66](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L66)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](../classes/_primitive_text_.text.md).[length](../classes/_primitive_text_.text.md#length)*

*Overrides void*

*Defined in [primitive/Text.ts:73](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L73)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Text](../classes/_primitive_text_.text.md).[eq](../classes/_primitive_text_.text.md#eq)*

*Defined in [primitive/Text.ts:81](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L81)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toHex](../classes/_primitive_text_.text.md#tohex)*

*Defined in [primitive/Text.ts:90](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L90)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toJSON](../classes/_primitive_text_.text.md#tojson)*

*Defined in [primitive/Text.ts:99](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L99)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Type](../classes/_primitive_type_.type.md).[toRawType](../classes/_primitive_type_.type.md#torawtype)*

*Overrides [Text](../classes/_primitive_text_.text.md).[toRawType](../classes/_primitive_text_.text.md#torawtype)*

*Defined in [primitive/Type.ts:46](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Type.ts#L46)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toString](../classes/_primitive_text_.text.md#tostring)*

*Overrides void*

*Defined in [primitive/Text.ts:113](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L113)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toU8a](../classes/_primitive_text_.text.md#tou8a)*

*Defined in [primitive/Text.ts:122](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/primitive/Text.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
