[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["MetaRegistry"](../modules/_metaregistry_.md) › [MetaRegistry](_metaregistry_.metaregistry.md)

# Class: MetaRegistry

## Hierarchy

* MetadataRegistryLookup

  ↳ **MetaRegistry**

  ↳ [ContractRegistry](_contractregistry_.contractregistry.md)

## Index

### Constructors

* [constructor](_metaregistry_.metaregistry.md#constructor)

### Properties

* [typeDefs](_metaregistry_.metaregistry.md#typedefs)

### Methods

* [hasTypeDefAt](_metaregistry_.metaregistry.md#hastypedefat)
* [setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)
* [stringsAt](_metaregistry_.metaregistry.md#stringsat)
* [typeAt](_metaregistry_.metaregistry.md#typeat)
* [typeDefAt](_metaregistry_.metaregistry.md#typedefat)
* [typeDefForOption](_metaregistry_.metaregistry.md#typedefforoption)
* [typeDefForResult](_metaregistry_.metaregistry.md#typedefforresult)
* [typeDefForStruct](_metaregistry_.metaregistry.md#typedefforstruct)
* [typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_metaregistry_.metaregistry.md#typedeffrommetatypeat)
* [typesAt](_metaregistry_.metaregistry.md#typesat)

## Constructors

###  constructor

\+ **new MetaRegistry**(`json`: MetaRegistryJson): *[MetaRegistry](_metaregistry_.metaregistry.md)*

*Overrides void*

*Defined in [MetaRegistry.ts:104](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | MetaRegistryJson |

**Returns:** *[MetaRegistry](_metaregistry_.metaregistry.md)*

## Properties

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Inherited from void*

*Defined in [MetaRegistry.ts:41](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L41)*

## Methods

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from void*

*Defined in [MetaRegistry.ts:92](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Defined in [MetaRegistry.ts:112](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from void*

*Defined in [MetaRegistry.ts:80](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from void*

*Defined in [MetaRegistry.ts:84](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from void*

*Defined in [MetaRegistry.ts:96](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L96)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› |  {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:297](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L297)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:306](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:315](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L315)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:172](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:181](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from void*

*Defined in [MetaRegistry.ts:88](https://github.com/polkadot-js/api/blob/6075a21efb/packages/api-contract/src/MetaRegistry.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*
