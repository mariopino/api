[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v5/Metadata"](../modules/_metadata_v5_metadata_.md) › [ModuleMetadataV5](_metadata_v5_metadata_.modulemetadatav5.md)

# Class: ModuleMetadataV5 <**S, T, V, E**>

**`name`** ModuleMetadataV5

**`description`** 
The definition of a module in the system

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Struct

  ↳ **ModuleMetadataV5**

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_v5_metadata_.modulemetadatav5.md#constructor)

### Properties

* [__@toStringTag](_metadata_v5_metadata_.modulemetadatav5.md#__@tostringtag)
* [size](_metadata_v5_metadata_.modulemetadatav5.md#size)

### Accessors

* [Type](_metadata_v5_metadata_.modulemetadatav5.md#type)
* [calls](_metadata_v5_metadata_.modulemetadatav5.md#calls)
* [encodedLength](_metadata_v5_metadata_.modulemetadatav5.md#encodedlength)
* [events](_metadata_v5_metadata_.modulemetadatav5.md#events)
* [hash](_metadata_v5_metadata_.modulemetadatav5.md#hash)
* [isEmpty](_metadata_v5_metadata_.modulemetadatav5.md#isempty)
* [name](_metadata_v5_metadata_.modulemetadatav5.md#name)
* [prefix](_metadata_v5_metadata_.modulemetadatav5.md#prefix)
* [storage](_metadata_v5_metadata_.modulemetadatav5.md#storage)

### Methods

* [__@iterator](_metadata_v5_metadata_.modulemetadatav5.md#__@iterator)
* [clear](_metadata_v5_metadata_.modulemetadatav5.md#clear)
* [delete](_metadata_v5_metadata_.modulemetadatav5.md#delete)
* [entries](_metadata_v5_metadata_.modulemetadatav5.md#entries)
* [eq](_metadata_v5_metadata_.modulemetadatav5.md#eq)
* [forEach](_metadata_v5_metadata_.modulemetadatav5.md#foreach)
* [get](_metadata_v5_metadata_.modulemetadatav5.md#get)
* [getAtIndex](_metadata_v5_metadata_.modulemetadatav5.md#getatindex)
* [has](_metadata_v5_metadata_.modulemetadatav5.md#has)
* [keys](_metadata_v5_metadata_.modulemetadatav5.md#keys)
* [set](_metadata_v5_metadata_.modulemetadatav5.md#set)
* [toArray](_metadata_v5_metadata_.modulemetadatav5.md#toarray)
* [toHex](_metadata_v5_metadata_.modulemetadatav5.md#tohex)
* [toJSON](_metadata_v5_metadata_.modulemetadatav5.md#tojson)
* [toRawType](_metadata_v5_metadata_.modulemetadatav5.md#torawtype)
* [toString](_metadata_v5_metadata_.modulemetadatav5.md#tostring)
* [toU8a](_metadata_v5_metadata_.modulemetadatav5.md#tou8a)
* [values](_metadata_v5_metadata_.modulemetadatav5.md#values)
* [typesToMap](_metadata_v5_metadata_.modulemetadatav5.md#static-typestomap)
* [with](_metadata_v5_metadata_.modulemetadatav5.md#static-with)

## Constructors

###  constructor

\+ **new ModuleMetadataV5**(`value?`: any): *[ModuleMetadataV5](_metadata_v5_metadata_.modulemetadatav5.md)*

*Overrides void*

*Defined in [Metadata/v5/Metadata.ts:19](https://github.com/polkadot-js/api/blob/0a27f63423/packages/metadata/src/Metadata/v5/Metadata.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[ModuleMetadataV5](_metadata_v5_metadata_.modulemetadatav5.md)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  calls

• **get calls**(): *Option‹Vec‹FunctionMetadataV5››*

*Defined in [Metadata/v5/Metadata.ts:33](https://github.com/polkadot-js/api/blob/0a27f63423/packages/metadata/src/Metadata/v5/Metadata.ts#L33)*

**`description`** the module calls

**Returns:** *Option‹Vec‹FunctionMetadataV5››*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  events

• **get events**(): *Option‹Vec‹EventMetadataV5››*

*Defined in [Metadata/v5/Metadata.ts:40](https://github.com/polkadot-js/api/blob/0a27f63423/packages/metadata/src/Metadata/v5/Metadata.ts#L40)*

**`description`** the module events

**Returns:** *Option‹Vec‹EventMetadataV5››*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  name

• **get name**(): *Text*

*Defined in [Metadata/v5/Metadata.ts:47](https://github.com/polkadot-js/api/blob/0a27f63423/packages/metadata/src/Metadata/v5/Metadata.ts#L47)*

**`description`** the module name

**Returns:** *Text*

___

###  prefix

• **get prefix**(): *Text*

*Defined in [Metadata/v5/Metadata.ts:54](https://github.com/polkadot-js/api/blob/0a27f63423/packages/metadata/src/Metadata/v5/Metadata.ts#L54)*

**`description`** the module prefix

**Returns:** *Text*

___

###  storage

• **get storage**(): *Option‹Vec‹[StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)››*

*Defined in [Metadata/v5/Metadata.ts:61](https://github.com/polkadot-js/api/blob/0a27f63423/packages/metadata/src/Metadata/v5/Metadata.ts#L61)*

**`description`** the associated module storage

**Returns:** *Option‹Vec‹[StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)››*

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

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L186)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L194)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L201)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L263)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/0a27f63423/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
