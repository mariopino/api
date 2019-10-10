[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["ContractRegistry"](../modules/_contractregistry_.md) › [ContractRegistry](_contractregistry_.contractregistry.md)

# Class: ContractRegistry

## Hierarchy

* [MetaRegistry](_metaregistry_.metaregistry.md)

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
* [convertMethod](_contractregistry_.contractregistry.md#convertmethod)
* [convertStorage](_contractregistry_.contractregistry.md#convertstorage)
* [convertStorageLayout](_contractregistry_.contractregistry.md#convertstoragelayout)
* [convertStorageRange](_contractregistry_.contractregistry.md#convertstoragerange)
* [convertStorageStruct](_contractregistry_.contractregistry.md#convertstoragestruct)
* [convertType](_contractregistry_.contractregistry.md#converttype)
* [createMethod](_contractregistry_.contractregistry.md#createmethod)
* [hasTypeDefAt](_contractregistry_.contractregistry.md#hastypedefat)
* [setTypeDefAtIndex](_contractregistry_.contractregistry.md#settypedefatindex)
* [stringAt](_contractregistry_.contractregistry.md#stringat)
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
* [validateMethods](_contractregistry_.contractregistry.md#validatemethods)

## Constructors

###  constructor

\+ **new ContractRegistry**(`__namedParameters`: object): *[ContractRegistry](_contractregistry_.contractregistry.md)*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[constructor](_metaregistry_.metaregistry.md#constructor)*

*Defined in [MetaRegistry.ts:67](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractRegistry](_contractregistry_.contractregistry.md)*

## Properties

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefs](_metaregistry_.metaregistry.md#typedefs)*

*Defined in [MetaRegistry.ts:67](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L67)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *[ContractABI](../interfaces/_types_.contractabi.md)*

*Defined in [ContractRegistry.ts:96](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABI](../interfaces/_types_.contractabi.md)*

___

###  convertArgs

▸ **convertArgs**(`args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *any[]*

*Defined in [ContractRegistry.ts:103](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: [ContractABIMethodPre](../interfaces/_types_.contractabimethodpre.md)[]): *[ContractABIMethod](../interfaces/_types_.contractabimethod.md)[]*

*Defined in [ContractRegistry.ts:124](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | [ContractABIMethodPre](../interfaces/_types_.contractabimethodpre.md)[] |

**Returns:** *[ContractABIMethod](../interfaces/_types_.contractabimethod.md)[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

*Defined in [ContractRegistry.ts:112](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

___

###  convertEvent

▸ **convertEvent**(`__namedParameters`: object): *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

*Defined in [ContractRegistry.ts:141](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

___

###  convertMethod

▸ **convertMethod**(`__namedParameters`: object): *[ContractABIMethod](../interfaces/_types_.contractabimethod.md)*

*Defined in [ContractRegistry.ts:132](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIMethod](../interfaces/_types_.contractabimethod.md)*

___

###  convertStorage

▸ **convertStorage**(`storage`: [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre)): *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

*Defined in [ContractRegistry.ts:147](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre) |

**Returns:** *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre)): *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

*Defined in [ContractRegistry.ts:151](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre) |

**Returns:** *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

*Defined in [ContractRegistry.ts:169](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

___

###  convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: object): *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

*Defined in [ContractRegistry.ts:159](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

___

###  convertType

▸ **convertType**(`__namedParameters`: object): *TypeDef*

*Defined in [ContractRegistry.ts:107](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *TypeDef*

___

###  createMethod

▸ **createMethod**(`name`: string, `method`: Partial‹[ContractABIMethod](../interfaces/_types_.contractabimethod.md)› & [ContractABIMethodBase](../interfaces/_types_.contractabimethodbase.md)): *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

*Defined in [ContractRegistry.ts:63](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`method` | Partial‹[ContractABIMethod](../interfaces/_types_.contractabimethod.md)› & [ContractABIMethodBase](../interfaces/_types_.contractabimethodbase.md) |

**Returns:** *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

___

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[hasTypeDefAt](_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [MetaRegistry.ts:125](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [MetaRegistry.ts:200](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringAt

▸ **stringAt**(`index`: StringIndex): *string*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[stringAt](_metaregistry_.metaregistry.md#stringat)*

*Defined in [MetaRegistry.ts:109](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | StringIndex |

**Returns:** *string*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[stringsAt](_metaregistry_.metaregistry.md#stringsat)*

*Defined in [MetaRegistry.ts:113](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeAt](_metaregistry_.metaregistry.md#typeat)*

*Defined in [MetaRegistry.ts:117](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefAt](_metaregistry_.metaregistry.md#typedefat)*

*Defined in [MetaRegistry.ts:129](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L129)*

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

*Defined in [MetaRegistry.ts:317](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L317)*

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

*Defined in [MetaRegistry.ts:326](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L326)*

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

*Defined in [MetaRegistry.ts:335](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L335)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [MetaRegistry.ts:189](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L189)*

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

*Defined in [MetaRegistry.ts:206](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typesAt](_metaregistry_.metaregistry.md#typesat)*

*Defined in [MetaRegistry.ts:121](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/MetaRegistry.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md)): *void*

*Defined in [ContractRegistry.ts:52](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *void*

*Defined in [ContractRegistry.ts:16](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Defined in [ContractRegistry.ts:28](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*

___

###  validateMethods

▸ **validateMethods**(`__namedParameters`: object): *void*

*Defined in [ContractRegistry.ts:38](https://github.com/polkadot-js/api/blob/a207348c13/packages/api-contract/src/ContractRegistry.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*
