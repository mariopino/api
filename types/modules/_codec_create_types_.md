[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/types"](_codec_create_types_.md)

# External module: "codec/create/types"

## Index

### Enumerations

* [MetaRegistryItem](../enums/_codec_create_types_.metaregistryitem.md)
* [MetaTypeInfo](../enums/_codec_create_types_.metatypeinfo.md)
* [TypeDefInfo](../enums/_codec_create_types_.typedefinfo.md)

### Interfaces

* [MetaRegistryJson](../interfaces/_codec_create_types_.metaregistryjson.md)
* [MetaType](../interfaces/_codec_create_types_.metatype.md)
* [MetaTypeDefClikeEnum](../interfaces/_codec_create_types_.metatypedefclikeenum.md)
* [MetaTypeDefClikeEnumVariant](../interfaces/_codec_create_types_.metatypedefclikeenumvariant.md)
* [MetaTypeDefEnum](../interfaces/_codec_create_types_.metatypedefenum.md)
* [MetaTypeDefEnumVariantStruct](../interfaces/_codec_create_types_.metatypedefenumvariantstruct.md)
* [MetaTypeDefEnumVariantTupleStruct](../interfaces/_codec_create_types_.metatypedefenumvarianttuplestruct.md)
* [MetaTypeDefEnumVariantUnit](../interfaces/_codec_create_types_.metatypedefenumvariantunit.md)
* [MetaTypeDefStruct](../interfaces/_codec_create_types_.metatypedefstruct.md)
* [MetaTypeDefStructField](../interfaces/_codec_create_types_.metatypedefstructfield.md)
* [MetaTypeDefTupleStruct](../interfaces/_codec_create_types_.metatypedeftuplestruct.md)
* [MetaTypeDefUnion](../interfaces/_codec_create_types_.metatypedefunion.md)
* [MetaTypeIdArray](../interfaces/_codec_create_types_.metatypeidarray.md)
* [MetaTypeIdCustom](../interfaces/_codec_create_types_.metatypeidcustom.md)
* [TypeDef](../interfaces/_codec_create_types_.typedef.md)
* [TypeDefExtEnumDiscriminant](../interfaces/_codec_create_types_.typedefextenumdiscriminant.md)
* [TypeDefExtVecFixed](../interfaces/_codec_create_types_.typedefextvecfixed.md)

### Type aliases

* [FromReg](_codec_create_types_.md#fromreg)
* [MetaTypeDef](_codec_create_types_.md#metatypedef)
* [MetaTypeDefBuiltIn](_codec_create_types_.md#metatypedefbuiltin)
* [MetaTypeDefEnumVariant](_codec_create_types_.md#metatypedefenumvariant)
* [MetaTypeDefUnionField](_codec_create_types_.md#metatypedefunionfield)
* [MetaTypeId](_codec_create_types_.md#metatypeid)
* [MetaTypeIdPrimitive](_codec_create_types_.md#metatypeidprimitive)
* [MetaTypeIdTuple](_codec_create_types_.md#metatypeidtuple)
* [StringIndex](_codec_create_types_.md#stringindex)
* [TypeIndex](_codec_create_types_.md#typeindex)

## Type aliases

###  FromReg

Ƭ **FromReg**: *FromReg<T, K>*

*Defined in [codec/create/types.ts:10](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L10)*

___

###  MetaTypeDef

Ƭ **MetaTypeDef**: *[MetaTypeDefBuiltIn](_codec_create_types_.md#metatypedefbuiltin) | [MetaTypeDefClikeEnum](../interfaces/_codec_create_types_.metatypedefclikeenum.md) | [MetaTypeDefEnum](../interfaces/_codec_create_types_.metatypedefenum.md) | [MetaTypeDefStruct](../interfaces/_codec_create_types_.metatypedefstruct.md) | [MetaTypeDefTupleStruct](../interfaces/_codec_create_types_.metatypedeftuplestruct.md) | [MetaTypeDefUnion](../interfaces/_codec_create_types_.metatypedefunion.md)*

*Defined in [codec/create/types.ts:136](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L136)*

___

###  MetaTypeDefBuiltIn

Ƭ **MetaTypeDefBuiltIn**: *"builtin"*

*Defined in [codec/create/types.ts:95](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L95)*

___

###  MetaTypeDefEnumVariant

Ƭ **MetaTypeDefEnumVariant**: *[MetaTypeDefEnumVariantUnit](../interfaces/_codec_create_types_.metatypedefenumvariantunit.md) | [MetaTypeDefEnumVariantTupleStruct](../interfaces/_codec_create_types_.metatypedefenumvarianttuplestruct.md) | [MetaTypeDefEnumVariantStruct](../interfaces/_codec_create_types_.metatypedefenumvariantstruct.md)*

*Defined in [codec/create/types.ts:111](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L111)*

___

###  MetaTypeDefUnionField

Ƭ **MetaTypeDefUnionField**: *[MetaTypeDefStructField](../interfaces/_codec_create_types_.metatypedefstructfield.md)*

*Defined in [codec/create/types.ts:122](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L122)*

___

###  MetaTypeId

Ƭ **MetaTypeId**: *[MetaTypeIdPrimitive](_codec_create_types_.md#metatypeidprimitive) | [MetaTypeIdTuple](_codec_create_types_.md#metatypeidtuple) | [MetaTypeIdArray](../interfaces/_codec_create_types_.metatypeidarray.md) | [MetaTypeIdCustom](../interfaces/_codec_create_types_.metatypeidcustom.md)*

*Defined in [codec/create/types.ts:82](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L82)*

___

###  MetaTypeIdPrimitive

Ƭ **MetaTypeIdPrimitive**: *string*

*Defined in [codec/create/types.ts:67](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L67)*

___

###  MetaTypeIdTuple

Ƭ **MetaTypeIdTuple**: *[TypeIndex](_codec_create_types_.md#typeindex)[]*

*Defined in [codec/create/types.ts:69](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L69)*

___

###  StringIndex

Ƭ **StringIndex**: *number*

*Defined in [codec/create/types.ts:54](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L54)*

___

###  TypeIndex

Ƭ **TypeIndex**: *number*

*Defined in [codec/create/types.ts:52](https://github.com/polkadot-js/api/blob/e54cee1fad/packages/types/src/codec/create/types.ts#L52)*
