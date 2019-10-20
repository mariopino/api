[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["MetaRegistry"](../modules/_metaregistry_.md) › [MetaRegistry](_metaregistry_.metaregistry.md)

# Class: MetaRegistry

## Hierarchy

* **MetaRegistry**

  ↳ [ContractRegistry](_contractregistry_.contractregistry.md)

## Index

### Constructors

* [constructor](_metaregistry_.metaregistry.md#constructor)

### Properties

* [typeDefs](_metaregistry_.metaregistry.md#typedefs)

### Methods

* [hasTypeDefAt](_metaregistry_.metaregistry.md#hastypedefat)
* [setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)
* [stringAt](_metaregistry_.metaregistry.md#stringat)
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

\+ **new MetaRegistry**(`__namedParameters`: object): *[MetaRegistry](_metaregistry_.metaregistry.md)*

*Defined in [MetaRegistry.ts:71](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[MetaRegistry](_metaregistry_.metaregistry.md)*

## Properties

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Defined in [MetaRegistry.ts:71](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L71)*

## Methods

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Defined in [MetaRegistry.ts:129](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Defined in [MetaRegistry.ts:207](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringAt

▸ **stringAt**(`index`: StringIndex): *string*

*Defined in [MetaRegistry.ts:113](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | StringIndex |

**Returns:** *string*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Defined in [MetaRegistry.ts:117](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Defined in [MetaRegistry.ts:121](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Defined in [MetaRegistry.ts:133](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L133)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› |  {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:330](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L330)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:339](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L339)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:348](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L348)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:196](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:213](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Defined in [MetaRegistry.ts:125](https://github.com/polkadot-js/api/blob/b911bdbd2d/packages/api-contract/src/MetaRegistry.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*
