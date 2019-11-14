[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/types"](../modules/_decorated_types_.md) › [ConstantCodec](_decorated_types_.constantcodec.md)

# Interface: ConstantCodec

## Hierarchy

* Codec

  ↳ **ConstantCodec**

## Index

### Properties

* [encodedLength](_decorated_types_.constantcodec.md#encodedlength)
* [hash](_decorated_types_.constantcodec.md#hash)
* [isEmpty](_decorated_types_.constantcodec.md#isempty)
* [meta](_decorated_types_.constantcodec.md#meta)

### Methods

* [eq](_decorated_types_.constantcodec.md#eq)
* [toHex](_decorated_types_.constantcodec.md#tohex)
* [toJSON](_decorated_types_.constantcodec.md#tojson)
* [toRawType](_decorated_types_.constantcodec.md#torawtype)
* [toString](_decorated_types_.constantcodec.md#tostring)
* [toU8a](_decorated_types_.constantcodec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:77](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:82](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:87](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *ModuleConstantMetadataLatest*

*Defined in [Decorated/types.ts:10](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/metadata/src/Decorated/types.ts#L10)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:92](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:97](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L97)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:102](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:107](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:112](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:118](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/types.ts#L118)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
