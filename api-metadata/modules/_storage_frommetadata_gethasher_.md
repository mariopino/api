[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["storage/fromMetadata/getHasher"](_storage_frommetadata_gethasher_.md)

# External module: "storage/fromMetadata/getHasher"

## Index

### Type aliases

* [HasherFunction](_storage_frommetadata_gethasher_.md#hasherfunction)
* [HasherInput](_storage_frommetadata_gethasher_.md#hasherinput)

### Functions

* [getHasher](_storage_frommetadata_gethasher_.md#gethasher)

## Type aliases

###  HasherFunction

Ƭ **HasherFunction**: *function*

*Defined in [storage/fromMetadata/getHasher.ts:11](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-metadata/src/storage/fromMetadata/getHasher.ts#L11)*

#### Type declaration:

▸ (`data`: [HasherInput](_storage_frommetadata_gethasher_.md#hasherinput)): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [HasherInput](_storage_frommetadata_gethasher_.md#hasherinput) |

___

###  HasherInput

Ƭ **HasherInput**: *string | Buffer | Uint8Array*

*Defined in [storage/fromMetadata/getHasher.ts:9](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-metadata/src/storage/fromMetadata/getHasher.ts#L9)*

## Functions

###  getHasher

▸ **getHasher**(`hasher?`: StorageHasher): *[HasherFunction](_storage_frommetadata_gethasher_.md#hasherfunction)*

*Defined in [storage/fromMetadata/getHasher.ts:25](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-metadata/src/storage/fromMetadata/getHasher.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`hasher?` | StorageHasher |

**Returns:** *[HasherFunction](_storage_frommetadata_gethasher_.md#hasherfunction)*
