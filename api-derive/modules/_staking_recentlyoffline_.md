[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/recentlyOffline"](_staking_recentlyoffline_.md)

# External module: "staking/recentlyOffline"

## Index

### Variables

* [recentlyOffline](_staking_recentlyoffline_.md#const-recentlyoffline)

## Variables

### `Const` recentlyOffline

• **recentlyOffline**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedRecentlyOffline> => {
  return memo((): Observable<DerivedRecentlyOffline> =>
    (
      // TODO recentlyOffline  has been dropped for 2.x and replaced, figure out the
      // replacement as actually use and implement it
      api.query.staking.recentlyOffline
        ? api.query.staking.recentlyOffline<OfflineResult>()
        : of([] as unknown as OfflineResult)
    ).pipe(
      map(expandDerived),
      drr()
    )
  );
}, true)

*Defined in [staking/recentlyOffline.ts:38](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/staking/recentlyOffline.ts#L38)*

**`description`** Retrieve a keyed record of accounts recently reported to be offline
