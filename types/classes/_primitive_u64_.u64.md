[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/U64"](../modules/_primitive_u64_.md) › [U64](_primitive_u64_.u64.md)

# Class: U64

**`name`** U64

**`description`** 
A 64-bit unsigned integer

## Hierarchy

  ↳ [UInt](_codec_uint_.uint.md)

  ↳ **U64**

  ↳ [Moment](../interfaces/_interfaces_runtime_types_.moment.md)

  ↳ [BabeAuthorityWeight](../interfaces/_interfaces_babe_types_.babeauthorityweight.md)

  ↳ [BabeWeight](../interfaces/_interfaces_babe_types_.babeweight.md)

  ↳ [SlotNumber](../interfaces/_interfaces_babe_types_.slotnumber.md)

  ↳ [Gas](../interfaces/_interfaces_contracts_types_.gas.md)

  ↳ [AuthorityWeight](../interfaces/_interfaces_grandpa_types_.authorityweight.md)

  ↳ [SetId](../interfaces/_interfaces_grandpa_types_.setid.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_u64_.u64.md#constructor)

### Methods

* [toHex](_primitive_u64_.u64.md#tohex)
* [toRawType](_primitive_u64_.u64.md#torawtype)
* [toU8a](_primitive_u64_.u64.md#tou8a)

## Constructors

###  constructor

\+ **new U64**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[U64](_primitive_u64_.u64.md)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/e056675b3a/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/e056675b3a/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/e056675b3a/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/e056675b3a/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
