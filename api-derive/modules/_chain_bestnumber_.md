[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/bestNumber"](_chain_bestnumber_.md)

# External module: "chain/bestNumber"

## Index

### Variables

* [bestNumber](_chain_bestnumber_.md#const-bestnumber)

## Variables

### `Const` bestNumber

• **bestNumber**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  return memo((): Observable<BlockNumber> =>
    api.rpc.chain.subscribeNewHeads().pipe(
      map((header): BlockNumber => header.number.unwrap()),
      drr()
    ));
}, true)

*Defined in [chain/bestNumber.ts:25](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-derive/src/chain/bestNumber.ts#L25)*

**`name`** bestNumber

**`returns`** The latest block number.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((blockNumber) => {
  console.log(`the current best block is #${blockNumber}`);
});
```
