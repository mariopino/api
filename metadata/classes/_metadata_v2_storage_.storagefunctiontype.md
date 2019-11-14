[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v2/Storage"](../modules/_metadata_v2_storage_.md) › [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

# Class: StorageFunctionType

## Hierarchy

* Enum

  ↳ **StorageFunctionType**

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_v2_storage_.storagefunctiontype.md#constructor)

### Accessors

* [asMap](_metadata_v2_storage_.storagefunctiontype.md#asmap)
* [asType](_metadata_v2_storage_.storagefunctiontype.md#astype)
* [encodedLength](_metadata_v2_storage_.storagefunctiontype.md#encodedlength)
* [hash](_metadata_v2_storage_.storagefunctiontype.md#hash)
* [index](_metadata_v2_storage_.storagefunctiontype.md#index)
* [isEmpty](_metadata_v2_storage_.storagefunctiontype.md#isempty)
* [isMap](_metadata_v2_storage_.storagefunctiontype.md#ismap)
* [isNone](_metadata_v2_storage_.storagefunctiontype.md#isnone)
* [isNull](_metadata_v2_storage_.storagefunctiontype.md#isnull)
* [isPlainType](_metadata_v2_storage_.storagefunctiontype.md#isplaintype)
* [type](_metadata_v2_storage_.storagefunctiontype.md#type)
* [value](_metadata_v2_storage_.storagefunctiontype.md#value)

### Methods

* [eq](_metadata_v2_storage_.storagefunctiontype.md#eq)
* [toHex](_metadata_v2_storage_.storagefunctiontype.md#tohex)
* [toJSON](_metadata_v2_storage_.storagefunctiontype.md#tojson)
* [toNumber](_metadata_v2_storage_.storagefunctiontype.md#tonumber)
* [toRawType](_metadata_v2_storage_.storagefunctiontype.md#torawtype)
* [toString](_metadata_v2_storage_.storagefunctiontype.md#tostring)
* [toU8a](_metadata_v2_storage_.storagefunctiontype.md#tou8a)
* [with](_metadata_v2_storage_.storagefunctiontype.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionType**(`value?`: any, `index?`: undefined | number): *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

*Overrides void*

*Defined in [Metadata/v2/Storage.ts:16](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/metadata/src/Metadata/v2/Storage.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

## Accessors

###  asMap

• **get asMap**(): *MapTypeV2*

*Defined in [Metadata/v2/Storage.ts:27](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/metadata/src/Metadata/v2/Storage.ts#L27)*

**`description`** The value as a mapped value

**Returns:** *MapTypeV2*

___

###  asType

• **get asType**(): *PlainTypeV2*

*Defined in [Metadata/v2/Storage.ts:36](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/metadata/src/Metadata/v2/Storage.ts#L36)*

**`description`** The value as a [Type](_metadata_v5_storage_.storagefunctionmetadata.md#type) value

**Returns:** *PlainTypeV2*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:32](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  index

• **get index**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:39](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isMap

• **get isMap**(): *boolean*

*Defined in [Metadata/v2/Storage.ts:45](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/metadata/src/Metadata/v2/Storage.ts#L45)*

**`description`** `true` if the storage entry is a map

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [[Null]] type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [[Null]] type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isPlainType

• **get isPlainType**(): *boolean*

*Defined in [Metadata/v2/Storage.ts:52](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/metadata/src/Metadata/v2/Storage.ts#L52)*

**`description`** `true` if the storage entry is a plain type

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *Codec*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *Codec*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides void*

*Defined in [Metadata/v2/Storage.ts:59](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/metadata/src/Metadata/v2/Storage.ts#L59)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, InterfaceTypes | Constructor› | string[]): *EnumConstructor‹Enum›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, InterfaceTypes &#124; Constructor› &#124; string[] |

**Returns:** *EnumConstructor‹Enum›*
