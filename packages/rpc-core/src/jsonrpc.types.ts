// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Vec } from '@polkadot/types/codec';
import { Bytes, Metadata, StorageData, StorageKey, Text, u64 } from '@polkadot/types';
import { AccountId, BlockNumber, Extrinsic, Hash, Header, Index, SignedBlock } from '@polkadot/types/interfaces/runtime';
import { ContractCallRequest, ContractExecResult } from '@polkadot/types/interfaces/contracts';
import { ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, NetworkState, PeerInfo, RpcMethods, RuntimeDispatchInfo, RuntimeVersion, StorageChangeSet } from '@polkadot/types/interfaces/rpc';
import { Codec, IExtrinsic } from '@polkadot/types/types';

export interface RpcInterface {
  account: {
    nextIndex(accountId: AccountId | Uint8Array | string): Observable<Index>;
  };
  author: {
    insertKey(keyType: Text | string, suri: Text | string, publicKey: Bytes | Uint8Array | string): Observable<Bytes>;
    pendingExtrinsics(): Observable<Vec<Extrinsic>>;
    removeExtrinsic(bytesOrHash: (ExtrinsicOrHash)[]): Observable<Vec<Hash>>;
    rotateKeys(): Observable<Bytes>;
    submitAndWatchExtrinsic(extrinsic: IExtrinsic): Observable<ExtrinsicStatus>;
    submitExtrinsic(extrinsic: IExtrinsic): Observable<Hash>;
  };
  chain: {
    getBlock(hash?: Hash | Uint8Array | string): Observable<SignedBlock>;
    getBlockHash(blockNumber?: BlockNumber | Uint8Array | number | string): Observable<Hash>;
    getFinalizedHead(): Observable<Hash>;
    getHeader(hash?: Hash | Uint8Array | string): Observable<Header>;
    subscribeFinalizedHeads(): Observable<Header>;
    subscribeNewHeads(): Observable<Header>;
  };
  contracts: {
    call(callRequest: ContractCallRequest, at?: Hash | Uint8Array | string): Observable<ContractExecResult>;
  };
  payment: {
    queryInfo(extrinsic: Bytes | Uint8Array | string, hash?: Hash | Uint8Array | string): Observable<RuntimeDispatchInfo>;
  };
  rpc: {
    methods(): Observable<RpcMethods>;
  };
  state: {
    call(method: Text | string, data: Bytes | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Bytes>;
    getChildKeys(childStorageKey: any, key: any, block?: Hash | Uint8Array | string): Observable<Vec<StorageKey>>;
    getChildStorage(childStorageKey: any, key: any, block?: Hash | Uint8Array | string): Observable<StorageData>;
    getChildStorageHash(childStorageKey: any, key: any, block?: Hash | Uint8Array | string): Observable<Hash>;
    getChildStorageSize(childStorageKey: any, key: any, block?: Hash | Uint8Array | string): Observable<u64>;
    getKeys(key: any, block?: Hash | Uint8Array | string): Observable<Vec<StorageKey>>;
    getMetadata(block?: Hash | Uint8Array | string): Observable<Metadata>;
    getRuntimeVersion(hash?: Hash | Uint8Array | string): Observable<RuntimeVersion>;
    getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;
    getStorageHash(key: any, block?: Hash | Uint8Array | string): Observable<Hash>;
    getStorageSize(key: any, block?: Hash | Uint8Array | string): Observable<u64>;
    queryStorage(keys: (any)[], startBlock: Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Vec<StorageChangeSet>>;
    subscribeRuntimeVersion(): Observable<RuntimeVersion>;
    subscribeStorage<T = Codec[]>(keys: any[]): Observable<T>;
  };
  system: {
    chain(): Observable<Text>;
    health(): Observable<Health>;
    name(): Observable<Text>;
    networkState(): Observable<NetworkState>;
    peers(): Observable<Vec<PeerInfo>>;
    properties(): Observable<ChainProperties>;
    version(): Observable<Text>;
  };
}
