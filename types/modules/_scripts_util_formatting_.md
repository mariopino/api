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
* [formatCompact](_scripts_util_formatting_.md#formatcompact)
* [formatOption](_scripts_util_formatting_.md#formatoption)
* [formatTuple](_scripts_util_formatting_.md#formattuple)
* [formatType](_scripts_util_formatting_.md#formattype)
* [formatVec](_scripts_util_formatting_.md#formatvec)
* [indent](_scripts_util_formatting_.md#indent)

## Variables

### `Const` FOOTER

• **FOOTER**: *"
"* = "
"

*Defined in [scripts/util/formatting.ts:11](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L11)*

___

### `Const` HEADER

• **HEADER**: *"// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

"* = "// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

"

*Defined in [scripts/util/formatting.ts:10](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L10)*

## Functions

###  createImportCode

▸ **createImportCode**(`header`: string, `checks`: object[]): *string*

*Defined in [scripts/util/formatting.ts:14](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`checks` | object[] |

**Returns:** *string*

___

###  exportInterface

▸ **exportInterface**(`name`: string, `base`: string, `body`: string): *string*

*Defined in [scripts/util/formatting.ts:25](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L25)*

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

*Defined in [scripts/util/formatting.ts:32](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | "" |
`base` | string | - |

**Returns:** *string*

___

###  formatCompact

▸ **formatCompact**(`inner`: string): *string*

*Defined in [scripts/util/formatting.ts:39](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L39)*

Given the inner `T`, return a `Compact<T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inner` | string |

**Returns:** *string*

___

###  formatOption

▸ **formatOption**(`inner`: string): *string*

*Defined in [scripts/util/formatting.ts:46](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L46)*

Given the inner `T`, return a `Option<T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inner` | string |

**Returns:** *string*

___

###  formatTuple

▸ **formatTuple**(`inners`: string[]): *string*

*Defined in [scripts/util/formatting.ts:53](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L53)*

Given the inners `T[]`, return a `ITuple<...T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inners` | string[] |

**Returns:** *string*

___

###  formatType

▸ **formatType**(`type`: string, `imports`: [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md)): *string*

*Defined in [scripts/util/formatting.ts:67](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L67)*

Correctly format a given type

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`imports` | [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md) |

**Returns:** *string*

___

###  formatVec

▸ **formatVec**(`inner`: string): *string*

*Defined in [scripts/util/formatting.ts:60](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L60)*

Given the inner `T`, return a `Vec<T>` string

**Parameters:**

Name | Type |
------ | ------ |
`inner` | string |

**Returns:** *string*

___

###  indent

▸ **indent**(`n`: number, `char`: string): *function*

*Defined in [scripts/util/formatting.ts:107](https://github.com/polkadot-js/api/blob/739625c/packages/types/src/scripts/util/formatting.ts#L107)*

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
