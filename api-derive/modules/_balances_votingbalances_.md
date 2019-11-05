[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["balances/votingBalances"](_balances_votingbalances_.md)

# External module: "balances/votingBalances"

## Index

### Variables

* [votingBalances](_balances_votingbalances_.md#const-votingbalances)

## Variables

### `Const` votingBalances

• **votingBalances**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DerivedBalances[]> => {
  return (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DerivedBalances[]> =>
    (
      !addresses || !addresses.length
        ? of([] as DerivedBalances[])
        : combineLatest(addresses.map(all(api)))
    ).pipe(
      drr()
    );
}, true)

*Defined in [balances/votingBalances.ts:14](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/balances/votingBalances.ts#L14)*
