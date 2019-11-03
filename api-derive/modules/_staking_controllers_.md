[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/controllers"](_staking_controllers_.md)

# External module: "staking/controllers"

## Index

### Variables

* [controllers](_staking_controllers_.md#const-controllers)

## Variables

### `Const` controllers

• **controllers**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<[AccountId[], Option<AccountId>[]]> => {
  return memo((): Observable<[AccountId[], Option<AccountId>[]]> =>
    api.query.staking.validators<[AccountId[]] & Codec>().pipe(
      switchMap(([stashIds]): Observable<[AccountId[], Option<AccountId>[]]> =>
        combineLatest([
          of(stashIds),
          // for V2, don't return all the controllers, we call bonded at a later point
          api.consts.session
            ? of([])
            : api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
        ])
      ),
      drr()
    ));
}, true)

*Defined in [staking/controllers.ts:18](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/staking/controllers.ts#L18)*

**`description`** From the list of stash accounts, retrieve the list of controllers
