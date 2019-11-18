[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/encodeTypes"](_codec_utils_encodetypes_.md)

# External module: "codec/utils/encodeTypes"

## Index

### Functions

* [displayType](_codec_utils_encodetypes_.md#displaytype)
* [encodeType](_codec_utils_encodetypes_.md#encodetype)
* [paramsNotation](_codec_utils_encodetypes_.md#paramsnotation)
* [withTypeString](_codec_utils_encodetypes_.md#withtypestring)

## Functions

###  displayType

▸ **displayType**(`typeDef`: Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›): *string*

*Defined in [codec/utils/encodeTypes.ts:125](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/codec/utils/encodeTypes.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any› |

**Returns:** *string*

___

###  encodeType

▸ **encodeType**(`typeDef`: Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›): *string*

*Defined in [codec/utils/encodeTypes.ts:117](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/codec/utils/encodeTypes.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any› |

**Returns:** *string*

___

###  paramsNotation

▸ **paramsNotation**(`outer`: string, `inner?`: string | any[], `transform`: function): *string*

*Defined in [codec/utils/encodeTypes.ts:15](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/codec/utils/encodeTypes.ts#L15)*

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

*Defined in [codec/utils/encodeTypes.ts:140](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/codec/utils/encodeTypes.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any› |

**Returns:** *Pick‹[TypeDef](../interfaces/_codec_create_types_.typedef.md), any›*
