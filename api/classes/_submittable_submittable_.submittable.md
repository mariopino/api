[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/Submittable"](../modules/_submittable_submittable_.md) › [Submittable](_submittable_submittable_.submittable.md)

# Class: Submittable <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

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

*Defined in [submittable/Submittable.ts:40](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L40)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:120](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L120)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [[Call]]

**Returns:** *Codec[]*

___

###  argsDef

• **get argsDef**(): *ArgsDef*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:127](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L127)*

**`description`** The argument definitions, compatible with [[Call]]

**Returns:** *ArgsDef*

___

###  callIndex

• **get callIndex**(): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:134](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L134)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *Uint8Array*

___

###  data

• **get data**(): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:141](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L141)*

**`description`** The actual data for the Call

**Returns:** *Uint8Array*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:155](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L155)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:148](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L148)*

**`description`** The era for this extrinsic

**Returns:** *ExtrinsicEra*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:162](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L162)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:32](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:39](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:169](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L169)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:176](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L176)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:183](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L183)*

**`description`** The [[FunctionMetadataLatest]] that describes the extrinsic

**Returns:** *FunctionMetadataLatest*

___

###  method

• **get method**(): *Call*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:190](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L190)*

**`description`** The [[Call]] this extrinsic wraps

**Returns:** *Call*

___

###  nonce

• **get nonce**(): *Compact‹Index›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:197](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L197)*

**`description`** The nonce for this extrinsic

**Returns:** *Compact‹Index›*

___

###  signature

• **get signature**(): *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:204](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L204)*

**`description`** The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]

**Returns:** *EcdsaSignature | Ed25519Signature | Sr25519Signature*

___

###  signer

• **get signer**(): *Address*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:211](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L211)*

**`description`** The [[Address]] that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *Compact‹Balance›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:218](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L218)*

**`description`** Forwards compat

**Returns:** *Compact‹Balance›*

___

###  type

• **get type**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:225](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L225)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:232](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L232)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | Uint8Array | string, `signature`: Uint8Array | string, `payload`: ExtrinsicPayloadValue | Uint8Array | string): *Extrinsic*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:239](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L239)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:46](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/codec/Base.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:102](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L102)*

**Returns:** *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

▸ **send**(`statusCb`: Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:105](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `optionsOrNonce`: Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)›): *this*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Overrides void*

*Defined in [submittable/Submittable.ts:51](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`optionsOrNonce` | Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)› |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)›): *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:64](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options?` | Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `statusCb`: Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:67](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`statusCb` | Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options`: Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)›, `statusCb?`: Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Defined in [submittable/Submittable.ts:70](https://github.com/polkadot-js/api/blob/479c742471/packages/api/src/submittable/Submittable.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options` | Partial‹[SignerOptions](../interfaces/_submittable_types_.signeroptions.md)› |
`statusCb?` | Callback‹[SubmittableResultImpl](../interfaces/_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:257](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L257)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:264](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L264)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:271](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L271)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Base.ts:67](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [SubmittableExtrinsic](../interfaces/_submittable_types_.submittableextrinsic.md)*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:279](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L279)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/primitive/Extrinsic/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/479c742471/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L71)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Extrinsic &#124; ExtrinsicValue &#124; AnyU8a &#124; Call &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicVx | ExtrinsicUnknown*
