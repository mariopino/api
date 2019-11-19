[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Call](_interfaces_runtime_types_.call.md)

# Interface: Call <**S, T, V, E**>

GenericCall

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Call](../classes/_primitive_generic_call_.call.md)

  ↳ **Call**

  ↳ [Proposal](_interfaces_democracy_types_.proposal.md)

## Implements

* [Codec](_types_.codec.md)
* [IMethod](_types_.imethod.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.call.md#constructor)

### Accessors

* [Type](_interfaces_runtime_types_.call.md#type)
* [args](_interfaces_runtime_types_.call.md#args)
* [argsDef](_interfaces_runtime_types_.call.md#argsdef)
* [callIndex](_interfaces_runtime_types_.call.md#callindex)
* [data](_interfaces_runtime_types_.call.md#data)
* [encodedLength](_interfaces_runtime_types_.call.md#encodedlength)
* [hasOrigin](_interfaces_runtime_types_.call.md#hasorigin)
* [hash](_interfaces_runtime_types_.call.md#hash)
* [isEmpty](_interfaces_runtime_types_.call.md#isempty)
* [meta](_interfaces_runtime_types_.call.md#meta)
* [methodName](_interfaces_runtime_types_.call.md#methodname)
* [sectionName](_interfaces_runtime_types_.call.md#sectionname)

### Methods

* [eq](_interfaces_runtime_types_.call.md#eq)
* [get](_interfaces_runtime_types_.call.md#get)
* [getAtIndex](_interfaces_runtime_types_.call.md#getatindex)
* [toArray](_interfaces_runtime_types_.call.md#toarray)
* [toHex](_interfaces_runtime_types_.call.md#tohex)
* [toJSON](_interfaces_runtime_types_.call.md#tojson)
* [toRawType](_interfaces_runtime_types_.call.md#torawtype)
* [toString](_interfaces_runtime_types_.call.md#tostring)
* [toU8a](_interfaces_runtime_types_.call.md#tou8a)
* [filterOrigin](_interfaces_runtime_types_.call.md#static-filterorigin)
* [findFunction](_interfaces_runtime_types_.call.md#static-findfunction)
* [injectMetadata](_interfaces_runtime_types_.call.md#static-injectmetadata)
* [typesToMap](_interfaces_runtime_types_.call.md#static-typestomap)
* [with](_interfaces_runtime_types_.call.md#static-with)

## Constructors

###  constructor

\+ **new Call**(`value`: any, `meta?`: [FunctionMetadataLatest](_interfaceregistry_.interfaceregistry.md#functionmetadatalatest)): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[constructor](../classes/_primitive_generic_call_.call.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Generic/Call.ts:53](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`meta?` | [FunctionMetadataLatest](_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) |

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  args

• **get args**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[args](../classes/_primitive_generic_call_.call.md#args)*

*Defined in [primitive/Generic/Call.ts:177](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L177)*

**`description`** The arguments for the function call

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[argsDef](../classes/_primitive_generic_call_.call.md#argsdef)*

*Defined in [primitive/Generic/Call.ts:185](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L185)*

**`description`** The argument definitions

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *Uint8Array*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[callIndex](../classes/_primitive_generic_call_.call.md#callindex)*

*Defined in [primitive/Generic/Call.ts:192](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L192)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *Uint8Array*

___

###  data

• **get data**(): *Uint8Array*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[data](../classes/_primitive_generic_call_.call.md#data)*

*Defined in [primitive/Generic/Call.ts:199](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L199)*

**`description`** The encoded data

**Returns:** *Uint8Array*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[hasOrigin](../classes/_primitive_generic_call_.call.md#hasorigin)*

*Defined in [primitive/Generic/Call.ts:206](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L206)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[meta](../classes/_primitive_generic_call_.call.md#meta)*

*Defined in [primitive/Generic/Call.ts:215](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L215)*

**`description`** The [[FunctionMetadata]]

**Returns:** *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

___

###  methodName

• **get methodName**(): *string*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[methodName](../classes/_primitive_generic_call_.call.md#methodname)*

*Defined in [primitive/Generic/Call.ts:222](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L222)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[sectionName](../classes/_primitive_generic_call_.call.md#sectionname)*

*Defined in [primitive/Generic/Call.ts:229](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L229)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[toRawType](../classes/_primitive_generic_call_.call.md#torawtype)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [primitive/Generic/Call.ts:236](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L236)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: [FunctionMetadataLatest](_interfaceregistry_.interfaceregistry.md#functionmetadatalatest)): *[FunctionArgumentMetadataLatest](_interfaces_metadata_types_.functionargumentmetadatalatest.md)[]*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[filterOrigin](../classes/_primitive_generic_call_.call.md#static-filterorigin)*

*Defined in [primitive/Generic/Call.ts:122](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [FunctionMetadataLatest](_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) |

**Returns:** *[FunctionArgumentMetadataLatest](_interfaces_metadata_types_.functionargumentmetadatalatest.md)[]*

___

### `Static` findFunction

▸ **findFunction**(`callIndex`: Uint8Array): *[CallFunction](_types_.callfunction.md)*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[findFunction](../classes/_primitive_generic_call_.call.md#static-findfunction)*

*Defined in [primitive/Generic/Call.ts:138](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array |

**Returns:** *[CallFunction](_types_.callfunction.md)*

___

### `Static` injectMetadata

▸ **injectMetadata**(`metadata`: Metadata): *void*

*Inherited from [Call](../classes/_primitive_generic_call_.call.md).[injectMetadata](../classes/_primitive_generic_call_.call.md#static-injectmetadata)*

*Defined in [primitive/Generic/Call.ts:164](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/primitive/Generic/Call.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | Metadata |

**Returns:** *void*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
