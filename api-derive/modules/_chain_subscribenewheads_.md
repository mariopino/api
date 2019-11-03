[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/subscribeNewHeads"](_chain_subscribenewheads_.md)

# External module: "chain/subscribeNewHeads"

## Index

### Variables

* [subscribeNewHeads](_chain_subscribenewheads_.md#const-subscribenewheads)

## Variables

### `Const` subscribeNewHeads

• **subscribeNewHeads**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<HeaderExtended> => {
  return memo((): Observable<HeaderExtended> =>
    combineLatest([
      api.rpc.chain.subscribeNewHeads(),
      api.query.session.validators<Vec<AccountId>>()
    ]).pipe(
      map(([header, validators]): HeaderExtended =>
        new HeaderExtended(header, validators)
      ),
      drr()
    ));
}, true)

*Defined in [chain/subscribeNewHeads.ts:28](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-derive/src/chain/subscribeNewHeads.ts#L28)*

**`name`** subscribeNewHeads

**`returns`** An array containing the block header and the block author

**`description`** An observable of the current block header and it's author

**`example`** 
<BR>

```javascript
api.derive.chain.subscribeNewHeads((header) => {
  console.log(`block #${header.number} was authored by ${header.author}`);
});
```
