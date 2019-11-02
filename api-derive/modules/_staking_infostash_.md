[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/infoStash"](_staking_infostash_.md)

# External module: "staking/infoStash"

## Index

### Variables

* [infoStash](_staking_infostash_.md#const-infostash)

## Variables

### `Const` infoStash

• **infoStash**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (stashId: AccountId) => Observable<DerivedStakingStash> => {
  return memo((stashId: AccountId): Observable<DerivedStakingStash> => {
    return (
      api.consts.session
        ? retrieveV2(api, stashId)
        : retrieveV1(api, stashId)
    ).pipe(
      map((result): DerivedStakingStash => parse(stashId, result)),
      drr()
    );
  });
}, true)

*Defined in [staking/infoStash.ts:55](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/staking/infoStash.ts#L55)*
