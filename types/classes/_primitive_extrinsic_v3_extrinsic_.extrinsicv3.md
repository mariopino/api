[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v3/Extrinsic"](../modules/_primitive_extrinsic_v3_extrinsic_.md) › [ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

# Class: ExtrinsicV3 <**S, T, V, E**>

**`name`** ExtrinsicV3

**`description`** 
The third generation of compact extrinsics

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicV3**

  ↳ [ExtrinsicV3](../interfaces/_interfaces_runtime_types_.extrinsicv3.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#type)
* [encodedLength](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#encodedlength)
* [hash](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#hash)
* [isEmpty](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#isempty)
* [method](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#method)
* [signature](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#signature)
* [version](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#version)

### Methods

* [addSignature](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#addsignature)
* [eq](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#eq)
* [get](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#get)
* [getAtIndex](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#getatindex)
* [sign](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#sign)
* [toArray](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#toarray)
* [toHex](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tohex)
* [toJSON](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tojson)
* [toRawType](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#torawtype)
* [toString](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tostring)
* [toU8a](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#static-decodeextrinsic)
* [typesToMap](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#static-typestomap)
* [with](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV3**(`value?`: Uint8Array | [ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) | [Call](../interfaces/_interfaces_runtime_types_.call.md), `__namedParameters`: object): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | Uint8Array &#124; [ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) &#124; [Call](../interfaces/_interfaces_runtime_types_.call.md) | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:59](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L59)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:66](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L66)*

**`description`** The [Call](../interfaces/_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L73)*

**`description`** The [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

**Returns:** *[ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)*

___

###  version

• **get version**(): *number*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:80](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L80)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../interfaces/_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:87](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L87)*

**`description`** Add an [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../interfaces/_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L96)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value?`: [Call](../interfaces/_interfaces_runtime_types_.call.md) | Uint8Array | [ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md), `isSigned`: boolean): *[ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | [Call](../interfaces/_interfaces_runtime_types_.call.md) &#124; Uint8Array &#124; [ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md)*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/5671af8db7/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
