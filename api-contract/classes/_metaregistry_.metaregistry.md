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

*Defined in [MetaRegistry.ts:67](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[MetaRegistry](_metaregistry_.metaregistry.md)*

## Properties

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Defined in [MetaRegistry.ts:67](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L67)*

## Methods

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Defined in [MetaRegistry.ts:125](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Defined in [MetaRegistry.ts:200](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringAt

▸ **stringAt**(`index`: StringIndex): *string*

*Defined in [MetaRegistry.ts:109](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | StringIndex |

**Returns:** *string*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Defined in [MetaRegistry.ts:113](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Defined in [MetaRegistry.ts:117](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Defined in [MetaRegistry.ts:129](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L129)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› |  {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:317](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:326](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L326)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:335](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L335)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:189](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:206](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Defined in [MetaRegistry.ts:121](https://github.com/polkadot-js/api/blob/e27b35cd9f/packages/api-contract/src/MetaRegistry.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*
