[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["balances/all"](_balances_all_.md)

# External module: "balances/all"

## Index

### Variables

* [all](_balances_all_.md#const-all)

## Variables

### `Const` all

• **all**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DerivedBalances> => {
  const bestNumberCall = bestNumber(api);
  const infoCall = info(api);

  return memo((address: AccountIndex | AccountId | Address | string): Observable<DerivedBalances> => {
    return infoCall(address).pipe(
      switchMap(({ accountId }): Observable<Result> =>
        (accountId
          ? combineLatest([
            of(accountId),
            bestNumberCall(),
            queryBalances(api, accountId),
            // FIXME This is having issues with Kusama, only use accountNonce atm
            // api.rpc.account && api.rpc.account.nextIndex
            //   ? api.rpc.account.nextIndex(accountId)
            //   // otherwise we end up with this: type 'Codec | Index' is not assignable to type 'Index'.
            //   : api.query.system.accountNonce<Index>(accountId)
            api.query.system.accountNonce<Index>(accountId)
          ])
          : of([createType('AccountId'), createType('BlockNumber'), [createType('Balance'), createType('Balance'), createType('Vec<BalanceLock>'), createType('Option<VestingSchedule>', null)], createType('Index')])
        )
      ),
      map(calcBalances),
      drr()
    );
  });
}, true)

*Defined in [balances/all.ts:80](https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/balances/all.ts#L80)*

**`name`** all

**`param`** An accounts Id in different formats.

**`returns`** An object containing the results of various balance queries

**`example`** 
<BR>

```javascript
const ALICE = 'F7Hs';

api.derive.balances.all(ALICE, ({ accountId, lockedBalance }) => {
  console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
});
```
