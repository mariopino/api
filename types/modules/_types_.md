[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)
* [AnyJsonObject](../interfaces/_types_.anyjsonobject.md)
* [CallFunction](../interfaces/_types_.callfunction.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IKeyringPair](../interfaces/_types_.ikeyringpair.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [ISignerPayload](../interfaces/_types_.isignerpayload.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)
* [SignatureOptions](../interfaces/_types_.signatureoptions.md)
* [SignerPayloadJSON](../interfaces/_types_.signerpayloadjson.md)
* [SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)
* [SignerPayloadRawBase](../interfaces/_types_.signerpayloadrawbase.md)

### Type aliases

* [AnyFunction](_types_.md#anyfunction)
* [AnyJson](_types_.md#anyjson)
* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [ArgsDef](_types_.md#argsdef)
* [Callback](_types_.md#callback)
* [Calls](_types_.md#calls)
* [CodecArg](_types_.md#codecarg)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [ITuple](_types_.md#ituple)
* [InterfaceTypes](_types_.md#interfacetypes)
* [ModulesWithCalls](_types_.md#moduleswithcalls)
* [RegistryTypes](_types_.md#registrytypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L52)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [types.ts:64](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L64)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | Uint8Array | number | string*

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L54)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L56)*

___

###  AnyU8a

Ƭ **AnyU8a**: *Uint8Array | number[] | string*

*Defined in [types.ts:58](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L58)*

___

###  ArgsDef

Ƭ **ArgsDef**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md)›*

*Defined in [types.ts:156](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L156)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [types.ts:45](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L45)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  Calls

Ƭ **Calls**: *Record‹string, [CallFunction](../interfaces/_types_.callfunction.md)›*

*Defined in [types.ts:30](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L30)*

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | BN | boolean | string | Uint8Array | boolean | number | string | undefined | CodecArgArray | CodecArgObject*

*Defined in [types.ts:43](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L43)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:124](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L124)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md)‹T››*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L131)*

___

###  ITuple

Ƭ **ITuple**: *Sub & [Codec](../interfaces/_types_.codec.md)*

*Defined in [types.ts:161](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L161)*

___

###  InterfaceTypes

Ƭ **InterfaceTypes**: *keyof InterfaceRegistry*

*Defined in [types.ts:19](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L19)*

___

###  ModulesWithCalls

Ƭ **ModulesWithCalls**: *Record‹string, [Calls](_types_.md#calls)›*

*Defined in [types.ts:32](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L32)*

___

###  RegistryTypes

Ƭ **RegistryTypes**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md) | string | Record‹string, string› | object | object›*

*Defined in [types.ts:133](https://github.com/polkadot-js/api/blob/a30d467618/packages/types/src/types.ts#L133)*
