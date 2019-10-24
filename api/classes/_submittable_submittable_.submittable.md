[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/Submittable"](../modules/_submittable_submittable_.md) › [Submittable](_submittable_submittable_.submittable.md)

# Class: Submittable <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* Extrinsic

  ↳ **Submittable**

## Implements

* Codec
* IExtrinsic
* [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)‹ApiType›

## Index

### Constructors

* [constructor](_submittable_submittable_.submittable.md#constructor)

### Accessors

* [args](_submittable_submittable_.submittable.md#args)
* [argsDef](_submittable_submittable_.submittable.md#argsdef)
* [callIndex](_submittable_submittable_.submittable.md#callindex)
* [data](_submittable_submittable_.submittable.md#data)
* [encodedLength](_submittable_submittable_.submittable.md#encodedlength)
* [era](_submittable_submittable_.submittable.md#era)
* [hasOrigin](_submittable_submittable_.submittable.md#hasorigin)
* [hash](_submittable_submittable_.submittable.md#hash)
* [isEmpty](_submittable_submittable_.submittable.md#isempty)
* [isSigned](_submittable_submittable_.submittable.md#issigned)
* [length](_submittable_submittable_.submittable.md#length)
* [meta](_submittable_submittable_.submittable.md#meta)
* [method](_submittable_submittable_.submittable.md#method)
* [nonce](_submittable_submittable_.submittable.md#nonce)
* [signature](_submittable_submittable_.submittable.md#signature)
* [signer](_submittable_submittable_.submittable.md#signer)
* [tip](_submittable_submittable_.submittable.md#tip)
* [type](_submittable_submittable_.submittable.md#type)
* [version](_submittable_submittable_.submittable.md#version)

### Methods

* [addSignature](_submittable_submittable_.submittable.md#addsignature)
* [eq](_submittable_submittable_.submittable.md#eq)
* [send](_submittable_submittable_.submittable.md#send)
* [sign](_submittable_submittable_.submittable.md#sign)
* [signAndSend](_submittable_submittable_.submittable.md#signandsend)
* [toHex](_submittable_submittable_.submittable.md#tohex)
* [toJSON](_submittable_submittable_.submittable.md#tojson)
* [toRawType](_submittable_submittable_.submittable.md#torawtype)
* [toString](_submittable_submittable_.submittable.md#tostring)
* [toU8a](_submittable_submittable_.submittable.md#tou8a)
* [decodeExtrinsic](_submittable_submittable_.submittable.md#static-decodeextrinsic)

## Constructors

###  constructor

\+ **new Submittable**(`extrinsic`: Call | Uint8Array | string, `__namedParameters`: object): *[Submittable](_submittable_submittable_.submittable.md)*

*Overrides void*

*Defined in [submittable/Submittable.ts:40](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`extrinsic` | Call &#124; Uint8Array &#124; string |
`__namedParameters` | object |

**Returns:** *[Submittable](_submittable_submittable_.submittable.md)*

## Accessors

###  args

• **get args**(): *Codec[]*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:118](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L118)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [[Call]]

**Returns:** *Codec[]*

___

###  argsDef

• **get argsDef**(): *ArgsDef*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:125](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L125)*

**`description`** The argument definitions, compatible with [[Call]]

**Returns:** *ArgsDef*

___

###  callIndex

• **get callIndex**(): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:132](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L132)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *Uint8Array*

___

###  data

• **get data**(): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:139](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L139)*

**`description`** The actual data for the Call

**Returns:** *Uint8Array*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:153](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L153)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:146](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L146)*

**`description`** The era for this extrinsic

**Returns:** *ExtrinsicEra*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:160](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L160)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:32](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:39](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:167](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L167)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:174](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L174)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:181](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L181)*

**`description`** The [[FunctionMetadataLatest]] that describes the extrinsic

**Returns:** *FunctionMetadataLatest*

___

###  method

• **get method**(): *Call*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:188](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L188)*

**`description`** The [[Call]] this extrinsic wraps

**Returns:** *Call*

___

###  nonce

• **get nonce**(): *Compact‹Index›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:195](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L195)*

**`description`** The nonce for this extrinsic

**Returns:** *Compact‹Index›*

___

###  signature

• **get signature**(): *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:202](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L202)*

**`description`** The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]

**Returns:** *EcdsaSignature | Ed25519Signature | Sr25519Signature*

___

###  signer

• **get signer**(): *Address*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:209](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L209)*

**`description`** The [[Address]] that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *Compact‹Balance›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:216](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L216)*

**`description`** Forwards compat

**Returns:** *Compact‹Balance›*

___

###  type

• **get type**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:223](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L223)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:230](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L230)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | Uint8Array | string, `signature`: Uint8Array | string, `payload`: ExtrinsicPayloadValue | Uint8Array | string): *Extrinsic*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:237](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L237)*

**`description`** Injects an already-generated signature into the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | ExtrinsicPayloadValue &#124; Uint8Array &#124; string |

**Returns:** *Extrinsic*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:46](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/codec/Base.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:102](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L102)*

**Returns:** *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

▸ **send**(`statusCb`: Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:105](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `optionsOrNonce`: Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)›): *this*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Overrides void*

*Defined in [submittable/Submittable.ts:51](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`optionsOrNonce` | Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)› |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)›): *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:64](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options?` | Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `statusCb`: Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:67](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`statusCb` | Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options`: Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)›, `statusCb?`: Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:70](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/api/src/submittable/Submittable.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options` | Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)› |
`statusCb?` | Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:255](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L255)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:262](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L262)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:269](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L269)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:67](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:277](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L277)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value`: Extrinsic | ExtrinsicValue | AnyU8a | Call | undefined, `version`: number): *ExtrinsicVx | ExtrinsicUnknown*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:69](https://github.com/polkadot-js/api/blob/a8bfa90b87/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L69)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Extrinsic &#124; ExtrinsicValue &#124; AnyU8a &#124; Call &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicVx | ExtrinsicUnknown*
