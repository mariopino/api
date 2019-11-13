[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v2/Storage"](../modules/_metadata_v2_storage_.md) › [StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)

# Class: StorageFunctionMetadata <**S, T, V, E**>

**`name`** ModuleMetadata

**`description`** 
The definition of a storage function

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Struct

  ↳ **StorageFunctionMetadata**

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_v2_storage_.storagefunctionmetadata.md#constructor)

### Properties

* [__@toStringTag](_metadata_v2_storage_.storagefunctionmetadata.md#__@tostringtag)
* [size](_metadata_v2_storage_.storagefunctionmetadata.md#size)

### Accessors

* [Type](_metadata_v2_storage_.storagefunctionmetadata.md#type)
* [documentation](_metadata_v2_storage_.storagefunctionmetadata.md#documentation)
* [encodedLength](_metadata_v2_storage_.storagefunctionmetadata.md#encodedlength)
* [fallback](_metadata_v2_storage_.storagefunctionmetadata.md#fallback)
* [hash](_metadata_v2_storage_.storagefunctionmetadata.md#hash)
* [isEmpty](_metadata_v2_storage_.storagefunctionmetadata.md#isempty)
* [modifier](_metadata_v2_storage_.storagefunctionmetadata.md#modifier)
* [name](_metadata_v2_storage_.storagefunctionmetadata.md#name)
* [type](_metadata_v2_storage_.storagefunctionmetadata.md#type)

### Methods

* [__@iterator](_metadata_v2_storage_.storagefunctionmetadata.md#__@iterator)
* [clear](_metadata_v2_storage_.storagefunctionmetadata.md#clear)
* [delete](_metadata_v2_storage_.storagefunctionmetadata.md#delete)
* [entries](_metadata_v2_storage_.storagefunctionmetadata.md#entries)
* [eq](_metadata_v2_storage_.storagefunctionmetadata.md#eq)
* [forEach](_metadata_v2_storage_.storagefunctionmetadata.md#foreach)
* [get](_metadata_v2_storage_.storagefunctionmetadata.md#get)
* [getAtIndex](_metadata_v2_storage_.storagefunctionmetadata.md#getatindex)
* [has](_metadata_v2_storage_.storagefunctionmetadata.md#has)
* [keys](_metadata_v2_storage_.storagefunctionmetadata.md#keys)
* [set](_metadata_v2_storage_.storagefunctionmetadata.md#set)
* [toArray](_metadata_v2_storage_.storagefunctionmetadata.md#toarray)
* [toHex](_metadata_v2_storage_.storagefunctionmetadata.md#tohex)
* [toJSON](_metadata_v2_storage_.storagefunctionmetadata.md#tojson)
* [toRawType](_metadata_v2_storage_.storagefunctionmetadata.md#torawtype)
* [toString](_metadata_v2_storage_.storagefunctionmetadata.md#tostring)
* [toU8a](_metadata_v2_storage_.storagefunctionmetadata.md#tou8a)
* [values](_metadata_v2_storage_.storagefunctionmetadata.md#values)
* [typesToMap](_metadata_v2_storage_.storagefunctionmetadata.md#static-typestomap)
* [with](_metadata_v2_storage_.storagefunctionmetadata.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionMetadata**(`value?`: [StorageFunctionMetadataValue](../interfaces/_metadata_v2_storage_.storagefunctionmetadatavalue.md) | Uint8Array): *[StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)*

*Overrides void*

*Defined in [Metadata/v2/Storage.ts:85](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/metadata/src/Metadata/v2/Storage.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [StorageFunctionMetadataValue](../interfaces/_metadata_v2_storage_.storagefunctionmetadatavalue.md) &#124; Uint8Array |

**Returns:** *[StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  documentation

• **get documentation**(): *Vec‹Text›*

*Defined in [Metadata/v2/Storage.ts:99](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/metadata/src/Metadata/v2/Storage.ts#L99)*

**`description`** The [[Text]] documentation

**Returns:** *Vec‹Text›*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  fallback

• **get fallback**(): *Bytes*

*Defined in [Metadata/v2/Storage.ts:106](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/metadata/src/Metadata/v2/Storage.ts#L106)*

**`description`** The [[Bytes]] fallback default

**Returns:** *Bytes*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modifier

• **get modifier**(): *StorageFunctionModifierV2*

*Defined in [Metadata/v2/Storage.ts:113](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/metadata/src/Metadata/v2/Storage.ts#L113)*

**`description`** The [[StorageFunctionModifierV2]] for arguments

**Returns:** *StorageFunctionModifierV2*

___

###  name

• **get name**(): *Text*

*Defined in [Metadata/v2/Storage.ts:120](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/metadata/src/Metadata/v2/Storage.ts#L120)*

**`description`** The call name

**Returns:** *Text*

___

###  type

• **get type**(): *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

*Defined in [Metadata/v2/Storage.ts:127](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/metadata/src/Metadata/v2/Storage.ts#L127)*

**`description`** The [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

**Returns:** *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L186)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L194)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L201)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L263)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/eef1c5327b/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
