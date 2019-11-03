[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/getHeader"](_chain_getheader_.md)

# External module: "chain/getHeader"

## Index

### Variables

* [getHeader](_chain_getheader_.md#const-getheader)

## Variables

### `Const` getHeader

• **getHeader**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<HeaderExtended | undefined> => {
  return memo((hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    combineLatest([
      api.rpc.chain.getHeader(hash),
      api.query.session.validators.at(hash) as Observable<Vec<AccountId>>
    ]).pipe(
      map(([header, validators]): HeaderExtended =>
        new HeaderExtended(header, validators)
      ),
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        of()
      ),
      drr()
    ));
}, true)

*Defined in [chain/getHeader.ts:30](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/chain/getHeader.ts#L30)*

**`name`** bestNumberFinalized

**`param`** A block hash as U8 array or string.

**`returns`** An array containing the block header and the block author

**`description`** Get a specific block header and extend it with the author

**`example`** 
<BR>

```javascript
const { author, number } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${number} was authored by ${author}`);
```
