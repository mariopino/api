[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/SignerPayload"](../modules/_primitive_extrinsic_signerpayload_.md) › [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

# Interface: SignerPayloadType

## Hierarchy

* [Codec](_types_.codec.md)

  ↳ **SignerPayloadType**

  ↳ [SignerPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md)

## Index

### Properties

* [address](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#address)
* [blockHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)
* [blockNumber](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)
* [encodedLength](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)
* [era](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)
* [genesisHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)
* [hash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#hash)
* [isEmpty](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#isempty)
* [method](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)
* [nonce](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)
* [runtimeVersion](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)
* [tip](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)
* [version](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)

### Methods

* [eq](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#eq)
* [toHex](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tohex)
* [toJSON](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tojson)
* [toRawType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)
* [toString](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tostring)
* [toU8a](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)

## Properties

###  address

• **address**: *[Address](_interfaces_runtime_types_.address.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *[Hash](_interfaces_runtime_types_.hash.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *[BlockNumber](_interfaces_runtime_types_.blocknumber.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *[Hash](_interfaces_runtime_types_.hash.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Call](_interfaces_runtime_types_.call.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Defined in [primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  runtimeVersion

• **runtimeVersion**: *[RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Defined in [primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](_interfaceregistry_.interfaceregistry.md#u8)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L97)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/types.ts#L118)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
