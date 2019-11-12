[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/util/testUtil"](_metadata_util_testutil_.md)

# External module: "Metadata/util/testUtil"

## Index

### Functions

* [decodeLatestSubstrate](_metadata_util_testutil_.md#decodelatestsubstrate)
* [defaultValues](_metadata_util_testutil_.md#defaultvalues)
* [toLatest](_metadata_util_testutil_.md#tolatest)

## Functions

###  decodeLatestSubstrate

▸ **decodeLatestSubstrate**<**Modules**>(`version`: number, `rpcData`: string, `staticSubstrate`: object): *void*

*Defined in [Metadata/util/testUtil.ts:20](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/metadata/src/Metadata/util/testUtil.ts#L20)*

Given the static `rpcData` and the `staticSubstrate` JSON file, Metadata
should decode `rpcData` and output `staticSubstrate`.

**Type parameters:**

▪ **Modules**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |
`staticSubstrate` | object |

**Returns:** *void*

___

###  defaultValues

▸ **defaultValues**(`rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:56](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/metadata/src/Metadata/util/testUtil.ts#L56)*

Given a Metadata, no type should throw when given its fallback value.

**Parameters:**

Name | Type |
------ | ------ |
`rpcData` | string |

**Returns:** *void*

___

###  toLatest

▸ **toLatest**<**Modules**>(`version`: number, `rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:40](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/metadata/src/Metadata/util/testUtil.ts#L40)*

Given a `version`, MetadataLatest and MetadataV{version} should output the same
unique types.

**Type parameters:**

▪ **Modules**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |

**Returns:** *void*
