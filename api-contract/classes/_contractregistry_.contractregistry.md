[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["ContractRegistry"](../modules/_contractregistry_.md) › [ContractRegistry](_contractregistry_.contractregistry.md)

# Class: ContractRegistry

## Hierarchy

  ↳ [MetaRegistry](_metaregistry_.metaregistry.md)

  ↳ **ContractRegistry**

  ↳ [ContractAbi](_abi_.contractabi.md)

## Index

### Constructors

* [constructor](_contractregistry_.contractregistry.md#constructor)

### Properties

* [typeDefs](_contractregistry_.contractregistry.md#typedefs)

### Methods

* [convertAbi](_contractregistry_.contractregistry.md#convertabi)
* [convertArgs](_contractregistry_.contractregistry.md#convertargs)
* [convertConstructors](_contractregistry_.contractregistry.md#convertconstructors)
* [convertContract](_contractregistry_.contractregistry.md#convertcontract)
* [convertEvent](_contractregistry_.contractregistry.md#convertevent)
* [convertMessage](_contractregistry_.contractregistry.md#convertmessage)
* [convertStorage](_contractregistry_.contractregistry.md#convertstorage)
* [convertStorageLayout](_contractregistry_.contractregistry.md#convertstoragelayout)
* [convertStorageRange](_contractregistry_.contractregistry.md#convertstoragerange)
* [convertStorageStruct](_contractregistry_.contractregistry.md#convertstoragestruct)
* [convertType](_contractregistry_.contractregistry.md#converttype)
* [createMessage](_contractregistry_.contractregistry.md#createmessage)
* [hasTypeDefAt](_contractregistry_.contractregistry.md#hastypedefat)
* [setTypeDefAtIndex](_contractregistry_.contractregistry.md#settypedefatindex)
* [stringsAt](_contractregistry_.contractregistry.md#stringsat)
* [typeAt](_contractregistry_.contractregistry.md#typeat)
* [typeDefAt](_contractregistry_.contractregistry.md#typedefat)
* [typeDefForOption](_contractregistry_.contractregistry.md#typedefforoption)
* [typeDefForResult](_contractregistry_.contractregistry.md#typedefforresult)
* [typeDefForStruct](_contractregistry_.contractregistry.md#typedefforstruct)
* [typeDefFromMetaType](_contractregistry_.contractregistry.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_contractregistry_.contractregistry.md#typedeffrommetatypeat)
* [typesAt](_contractregistry_.contractregistry.md#typesat)
* [validateAbi](_contractregistry_.contractregistry.md#validateabi)
* [validateArgs](_contractregistry_.contractregistry.md#validateargs)
* [validateConstructors](_contractregistry_.contractregistry.md#validateconstructors)
* [validateMessages](_contractregistry_.contractregistry.md#validatemessages)

## Constructors

###  constructor

\+ **new ContractRegistry**(`json`: MetaRegistryJson): *[ContractRegistry](_contractregistry_.contractregistry.md)*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[constructor](_metaregistry_.metaregistry.md#constructor)*

*Overrides void*

*Defined in [MetaRegistry.ts:104](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | MetaRegistryJson |

**Returns:** *[ContractRegistry](_contractregistry_.contractregistry.md)*

## Properties

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Inherited from void*

*Defined in [MetaRegistry.ts:41](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L41)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *[ContractABI](../interfaces/_types_.contractabi.md)*

*Defined in [ContractRegistry.ts:141](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABI](../interfaces/_types_.contractabi.md)*

___

###  convertArgs

▸ **convertArgs**(`args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *any[]*

*Defined in [ContractRegistry.ts:148](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)[]): *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)[]*

*Defined in [ContractRegistry.ts:169](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)[] |

**Returns:** *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

*Defined in [ContractRegistry.ts:157](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

___

###  convertEvent

▸ **convertEvent**(`__namedParameters`: object): *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

*Defined in [ContractRegistry.ts:186](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

___

###  convertMessage

▸ **convertMessage**(`__namedParameters`: object): *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)*

*Defined in [ContractRegistry.ts:177](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)*

___

###  convertStorage

▸ **convertStorage**(`storage`: [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre)): *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

*Defined in [ContractRegistry.ts:192](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre) |

**Returns:** *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre)): *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

*Defined in [ContractRegistry.ts:196](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre) |

**Returns:** *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

*Defined in [ContractRegistry.ts:214](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

___

###  convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: object): *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

*Defined in [ContractRegistry.ts:204](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

___

###  convertType

▸ **convertType**(`__namedParameters`: object): *TypeDef*

*Defined in [ContractRegistry.ts:152](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *TypeDef*

___

###  createMessage

▸ **createMessage**(`name`: string, `message`: Partial‹[ContractABIMessage](../interfaces/_types_.contractabimessage.md)› & [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md)): *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

*Defined in [ContractRegistry.ts:108](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`message` | Partial‹[ContractABIMessage](../interfaces/_types_.contractabimessage.md)› & [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md) |

**Returns:** *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

___

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from void*

*Defined in [MetaRegistry.ts:92](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [MetaRegistry.ts:112](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from void*

*Defined in [MetaRegistry.ts:80](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from void*

*Defined in [MetaRegistry.ts:84](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from void*

*Defined in [MetaRegistry.ts:96](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L96)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› |  {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForOption](_metaregistry_.metaregistry.md#typedefforoption)*

*Defined in [MetaRegistry.ts:297](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L297)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForResult](_metaregistry_.metaregistry.md#typedefforresult)*

*Defined in [MetaRegistry.ts:306](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForStruct](_metaregistry_.metaregistry.md#typedefforstruct)*

*Defined in [MetaRegistry.ts:315](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L315)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [MetaRegistry.ts:172](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaTypeAt](_metaregistry_.metaregistry.md#typedeffrommetatypeat)*

*Defined in [MetaRegistry.ts:181](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from void*

*Defined in [MetaRegistry.ts:88](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/MetaRegistry.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md)): *void*

*Defined in [ContractRegistry.ts:95](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *void*

*Defined in [ContractRegistry.ts:56](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Defined in [ContractRegistry.ts:68](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*

___

###  validateMessages

▸ **validateMessages**(`__namedParameters`: object): *void*

*Defined in [ContractRegistry.ts:78](https://github.com/polkadot-js/api/blob/dc105e6b31/packages/api-contract/src/ContractRegistry.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*
