[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/storage/fromMetadata/substrate"](_decorated_storage_frommetadata_substrate_.md)

# External module: "Decorated/storage/fromMetadata/substrate"

## Index

### Variables

* [authorityCount](_decorated_storage_frommetadata_substrate_.md#const-authoritycount)
* [authorityPrefix](_decorated_storage_frommetadata_substrate_.md#const-authorityprefix)
* [changesTrieConfig](_decorated_storage_frommetadata_substrate_.md#const-changestrieconfig)
* [childStorageKeyPrefix](_decorated_storage_frommetadata_substrate_.md#const-childstoragekeyprefix)
* [code](_decorated_storage_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_decorated_storage_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_decorated_storage_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` authorityCount

• **authorityCount**: *StorageEntry* =  createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:38](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L38)*

___

### `Const` authorityPrefix

• **authorityPrefix**: *StorageEntry* =  createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are stored.',
  type: 'u32'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:43](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L43)*

___

### `Const` changesTrieConfig

• **changesTrieConfig**: *StorageEntry* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:63](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L63)*

___

### `Const` childStorageKeyPrefix

• **childStorageKeyPrefix**: *StorageEntry* =  createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
  documentation: 'Prefix of child storage keys.',
  type: 'u32'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:68](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L68)*

___

### `Const` code

• **code**: *StorageEntry* =  createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:48](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L48)*

___

### `Const` extrinsicIndex

• **extrinsicIndex**: *StorageEntry* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:58](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L58)*

___

### `Const` heapPages

• **heapPages**: *StorageEntry* =  createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [Decorated/storage/fromMetadata/substrate.ts:53](https://github.com/polkadot-js/api/blob/b2daf7482f/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L53)*
