[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsics/fromMetadata/createUnchecked"](_extrinsics_frommetadata_createunchecked_.md)

# External module: "extrinsics/fromMetadata/createUnchecked"

## Index

### Functions

* [createDescriptor](_extrinsics_frommetadata_createunchecked_.md#createdescriptor)

## Functions

###  createDescriptor

▸ **createDescriptor**(`section`: string, `sectionIndex`: number, `methodIndex`: number, `callMetadata`: FunctionMetadataLatest): *CallFunction*

*Defined in [extrinsics/fromMetadata/createUnchecked.ts:20](https://github.com/polkadot-js/api/blob/41cf32c808/packages/api-metadata/src/extrinsics/fromMetadata/createUnchecked.ts#L20)*

From the metadata of a function in the module's storage, generate the function
that will return the an [[CallFunction]].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`section` | string | Name of the module section. |
`sectionIndex` | number | Index of the module section in the modules array. |
`methodIndex` | number | Index of the method inside the section. |
`callMetadata` | FunctionMetadataLatest | Metadata of the call function.  |

**Returns:** *CallFunction*
