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

*Defined in [codec/create/types.ts:10](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L10)*

___

###  MetaTypeDef

Ƭ **MetaTypeDef**: *[MetaTypeDefBuiltIn](_codec_create_types_.md#metatypedefbuiltin) | [MetaTypeDefClikeEnum](../interfaces/_codec_create_types_.metatypedefclikeenum.md) | [MetaTypeDefEnum](../interfaces/_codec_create_types_.metatypedefenum.md) | [MetaTypeDefStruct](../interfaces/_codec_create_types_.metatypedefstruct.md) | [MetaTypeDefTupleStruct](../interfaces/_codec_create_types_.metatypedeftuplestruct.md) | [MetaTypeDefUnion](../interfaces/_codec_create_types_.metatypedefunion.md)*

*Defined in [codec/create/types.ts:137](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L137)*

___

###  MetaTypeDefBuiltIn

Ƭ **MetaTypeDefBuiltIn**: *"builtin"*

*Defined in [codec/create/types.ts:96](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L96)*

___

###  MetaTypeDefEnumVariant

Ƭ **MetaTypeDefEnumVariant**: *[MetaTypeDefEnumVariantUnit](../interfaces/_codec_create_types_.metatypedefenumvariantunit.md) | [MetaTypeDefEnumVariantTupleStruct](../interfaces/_codec_create_types_.metatypedefenumvarianttuplestruct.md) | [MetaTypeDefEnumVariantStruct](../interfaces/_codec_create_types_.metatypedefenumvariantstruct.md)*

*Defined in [codec/create/types.ts:112](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L112)*

___

###  MetaTypeDefUnionField

Ƭ **MetaTypeDefUnionField**: *[MetaTypeDefStructField](../interfaces/_codec_create_types_.metatypedefstructfield.md)*

*Defined in [codec/create/types.ts:123](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L123)*

___

###  MetaTypeId

Ƭ **MetaTypeId**: *[MetaTypeIdPrimitive](_codec_create_types_.md#metatypeidprimitive) | [MetaTypeIdTuple](_codec_create_types_.md#metatypeidtuple) | [MetaTypeIdArray](../interfaces/_codec_create_types_.metatypeidarray.md) | [MetaTypeIdCustom](../interfaces/_codec_create_types_.metatypeidcustom.md)*

*Defined in [codec/create/types.ts:83](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L83)*

___

###  MetaTypeIdPrimitive

Ƭ **MetaTypeIdPrimitive**: *string*

*Defined in [codec/create/types.ts:68](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L68)*

___

###  MetaTypeIdTuple

Ƭ **MetaTypeIdTuple**: *[TypeIndex](_codec_create_types_.md#typeindex)[]*

*Defined in [codec/create/types.ts:70](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L70)*

___

###  StringIndex

Ƭ **StringIndex**: *number*

*Defined in [codec/create/types.ts:55](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L55)*

___

###  TypeIndex

Ƭ **TypeIndex**: *number*

*Defined in [codec/create/types.ts:53](https://github.com/polkadot-js/api/blob/db3cb47d05/packages/types/src/codec/create/types.ts#L53)*
