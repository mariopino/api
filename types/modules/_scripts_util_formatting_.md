[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["scripts/util/formatting"](_scripts_util_formatting_.md)

# External module: "scripts/util/formatting"

## Index

### Variables

* [FOOTER](_scripts_util_formatting_.md#const-footer)
* [HEADER](_scripts_util_formatting_.md#const-header)

### Functions

* [createImportCode](_scripts_util_formatting_.md#createimportcode)
* [exportInterface](_scripts_util_formatting_.md#exportinterface)
* [exportType](_scripts_util_formatting_.md#exporttype)
* [formatBTreeMap](_scripts_util_formatting_.md#formatbtreemap)
* [formatCompact](_scripts_util_formatting_.md#formatcompact)
* [formatOption](_scripts_util_formatting_.md#formatoption)
* [formatResult](_scripts_util_formatting_.md#formatresult)
* [formatTuple](_scripts_util_formatting_.md#formattuple)
* [formatType](_scripts_util_formatting_.md#formattype)
* [formatVec](_scripts_util_formatting_.md#formatvec)
* [indent](_scripts_util_formatting_.md#indent)

## Variables

### `Const` FOOTER

• **FOOTER**: *"
"* = "
"

*Defined in [scripts/util/formatting.ts:12](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L12)*

___

### `Const` HEADER

• **HEADER**: *"// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

"* = "// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

"

*Defined in [scripts/util/formatting.ts:11](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L11)*

## Functions

###  createImportCode

▸ **createImportCode**(`header`: string, `checks`: object[]): *string*

*Defined in [scripts/util/formatting.ts:15](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`checks` | object[] |

**Returns:** *string*

___

###  exportInterface

▸ **exportInterface**(`name`: string, `base`: string, `body`: string): *string*

*Defined in [scripts/util/formatting.ts:26](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L26)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | "" |
`base` | string | - |
`body` | string | "" |

**Returns:** *string*

___

###  exportType

▸ **exportType**(`name`: string, `base`: string): *string*

*Defined in [scripts/util/formatting.ts:33](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | "" |
`base` | string | - |

**Returns:** *string*

___

###  formatBTreeMap

▸ **formatBTreeMap**(`key`: string, `val`: string): *string*

*Defined in [scripts/util/formatting.ts:40](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L40)*

Given the inner `K` & `V`, return a `BTreeMap<K, V>`  string

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`val` | string |

**Returns:** *string*

___

###  formatCompact

▸ **formatCompact**(`inner`: string): *string*

*Defined in [scripts/util/formatting.ts:47](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L47)*

Given the inner `T`, return a `Compact<T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inner` | string |

**Returns:** *string*

___

###  formatOption

▸ **formatOption**(`inner`: string): *string*

*Defined in [scripts/util/formatting.ts:61](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L61)*

Given the inner `T`, return a `Option<T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inner` | string |

**Returns:** *string*

___

###  formatResult

▸ **formatResult**(`innerOk`: string, `innerError`: string): *string*

*Defined in [scripts/util/formatting.ts:54](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L54)*

Given the inner `O` & `E`, return a `Result<O, E>`  string

**Parameters:**

Name | Type |
------ | ------ |
`innerOk` | string |
`innerError` | string |

**Returns:** *string*

___

###  formatTuple

▸ **formatTuple**(`inners`: string[]): *string*

*Defined in [scripts/util/formatting.ts:68](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L68)*

Given the inners `T[]`, return a `ITuple<...T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inners` | string[] |

**Returns:** *string*

___

###  formatType

▸ **formatType**(`type`: string | [TypeDef](../interfaces/_codec_create_types_.typedef.md), `imports`: [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md)): *string*

*Defined in [scripts/util/formatting.ts:82](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L82)*

Correctly format a given type

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; [TypeDef](../interfaces/_codec_create_types_.typedef.md) |
`imports` | [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md) |

**Returns:** *string*

___

###  formatVec

▸ **formatVec**(`inner`: string): *string*

*Defined in [scripts/util/formatting.ts:75](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L75)*

Given the inner `T`, return a `Vec<T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inner` | string |

**Returns:** *string*

___

###  indent

▸ **indent**(`n`: number, `char`: string): *function*

*Defined in [scripts/util/formatting.ts:127](https://github.com/polkadot-js/api/blob/41cf32c808/packages/types/src/scripts/util/formatting.ts#L127)*

Indent a string with `n` spaces before.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | number | - |
`char` | string | " " |

**Returns:** *function*

▸ (`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
