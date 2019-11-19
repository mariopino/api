[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/extrinsics/fromMetadata/createUnchecked"](_decorated_extrinsics_frommetadata_createunchecked_.md)

# External module: "Decorated/extrinsics/fromMetadata/createUnchecked"

## Index

### Functions

* [createDescriptor](_decorated_extrinsics_frommetadata_createunchecked_.md#createdescriptor)

## Functions

###  createDescriptor

▸ **createDescriptor**(`section`: string, `sectionIndex`: number, `methodIndex`: number, `callMetadata`: FunctionMetadataLatest): *CallFunction*

*Defined in [Decorated/extrinsics/fromMetadata/createUnchecked.ts:20](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/metadata/src/Decorated/extrinsics/fromMetadata/createUnchecked.ts#L20)*

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
