[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v7/Metadata"](../modules/_metadata_v7_metadata_.md) › [MetadataV7](_metadata_v7_metadata_.metadatav7.md)

# Class: MetadataV7 <**S, T, V, E**>

**`name`** MetadataV7

**`description`** 
The runtime metadata as a decoded structure

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Struct

  ↳ **MetadataV7**

## Implements

* Codec
* [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)‹[ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)›

## Index

### Constructors

* [constructor](_metadata_v7_metadata_.metadatav7.md#constructor)

### Properties

* [__@toStringTag](_metadata_v7_metadata_.metadatav7.md#__@tostringtag)
* [size](_metadata_v7_metadata_.metadatav7.md#size)

### Accessors

* [Type](_metadata_v7_metadata_.metadatav7.md#type)
* [encodedLength](_metadata_v7_metadata_.metadatav7.md#encodedlength)
* [hash](_metadata_v7_metadata_.metadatav7.md#hash)
* [isEmpty](_metadata_v7_metadata_.metadatav7.md#isempty)
* [modules](_metadata_v7_metadata_.metadatav7.md#modules)

### Methods

* [__@iterator](_metadata_v7_metadata_.metadatav7.md#__@iterator)
* [clear](_metadata_v7_metadata_.metadatav7.md#clear)
* [delete](_metadata_v7_metadata_.metadatav7.md#delete)
* [entries](_metadata_v7_metadata_.metadatav7.md#entries)
* [eq](_metadata_v7_metadata_.metadatav7.md#eq)
* [forEach](_metadata_v7_metadata_.metadatav7.md#foreach)
* [get](_metadata_v7_metadata_.metadatav7.md#get)
* [getAtIndex](_metadata_v7_metadata_.metadatav7.md#getatindex)
* [has](_metadata_v7_metadata_.metadatav7.md#has)
* [keys](_metadata_v7_metadata_.metadatav7.md#keys)
* [set](_metadata_v7_metadata_.metadatav7.md#set)
* [toArray](_metadata_v7_metadata_.metadatav7.md#toarray)
* [toHex](_metadata_v7_metadata_.metadatav7.md#tohex)
* [toJSON](_metadata_v7_metadata_.metadatav7.md#tojson)
* [toRawType](_metadata_v7_metadata_.metadatav7.md#torawtype)
* [toString](_metadata_v7_metadata_.metadatav7.md#tostring)
* [toU8a](_metadata_v7_metadata_.metadatav7.md#tou8a)
* [values](_metadata_v7_metadata_.metadatav7.md#values)
* [typesToMap](_metadata_v7_metadata_.metadatav7.md#static-typestomap)
* [with](_metadata_v7_metadata_.metadatav7.md#static-with)

## Constructors

###  constructor

\+ **new MetadataV7**(`value?`: any): *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

*Overrides void*

*Defined in [Metadata/v7/Metadata.ts:71](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Metadata/v7/Metadata.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modules

• **get modules**(): *Vec‹[ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)›*

*Defined in [Metadata/v7/Metadata.ts:81](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Metadata/v7/Metadata.ts#L81)*

**`description`** The associated modules for this structure

**Returns:** *Vec‹[ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)›*

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹keyof S›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹keyof S›*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹Codec›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹Codec›*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
