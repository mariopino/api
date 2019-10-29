[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [PhantomData](_interfaces_runtime_types_.phantomdata.md)

# Interface: PhantomData

Null

## Hierarchy

* [Null](../classes/_primitive_null_.null.md)

  ↳ **PhantomData**

## Implements

* [Codec](_types_.codec.md)

## Index

### Accessors

* [encodedLength](_interfaces_runtime_types_.phantomdata.md#encodedlength)
* [hash](_interfaces_runtime_types_.phantomdata.md#hash)
* [isEmpty](_interfaces_runtime_types_.phantomdata.md#isempty)

### Methods

* [eq](_interfaces_runtime_types_.phantomdata.md#eq)
* [toHex](_interfaces_runtime_types_.phantomdata.md#tohex)
* [toJSON](_interfaces_runtime_types_.phantomdata.md#tojson)
* [toRawType](_interfaces_runtime_types_.phantomdata.md#torawtype)
* [toString](_interfaces_runtime_types_.phantomdata.md#tostring)
* [toU8a](_interfaces_runtime_types_.phantomdata.md#tou8a)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](../classes/_primitive_null_.null.md).[encodedLength](../classes/_primitive_null_.null.md#encodedlength)*

*Defined in [primitive/Null.ts:18](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L18)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Null](../classes/_primitive_null_.null.md).[hash](../classes/_primitive_null_.null.md#hash)*

*Defined in [primitive/Null.ts:25](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L25)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](../classes/_primitive_null_.null.md).[isEmpty](../classes/_primitive_null_.null.md#isempty)*

*Defined in [primitive/Null.ts:32](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L32)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Null](../classes/_primitive_null_.null.md).[eq](../classes/_primitive_null_.null.md#eq)*

*Defined in [primitive/Null.ts:39](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L39)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toHex](../classes/_primitive_null_.null.md#tohex)*

*Defined in [primitive/Null.ts:46](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L46)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toJSON](../classes/_primitive_null_.null.md#tojson)*

*Defined in [primitive/Null.ts:53](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L53)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toRawType](../classes/_primitive_null_.null.md#torawtype)*

*Defined in [primitive/Null.ts:60](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L60)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toString](../classes/_primitive_null_.null.md#tostring)*

*Defined in [primitive/Null.ts:67](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toU8a](../classes/_primitive_null_.null.md#tou8a)*

*Defined in [primitive/Null.ts:76](https://github.com/polkadot-js/api/blob/a53c924248/packages/types/src/primitive/Null.ts#L76)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
