[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/registry"](../modules/_codec_create_registry_.md) › [TypeRegistry](_codec_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Index

### Properties

* [defaultRegistry](_codec_create_registry_.typeregistry.md#static-defaultregistry)

### Methods

* [get](_codec_create_registry_.typeregistry.md#get)
* [getDefinition](_codec_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_codec_create_registry_.typeregistry.md#getorthrow)
* [hasClass](_codec_create_registry_.typeregistry.md#hasclass)
* [hasDef](_codec_create_registry_.typeregistry.md#hasdef)
* [hasType](_codec_create_registry_.typeregistry.md#hastype)
* [register](_codec_create_registry_.typeregistry.md#register)

## Properties

### `Static` defaultRegistry

▪ **defaultRegistry**: *[TypeRegistry](_codec_create_registry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/create/registry.ts:12](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L12)*

## Methods

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

*Defined in [codec/create/registry.ts:60](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L60)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [codec/create/registry.ts:82](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹T›*

*Defined in [codec/create/registry.ts:86](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L86)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [codec/create/registry.ts:96](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [codec/create/registry.ts:100](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [codec/create/registry.ts:104](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Defined in [codec/create/registry.ts:18](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Defined in [codec/create/registry.ts:21](https://github.com/polkadot-js/api/blob/fadb1ff/packages/types/src/codec/create/registry.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*
