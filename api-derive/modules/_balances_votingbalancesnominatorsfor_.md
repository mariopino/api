[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["balances/votingBalancesNominatorsFor"](_balances_votingbalancesnominatorsfor_.md)

# External module: "balances/votingBalancesNominatorsFor"

## Index

### Variables

* [votingBalancesNominatorsFor](_balances_votingbalancesnominatorsfor_.md#const-votingbalancesnominatorsfor)

## Variables

### `Const` votingBalancesNominatorsFor

• **votingBalancesNominatorsFor**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (address: AccountId | AccountIndex | Address | string) => Observable<DerivedBalances[]> => {
  const infoCall = info(api);

  return memo((address: AccountId | AccountIndex | Address | string): Observable<DerivedBalances[]> => {
    return infoCall(address).pipe(
      switchMap(({ accountId }): Observable<AccountId[]> =>
        accountId
          ? (api.query.staking.nominatorsFor<Vec<AccountId>>(accountId))
          : of([] as AccountId[])
      ),
      switchMap(votingBalances(api)),
      drr()
    );
  });
}, true)

*Defined in [balances/votingBalancesNominatorsFor.ts:17](https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/balances/votingBalancesNominatorsFor.ts#L17)*
