[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/bestNumberLag"](_chain_bestnumberlag_.md)

# External module: "chain/bestNumberLag"

## Index

### Variables

* [bestNumberLag](_chain_bestnumberlag_.md#const-bestnumberlag)

## Variables

### `Const` bestNumberLag

• **bestNumberLag**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  const bestNumberCall = bestNumber(api);
  const bestNumberFinalizedCall = bestNumberFinalized(api);

  return (): Observable<BlockNumber> =>
    combineLatest([
      bestNumberCall(),
      bestNumberFinalizedCall()
    ]).pipe(
      map(([bestNumber, bestNumberFinalized]): BlockNumber =>
        createType('BlockNumber', bestNumber.sub(bestNumberFinalized))
      ),
      drr()
    );
}, true)

*Defined in [chain/bestNumberLag.ts:29](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/chain/bestNumberLag.ts#L29)*

**`name`** bestNumberLag

**`returns`** A number of blocks

**`description`** Calculates the lag between finalized head and best head

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalized is ${lag} blocks behind head`);
});
```
