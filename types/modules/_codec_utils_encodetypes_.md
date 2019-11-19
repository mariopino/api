[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/encodeTypes"](_codec_utils_encodetypes_.md)

# External module: "codec/utils/encodeTypes"

## Index

### Variables

* [SPECIAL_TYPES](_codec_utils_encodetypes_.md#const-special_types)

### Functions

* [displayType](_codec_utils_encodetypes_.md#displaytype)
* [encodeType](_codec_utils_encodetypes_.md#encodetype)
* [paramsNotation](_codec_utils_encodetypes_.md#paramsnotation)
* [withTypeString](_codec_utils_encodetypes_.md#withtypestring)

## Variables

### `Const` SPECIAL_TYPES

• **SPECIAL_TYPES**: *string[]* =  ['AccountId', 'AccountIndex', 'Address', 'Balance']

*Defined in [codec/utils/encodeTypes.ts:11](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/utils/encodeTypes.ts#L11)*

## Functions

###  displayType

▸ **displayType**(`typeDef`: Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›): *string*

*Defined in [codec/utils/encodeTypes.ts:135](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/utils/encodeTypes.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any› |

**Returns:** *string*

___

###  encodeType

▸ **encodeType**(`typeDef`: Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›): *string*

*Defined in [codec/utils/encodeTypes.ts:127](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/utils/encodeTypes.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any› |

**Returns:** *string*

___

###  paramsNotation

▸ **paramsNotation**(`outer`: string, `inner?`: string | any[], `transform`: function): *string*

*Defined in [codec/utils/encodeTypes.ts:15](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/utils/encodeTypes.ts#L15)*

**Parameters:**

▪ **outer**: *string*

▪`Optional`  **inner**: *string | any[]*

▪`Default value`  **transform**: *function*=  identity

▸ (`_`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *string*

___

###  withTypeString

▸ **withTypeString**(`typeDef`: Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›): *Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›*

*Defined in [codec/utils/encodeTypes.ts:150](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/utils/encodeTypes.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any› |

**Returns:** *Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›*
