[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/bestNumberFinalized"](_chain_bestnumberfinalized_.md)

# External module: "chain/bestNumberFinalized"

## Index

### Variables

* [bestNumberFinalized](_chain_bestnumberfinalized_.md#const-bestnumberfinalized)

## Variables

### `Const` bestNumberFinalized

• **bestNumberFinalized**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  return memo((): Observable<BlockNumber> =>
    api.rpc.chain.subscribeFinalizedHeads().pipe(
      map((header): BlockNumber => header.number.unwrap()),
      drr()
    )
  );
}, true)

*Defined in [chain/bestNumberFinalized.ts:26](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/chain/bestNumberFinalized.ts#L26)*

**`name`** bestNumberFinalized

**`returns`** A BlockNumber

**`description`** Get the latest finalized block number.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberFinalized((blockNumber) => {
  console.log(`the current finalized block is #${blockNumber}`);
});
```
