> # Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* IExtrinsic

  * **SubmittableExtrinsic**

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:159](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L159)*

___

###  argsDef

• **argsDef**: *ArgsDef*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:160](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L160)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:161](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L161)*

___

###  data

• **data**: *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:162](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L162)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *IExtrinsicEra*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:170](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L170)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:164](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L164)*

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:163](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L163)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:169](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L169)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:214](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L214)*

___

###  meta

• **meta**: *FunctionMetadataV7*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:165](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L165)*

___

###  method

• **method**: *Call*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:215](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L215)*

___

###  nonce

• **nonce**: *Compact‹Index›*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:171](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L171)*

___

###  signature

• **signature**: *IHash*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:172](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L172)*

___

###  signer

• **signer**: *Address*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:173](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L173)*

___

###  tip

• **tip**: *Compact‹Balance›*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:174](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L174)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:216](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L216)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:217](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L217)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | Uint8Array | string, `signature`: Uint8Array | string, `payload`: ExtrinsicPayloadValue | Uint8Array | string): *IExtrinsic*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:201](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address \| Uint8Array \| string |
`signature` | Uint8Array \| string |
`payload` | ExtrinsicPayloadValue \| Uint8Array \| string |

**Returns:** *IExtrinsic*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

*Defined in [submittable/types.ts:43](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/submittable/types.ts#L43)*

**Returns:** *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

▸ **send**(`statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Defined in [submittable/types.ts:45](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/submittable/types.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `_options`: Partial‹SignatureOptions›): *this*

*Overrides void*

*Defined in [submittable/types.ts:47](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/submittable/types.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`_options` | Partial‹SignatureOptions› |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›): *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

*Defined in [submittable/types.ts:49](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/submittable/types.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair \| string \| AccountId \| Address |
`options?` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmitableResultResult](../modules/_submittable_types_.md#submitableresultresult)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Defined in [submittable/types.ts:51](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/submittable/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair \| string \| AccountId \| Address |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›, `statusCb?`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

*Defined in [submittable/types.ts:53](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/api/src/submittable/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair \| string \| AccountId \| Address |
`options` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |
`statusCb?` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmitableResultSubscription](../modules/_submittable_types_.md#submitableresultsubscription)‹ApiType›*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L96)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:117](https://github.com/polkadot-js/api/blob/2dd7cc0/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*