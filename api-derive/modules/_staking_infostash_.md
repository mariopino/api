[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/infoStash"](_staking_infostash_.md)

# External module: "staking/infoStash"

## Index

### Variables

* [infoStash](_staking_infostash_.md#const-infostash)

## Variables

### `Const` infoStash

• **infoStash**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (stashId: AccountId) => Observable<DerivedStakingStash> => {
  const query = api.consts.session
    ? retrieveV2
    : retrieveV1;

  return (stashId: AccountId): Observable<DerivedStakingStash> =>
    query(api, stashId).pipe(
      map((result): DerivedStakingStash => parse(stashId, result)),
      drr()
    );
}, true)

*Defined in [staking/infoStash.ts:55](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/staking/infoStash.ts#L55)*
