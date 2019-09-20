**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › [&quot;types&quot;](../modules/_types_.md) › [StorageEntryPromise](_types_.storageentrypromise.md)

# Interface: StorageEntryPromise

## Hierarchy

* StorageEntryBase‹Promise‹Codec›, Promise‹Hash›, Promise‹u64››

* [StorageEntryPromiseOverloads](_types_.storageentrypromiseoverloads.md)

  * **StorageEntryPromise**

## Callable

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹Codec›*

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹Codec›*

▸ <**T**>(`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹T›*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L102)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹T›*

▸ <**T**>(`callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L103)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:104](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L104)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: CodecArg, `arg2`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L105)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | CodecArg |
`arg2` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

## Index

### Properties

* [at](_types_.storageentrypromise.md#at)
* [creator](_types_.storageentrypromise.md#creator)
* [hash](_types_.storageentrypromise.md#hash)
* [key](_types_.storageentrypromise.md#key)
* [multi](_types_.storageentrypromise.md#multi)
* [size](_types_.storageentrypromise.md#size)

## Properties

###  at

• **at**: *function*

*Inherited from void*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L88)*

#### Type declaration:

▸ (`hash`: Hash | Uint8Array | string, `arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹Codec›*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | Hash &#124; Uint8Array &#124; string |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

___

###  creator

• **creator**: *StorageEntry*

*Inherited from void*

*Defined in [types.ts:89](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L89)*

___

###  hash

• **hash**: *function*

*Inherited from void*

*Defined in [types.ts:90](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L90)*

#### Type declaration:

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

___

###  key

• **key**: *function*

*Inherited from void*

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L91)*

#### Type declaration:

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

___

###  multi

• **multi**: *[StorageEntryPromiseMulti](_types_.storageentrypromisemulti.md)*

*Defined in [types.ts:115](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L115)*

___

###  size

• **size**: *function*

*Inherited from void*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/06d0c1f/packages/api/src/types.ts#L92)*

#### Type declaration:

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹u64›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |