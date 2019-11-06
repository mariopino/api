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

*Defined in [Metadata/util/testUtil.ts:18](https://github.com/polkadot-js/api/blob/8cc256fdcf/packages/types/src/Metadata/util/testUtil.ts#L18)*

Given the static `rpcData` and the `staticSubstrate` JSON file, Metadata
should decode `rpcData` and output `staticSubstrate`.

**Type parameters:**

▪ **Modules**: *[Codec](../interfaces/_types_.codec.md)*

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

*Defined in [Metadata/util/testUtil.ts:54](https://github.com/polkadot-js/api/blob/8cc256fdcf/packages/types/src/Metadata/util/testUtil.ts#L54)*

Given a Metadata, no type should throw when given its fallback value.

**Parameters:**

Name | Type |
------ | ------ |
`rpcData` | string |

**Returns:** *void*

___

###  toLatest

▸ **toLatest**<**Modules**>(`version`: number, `rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:38](https://github.com/polkadot-js/api/blob/8cc256fdcf/packages/types/src/Metadata/util/testUtil.ts#L38)*

Given a `version`, MetadataLatest and MetadataV{version} should output the same
unique types.

**Type parameters:**

▪ **Modules**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |

**Returns:** *void*
