[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/types"](../modules/_metadata_types_.md) › [MetadataInterface](_metadata_types_.metadatainterface.md)

# Interface: MetadataInterface <**Modules**>

## Type parameters

▪ **Modules**: *Codec*

## Hierarchy

* Codec

  ↳ **MetadataInterface**

## Implemented by

* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)
* [MetadataV5](../classes/_metadata_v5_metadata_.metadatav5.md)
* [MetadataV6](../classes/_metadata_v6_metadata_.metadatav6.md)
* [MetadataV7](../classes/_metadata_v7_metadata_.metadatav7.md)
* [MetadataV8](../classes/_metadata_v8_metadata_.metadatav8.md)

## Index

### Properties

* [encodedLength](_metadata_types_.metadatainterface.md#encodedlength)
* [hash](_metadata_types_.metadatainterface.md#hash)
* [isEmpty](_metadata_types_.metadatainterface.md#isempty)
* [modules](_metadata_types_.metadatainterface.md#modules)

### Methods

* [eq](_metadata_types_.metadatainterface.md#eq)
* [toHex](_metadata_types_.metadatainterface.md#tohex)
* [toJSON](_metadata_types_.metadatainterface.md#tojson)
* [toRawType](_metadata_types_.metadatainterface.md#torawtype)
* [toString](_metadata_types_.metadatainterface.md#tostring)
* [toU8a](_metadata_types_.metadatainterface.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:77](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:82](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:87](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  modules

• **modules**: *Vec‹Modules›*

*Defined in [Metadata/types.ts:9](https://github.com/polkadot-js/api/blob/a70af20eba/packages/metadata/src/Metadata/types.ts#L9)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:92](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L92)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:97](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L97)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:102](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:107](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:112](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:118](https://github.com/polkadot-js/api/blob/a70af20eba/packages/types/src/types.ts#L118)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
