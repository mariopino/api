(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{467:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"json-rpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[e._v("#")]),e._v(" JSON-RPC")]),e._v(" "),s("p",[e._v("The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#account"}},[e._v("account")])])])]),e._v(" "),s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#author"}},[e._v("author")])])])]),e._v(" "),s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#chain"}},[e._v("chain")])])])]),e._v(" "),s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#contracts"}},[e._v("contracts")])])])]),e._v(" "),s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#rpc"}},[e._v("rpc")])])])]),e._v(" "),s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#state"}},[e._v("state")])])])]),e._v(" "),s("li",[s("p",[s("strong",[s("a",{attrs:{href:"#system"}},[e._v("system")])])])])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[e._v("#")]),e._v(" account")]),e._v(" "),s("p",[s("em",[e._v("(Optional) Methods that retrieves account-specific information")])]),e._v(" "),s("h3",{attrs:{id:"nextindex-accountid-accountid-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nextindex-accountid-accountid-index"}},[e._v("#")]),e._v(" nextIndex(accountId: "),s("code",[e._v("AccountId")]),e._v("): "),s("code",[e._v("Index")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": account_nextIndex")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.account.nextIndex")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the next accountIndex as available on the node")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[e._v("#")]),e._v(" author")]),e._v(" "),s("p",[s("em",[e._v("Authoring of network items")])]),e._v(" "),s("h3",{attrs:{id:"insertkey-keytype-text-suri-text-publickey-bytes-bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insertkey-keytype-text-suri-text-publickey-bytes-bytes"}},[e._v("#")]),e._v(" insertKey(keyType: "),s("code",[e._v("Text")]),e._v(", suri: "),s("code",[e._v("Text")]),e._v(", publicKey: "),s("code",[e._v("Bytes")]),e._v("): "),s("code",[e._v("Bytes")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": author_insertKey")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.author.insertKey")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Insert a key into the keystore.")])]),e._v(" "),s("h3",{attrs:{id:"pendingextrinsics-vec-extrinsic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pendingextrinsics-vec-extrinsic"}},[e._v("#")]),e._v(" pendingExtrinsics(): "),s("code",[e._v("Vec<Extrinsic>")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": author_pendingExtrinsics")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.author.pendingExtrinsics")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Returns all pending extrinsics, potentially grouped by sender")])]),e._v(" "),s("h3",{attrs:{id:"removeextrinsic-bytesorhash-vec-extrinsicorhash-vec-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeextrinsic-bytesorhash-vec-extrinsicorhash-vec-hash"}},[e._v("#")]),e._v(" removeExtrinsic(bytesOrHash: "),s("code",[e._v("Vec<ExtrinsicOrHash>")]),e._v("): "),s("code",[e._v("Vec<Hash>")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": author_removeExtrinsic")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.author.removeExtrinsic")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Remove given extrinsic from the pool and temporarily ban it to prevent reimporting")])]),e._v(" "),s("h3",{attrs:{id:"rotatekeys-bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rotatekeys-bytes"}},[e._v("#")]),e._v(" rotateKeys(): "),s("code",[e._v("Bytes")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": author_rotateKeys")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.author.rotateKeys")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Generate new session keys and returns the corresponding public keys")])]),e._v(" "),s("h3",{attrs:{id:"submitandwatchextrinsic-extrinsic-extrinsic-extrinsicstatus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submitandwatchextrinsic-extrinsic-extrinsic-extrinsicstatus"}},[e._v("#")]),e._v(" submitAndWatchExtrinsic(extrinsic: "),s("code",[e._v("Extrinsic")]),e._v("): "),s("code",[e._v("ExtrinsicStatus")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": author_submitAndWatchExtrinsic")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.author.submitAndWatchExtrinsic")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Submit and subscribe to watch an extrinsic until unsubscribed")])]),e._v(" "),s("h3",{attrs:{id:"submitextrinsic-extrinsic-extrinsic-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submitextrinsic-extrinsic-extrinsic-hash"}},[e._v("#")]),e._v(" submitExtrinsic(extrinsic: "),s("code",[e._v("Extrinsic")]),e._v("): "),s("code",[e._v("Hash")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": author_submitExtrinsic")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.author.submitExtrinsic")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Submit a fully formatted extrinsic for block inclusion")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chain"}},[e._v("#")]),e._v(" chain")]),e._v(" "),s("p",[s("em",[e._v("Retrieval of chain data")])]),e._v(" "),s("h3",{attrs:{id:"getblock-hash-hash-signedblock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getblock-hash-hash-signedblock"}},[e._v("#")]),e._v(" getBlock(hash?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("SignedBlock")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": chain_getBlock")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.chain.getBlock")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Get header and body of a relay chain block")])]),e._v(" "),s("h3",{attrs:{id:"getblockhash-blocknumber-blocknumber-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getblockhash-blocknumber-blocknumber-hash"}},[e._v("#")]),e._v(" getBlockHash(blockNumber?: "),s("code",[e._v("BlockNumber")]),e._v("): "),s("code",[e._v("Hash")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": chain_getBlockHash")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.chain.getBlockHash")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Get the block hash for a specific block")])]),e._v(" "),s("h3",{attrs:{id:"getfinalizedhead-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getfinalizedhead-hash"}},[e._v("#")]),e._v(" getFinalizedHead(): "),s("code",[e._v("Hash")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": chain_getFinalizedHead")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.chain.getFinalizedHead")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Get hash of the last finalized block in the canon chain")])]),e._v(" "),s("h3",{attrs:{id:"getheader-hash-hash-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getheader-hash-hash-header"}},[e._v("#")]),e._v(" getHeader(hash?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Header")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": chain_getHeader")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.chain.getHeader")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the header for a specific block")])]),e._v(" "),s("h3",{attrs:{id:"subscribefinalizedheads-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribefinalizedheads-header"}},[e._v("#")]),e._v(" subscribeFinalizedHeads(): "),s("code",[e._v("Header")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": chain_subscribeFinalizedHeads")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.chain.subscribeFinalizedHeads")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the best finalized header via subscription")])]),e._v(" "),s("h3",{attrs:{id:"subscribenewheads-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribenewheads-header"}},[e._v("#")]),e._v(" subscribeNewHeads(): "),s("code",[e._v("Header")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": chain_subscribeNewHeads")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.chain.subscribeNewHeads")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the best header via subscription")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[e._v("#")]),e._v(" contracts")]),e._v(" "),s("p",[s("em",[e._v("(Optional) Methods that performs actions on contracts")])]),e._v(" "),s("h3",{attrs:{id:"call-callrequest-contractcallrequest-at-hash-contractexecresult"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-callrequest-contractcallrequest-at-hash-contractexecresult"}},[e._v("#")]),e._v(" call(callRequest: "),s("code",[e._v("ContractCallRequest")]),e._v(", at?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("ContractExecResult")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": contracts_call")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.contracts.call")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Executes a call to a contract")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"rpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[e._v("#")]),e._v(" rpc")]),e._v(" "),s("p",[s("em",[e._v("Retrieves information about the RPC endpoints")])]),e._v(" "),s("h3",{attrs:{id:"methods-rpcmethods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods-rpcmethods"}},[e._v("#")]),e._v(" methods(): "),s("code",[e._v("RpcMethods")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": rpc_methods")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.rpc.methods")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the list of RPC methods that are exposed by the node")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" state")]),e._v(" "),s("p",[s("em",[e._v("Query of state")])]),e._v(" "),s("h3",{attrs:{id:"call-method-text-data-bytes-block-hash-bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-method-text-data-bytes-block-hash-bytes"}},[e._v("#")]),e._v(" call(method: "),s("code",[e._v("Text")]),e._v(", data: "),s("code",[e._v("Bytes")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Bytes")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_call")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.call")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Perform a call to a builtin on the chain")])]),e._v(" "),s("h3",{attrs:{id:"getchildkeys-childstoragekey-storagekey-key-storagekey-block-hash-vec-storagekey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getchildkeys-childstoragekey-storagekey-key-storagekey-block-hash-vec-storagekey"}},[e._v("#")]),e._v(" getChildKeys(childStorageKey: "),s("code",[e._v("StorageKey")]),e._v(", key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Vec<StorageKey>")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getChildKeys")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildKeys")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the keys with prefix of a specific child storage")])]),e._v(" "),s("h3",{attrs:{id:"getchildstorage-childstoragekey-storagekey-key-storagekey-block-hash-storagedata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getchildstorage-childstoragekey-storagekey-key-storagekey-block-hash-storagedata"}},[e._v("#")]),e._v(" getChildStorage(childStorageKey: "),s("code",[e._v("StorageKey")]),e._v(", key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("StorageData")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getChildStorage")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildStorage")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the child storage for a key")])]),e._v(" "),s("h3",{attrs:{id:"getchildstoragehash-childstoragekey-storagekey-key-storagekey-block-hash-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getchildstoragehash-childstoragekey-storagekey-key-storagekey-block-hash-hash"}},[e._v("#")]),e._v(" getChildStorageHash(childStorageKey: "),s("code",[e._v("StorageKey")]),e._v(", key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Hash")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getChildStorageHash")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildStorageHash")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the child storage hash")])]),e._v(" "),s("h3",{attrs:{id:"getchildstoragesize-childstoragekey-storagekey-key-storagekey-block-hash-u64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getchildstoragesize-childstoragekey-storagekey-key-storagekey-block-hash-u64"}},[e._v("#")]),e._v(" getChildStorageSize(childStorageKey: "),s("code",[e._v("StorageKey")]),e._v(", key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("u64")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getChildStorageSize")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildStorageSize")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the child storage size")])]),e._v(" "),s("h3",{attrs:{id:"getkeys-key-storagekey-block-hash-vec-storagekey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getkeys-key-storagekey-block-hash-vec-storagekey"}},[e._v("#")]),e._v(" getKeys(key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Vec<StorageKey>")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getKeys")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getKeys")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the keys with a certain prefix")])]),e._v(" "),s("h3",{attrs:{id:"getmetadata-block-hash-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getmetadata-block-hash-metadata"}},[e._v("#")]),e._v(" getMetadata(block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Metadata")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getMetadata")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getMetadata")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Returns the runtime metadata")])]),e._v(" "),s("h3",{attrs:{id:"getruntimeversion-hash-hash-runtimeversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getruntimeversion-hash-hash-runtimeversion"}},[e._v("#")]),e._v(" getRuntimeVersion(hash?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("RuntimeVersion")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getRuntimeVersion")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getRuntimeVersion")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Get the runtime version")])]),e._v(" "),s("h3",{attrs:{id:"getstorage-key-storagekey-block-hash-storagedata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstorage-key-storagekey-block-hash-storagedata"}},[e._v("#")]),e._v(" getStorage(key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("StorageData")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getStorage")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getStorage")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the storage for a key")])]),e._v(" "),s("h3",{attrs:{id:"getstoragehash-key-storagekey-block-hash-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstoragehash-key-storagekey-block-hash-hash"}},[e._v("#")]),e._v(" getStorageHash(key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Hash")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getStorageHash")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getStorageHash")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the storage hash")])]),e._v(" "),s("h3",{attrs:{id:"getstoragesize-key-storagekey-block-hash-u64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstoragesize-key-storagekey-block-hash-u64"}},[e._v("#")]),e._v(" getStorageSize(key: "),s("code",[e._v("StorageKey")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("u64")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_getStorageSize")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.getStorageSize")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the storage size")])]),e._v(" "),s("h3",{attrs:{id:"querystorage-keys-vec-storagekey-startblock-hash-block-hash-vec-storagechangeset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querystorage-keys-vec-storagekey-startblock-hash-block-hash-vec-storagechangeset"}},[e._v("#")]),e._v(" queryStorage(keys: "),s("code",[e._v("Vec<StorageKey>")]),e._v(", startBlock: "),s("code",[e._v("Hash")]),e._v(", block?: "),s("code",[e._v("Hash")]),e._v("): "),s("code",[e._v("Vec<StorageChangeSet>")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_queryStorage")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.queryStorage")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Query historical storage entries (by key) starting from a start block")])]),e._v(" "),s("h3",{attrs:{id:"subscriberuntimeversion-runtimeversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscriberuntimeversion-runtimeversion"}},[e._v("#")]),e._v(" subscribeRuntimeVersion(): "),s("code",[e._v("RuntimeVersion")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_subscribeRuntimeVersion")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.subscribeRuntimeVersion")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the runtime version via subscription")])]),e._v(" "),s("h3",{attrs:{id:"subscribestorage-keys-vec-storagekey-storagechangeset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribestorage-keys-vec-storagekey-storagechangeset"}},[e._v("#")]),e._v(" subscribeStorage(keys: "),s("code",[e._v("Vec<StorageKey>")]),e._v("): "),s("code",[e._v("StorageChangeSet")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": state_subscribeStorage")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.state.subscribeStorage")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Subscribes to storage changes for the provided keys")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[e._v("#")]),e._v(" system")]),e._v(" "),s("p",[s("em",[e._v("Calls to retrieve system info")])]),e._v(" "),s("h3",{attrs:{id:"chain-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chain-text"}},[e._v("#")]),e._v(" chain(): "),s("code",[e._v("Text")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_chain")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.chain")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the chain")])]),e._v(" "),s("h3",{attrs:{id:"health-health"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#health-health"}},[e._v("#")]),e._v(" health(): "),s("code",[e._v("Health")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_health")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.health")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Return health status of the node")])]),e._v(" "),s("h3",{attrs:{id:"name-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name-text"}},[e._v("#")]),e._v(" name(): "),s("code",[e._v("Text")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_name")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.name")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the node name")])]),e._v(" "),s("h3",{attrs:{id:"networkstate-networkstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networkstate-networkstate"}},[e._v("#")]),e._v(" networkState(): "),s("code",[e._v("NetworkState")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_networkState")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.networkState")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Returns current state of the network")])]),e._v(" "),s("h3",{attrs:{id:"peers-vec-peerinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#peers-vec-peerinfo"}},[e._v("#")]),e._v(" peers(): "),s("code",[e._v("Vec<PeerInfo>")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_peers")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.peers")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Returns the currently connected peers")])]),e._v(" "),s("h3",{attrs:{id:"properties-chainproperties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-chainproperties"}},[e._v("#")]),e._v(" properties(): "),s("code",[e._v("ChainProperties")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_properties")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.properties")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Get a custom set of properties as a JSON object, defined in the chain spec")])]),e._v(" "),s("h3",{attrs:{id:"version-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-text"}},[e._v("#")]),e._v(" version(): "),s("code",[e._v("Text")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("jsonrpc")]),e._v(": system_version")]),e._v(" "),s("li",[s("strong",[e._v("interface")]),e._v(": api.rpc.system.version")]),e._v(" "),s("li",[s("strong",[e._v("summary")]),e._v(": Retrieves the version of the node")])])])}),[],!1,null,null,null);t.default=r.exports}}]);