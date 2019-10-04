[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/types"](../modules/_submittable_types_.md) › [SubmittableExtrinsic](_submittable_types_.submittableextrinsic.md)

# Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* IExtrinsic

  ↳ **SubmittableExtrinsic**

## Implemented by

* [Submittable](../classes/_submittable_submittable_.submittable.md)

## Index

### Properties

* [args](_submittable_types_.submittableextrinsic.md#args)
* [argsDef](_submittable_types_.submittableextrinsic.md#argsdef)
* [callIndex](_submittable_types_.submittableextrinsic.md#callindex)
* [data](_submittable_types_.submittableextrinsic.md#data)
* [encodedLength](_submittable_types_.submittableextrinsic.md#encodedlength)
* [era](_submittable_types_.submittableextrinsic.md#era)
* [hasOrigin](_submittable_types_.submittableextrinsic.md#hasorigin)
* [hash](_submittable_types_.submittableextrinsic.md#hash)
* [isEmpty](_submittable_types_.submittableextrinsic.md#isempty)
* [isSigned](_submittable_types_.submittableextrinsic.md#issigned)
* [length](_submittable_types_.submittableextrinsic.md#length)
* [meta](_submittable_types_.submittableextrinsic.md#meta)
* [method](_submittable_types_.submittableextrinsic.md#method)
* [nonce](_submittable_types_.submittableextrinsic.md#nonce)
* [signature](_submittable_types_.submittableextrinsic.md#signature)
* [signer](_submittable_types_.submittableextrinsic.md#signer)
* [tip](_submittable_types_.submittableextrinsic.md#tip)
* [type](_submittable_types_.submittableextrinsic.md#type)
* [version](_submittable_types_.submittableextrinsic.md#version)

### Methods

* [addSignature](_submittable_types_.submittableextrinsic.md#addsignature)
* [eq](_submittable_types_.submittableextrinsic.md#eq)
* [send](_submittable_types_.submittableextrinsic.md#send)
* [sign](_submittable_types_.submittableextrinsic.md#sign)
* [signAndSend](_submittable_types_.submittableextrinsic.md#signandsend)
* [toHex](_submittable_types_.submittableextrinsic.md#tohex)
* [toJSON](_submittable_types_.submittableextrinsic.md#tojson)
* [toRawType](_submittable_types_.submittableextrinsic.md#torawtype)
* [toString](_submittable_types_.submittableextrinsic.md#tostring)
* [toU8a](_submittable_types_.submittableextrinsic.md#tou8a)

## Properties

###  args

• **args**: *Codec[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:164](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L164)*

___

###  argsDef

• **argsDef**: *ArgsDef*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:165](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L165)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:166](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L166)*

___

###  data

• **data**: *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:167](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L167)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *IExtrinsicEra*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:175](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L175)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:169](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L169)*

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:168](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L168)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:174](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L174)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:219](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L219)*

___

###  meta

• **meta**: *FunctionMetadataV7*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:170](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L170)*

___

###  method

• **method**: *Call*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:220](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L220)*

___

###  nonce

• **nonce**: *Compact‹Index›*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:176](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L176)*

___

###  signature

• **signature**: *IHash*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:177](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L177)*

___

###  signer

• **signer**: *Address*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:178](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L178)*

___

###  tip

• **tip**: *Compact‹Balance›*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:179](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L179)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:221](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L221)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:222](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L222)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | Uint8Array | string, `signature`: Uint8Array | string, `payload`: ExtrinsicPayloadValue | Uint8Array | string): *IExtrinsic*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:206](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | ExtrinsicPayloadValue &#124; Uint8Array &#124; string |

**Returns:** *IExtrinsic*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

*Defined in [submittable/types.ts:43](https://github.com/polkadot-js/api/blob/1e67aee/packages/api/src/submittable/types.ts#L43)*

**Returns:** *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

▸ **send**(`statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Defined in [submittable/types.ts:45](https://github.com/polkadot-js/api/blob/1e67aee/packages/api/src/submittable/types.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `_options`: Partial‹SignatureOptions›): *this*

*Overrides void*

*Defined in [submittable/types.ts:47](https://github.com/polkadot-js/api/blob/1e67aee/packages/api/src/submittable/types.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`_options` | Partial‹SignatureOptions› |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›): *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

*Defined in [submittable/types.ts:49](https://github.com/polkadot-js/api/blob/1e67aee/packages/api/src/submittable/types.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options?` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Defined in [submittable/types.ts:51](https://github.com/polkadot-js/api/blob/1e67aee/packages/api/src/submittable/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›, `statusCb?`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Defined in [submittable/types.ts:53](https://github.com/polkadot-js/api/blob/1e67aee/packages/api/src/submittable/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |
`statusCb?` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L96)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:117](https://github.com/polkadot-js/api/blob/1e67aee/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
