## JSON-RPC

The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.

- **[account](#account)**

- **[author](#author)**

- **[chain](#chain)**

- **[contracts](#contracts)**

- **[rpc](#rpc)**

- **[state](#state)**

- **[system](#system)**


___


### account

_(Optional) Methods that retrieves account-specific information_

### nextIndex(accountId: `AccountId`): `Index`
- **raw**: account_nextIndex
- **summary**: Retrieves the next accountIndex as available on the node

___


### author

_Authoring of network items_

### insertKey(keyType: `Text`, suri: `Text`, publicKey: `Bytes`): `Bytes`
- **raw**: author_insertKey
- **summary**: Insert a key into the keystore.

### pendingExtrinsics(): `Vec<Extrinsic>`
- **raw**: author_pendingExtrinsics
- **summary**: Returns all pending extrinsics, potentially grouped by sender

### removeExtrinsic(bytesOrHash: `Vec<ExtrinsicOrHash>`): `Vec<Hash>`
- **raw**: author_removeExtrinsic
- **summary**: Remove given extrinsic from the pool and temporarily ban it to prevent reimporting

### rotateKeys(): `Bytes`
- **raw**: author_rotateKeys
- **summary**: Generate new session keys and returns the corresponding public keys

### submitAndWatchExtrinsic(extrinsic: `Extrinsic`): `ExtrinsicStatus`
- **raw**: author_submitAndWatchExtrinsic
- **summary**: Submit and subscribe to watch an extrinsic until unsubscribed

### submitExtrinsic(extrinsic: `Extrinsic`): `Hash`
- **raw**: author_submitExtrinsic
- **summary**: Submit a fully formatted extrinsic for block inclusion

___


### chain

_Retrieval of chain data_

### getBlock(hash?: `Hash`): `SignedBlock`
- **raw**: chain_getBlock
- **summary**: Get header and body of a relay chain block

### getBlockHash(blockNumber?: `BlockNumber`): `Hash`
- **raw**: chain_getBlockHash
- **summary**: Get the block hash for a specific block

### getFinalizedHead(): `Hash`
- **raw**: chain_getFinalizedHead
- **summary**: Get hash of the last finalized block in the canon chain

### getHeader(hash?: `Hash`): `Header`
- **raw**: chain_getHeader
- **summary**: Retrieves the header for a specific block

### subscribeFinalizedHeads(): `Header`
- **raw**: chain_subscribeFinalizedHeads
- **summary**: Retrieves the best finalized header via subscription

### subscribeNewHeads(): `Header`
- **raw**: chain_subscribeNewHeads
- **summary**: Retrieves the best header via subscription

___


### contracts

_(Optional) Methods that performs actions on contracts_

### call(callRequest: `ContractCallRequest`, at?: `Hash`): `ContractExecResult`
- **raw**: contracts_call
- **summary**: Executes a call to a contract

___


### rpc

_Retrieves information about the RPC endpoints_

### methods(): `RpcMethods`
- **raw**: rpc_methods
- **summary**: Retrieves the list of RPC methods that are exposed by the node

___


### state

_Query of state_

### call(method: `Text`, data: `Bytes`, block?: `Hash`): `Bytes`
- **raw**: state_call
- **summary**: Perform a call to a builtin on the chain

### getChildKeys(childStorageKey: `StorageKey`, key: `StorageKey`, block?: `Hash`): `Vec<StorageKey>`
- **raw**: state_getChildKeys
- **summary**: Retrieves the keys with prefix of a specific child storage

### getChildStorage(childStorageKey: `StorageKey`, key: `StorageKey`, block?: `Hash`): `StorageData`
- **raw**: state_getChildStorage
- **summary**: Retrieves the child storage for a key

### getChildStorageHash(childStorageKey: `StorageKey`, key: `StorageKey`, block?: `Hash`): `Hash`
- **raw**: state_getChildStorageHash
- **summary**: Retrieves the child storage hash

### getChildStorageSize(childStorageKey: `StorageKey`, key: `StorageKey`, block?: `Hash`): `u64`
- **raw**: state_getChildStorageSize
- **summary**: Retrieves the child storage size

### getKeys(key: `StorageKey`, block?: `Hash`): `Vec<StorageKey>`
- **raw**: state_getKeys
- **summary**: Retrieves the keys with a certain prefix

### getMetadata(block?: `Hash`): `Metadata`
- **raw**: state_getMetadata
- **summary**: Returns the runtime metadata

### getRuntimeVersion(hash?: `Hash`): `RuntimeVersion`
- **raw**: state_getRuntimeVersion
- **summary**: Get the runtime version

### getStorage(key: `StorageKey`, block?: `Hash`): `StorageData`
- **raw**: state_getStorage
- **summary**: Retrieves the storage for a key

### getStorageHash(key: `StorageKey`, block?: `Hash`): `Hash`
- **raw**: state_getStorageHash
- **summary**: Retrieves the storage hash

### getStorageSize(key: `StorageKey`, block?: `Hash`): `u64`
- **raw**: state_getStorageSize
- **summary**: Retrieves the storage size

### queryStorage(keys: `Vec<StorageKey>`, startBlock: `Hash`, block?: `Hash`): `Vec<StorageChangeSet>`
- **raw**: state_queryStorage
- **summary**: Query historical storage entries (by key) starting from a start block

### subscribeRuntimeVersion(): `RuntimeVersion`
- **raw**: state_subscribeRuntimeVersion
- **summary**: Retrieves the runtime version via subscription

### subscribeStorage(keys: `Vec<StorageKey>`): `StorageChangeSet`
- **raw**: state_subscribeStorage
- **summary**: Subscribes to storage changes for the provided keys

___


### system

_Calls to retrieve system info_

### chain(): `Text`
- **raw**: system_chain
- **summary**: Retrieves the chain

### health(): `Health`
- **raw**: system_health
- **summary**: Return health status of the node

### name(): `Text`
- **raw**: system_name
- **summary**: Retrieves the node name

### networkState(): `NetworkState`
- **raw**: system_networkState
- **summary**: Returns current state of the network

### peers(): `Vec<PeerInfo>`
- **raw**: system_peers
- **summary**: Returns the currently connected peers

### properties(): `ChainProperties`
- **raw**: system_properties
- **summary**: Get a custom set of properties as a JSON object, defined in the chain spec

### version(): `Text`
- **raw**: system_version
- **summary**: Retrieves the version of the node
