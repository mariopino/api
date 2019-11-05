[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["imOnline/receivedHeartbeats"](_imonline_receivedheartbeats_.md)

# External module: "imOnline/receivedHeartbeats"

## Index

### Variables

* [receivedHeartbeats](_imonline_receivedheartbeats_.md#const-receivedheartbeats)

## Variables

### `Const` receivedHeartbeats

• **receivedHeartbeats**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedHeartbeats> => {
  const stakingOverviewvCall = stakingOverview(api);

  return (): Observable<DerivedHeartbeats> =>
    api.query.imOnline && api.query.imOnline.receivedHeartbeats && api.query.imOnline.authoredBlocks
      ? stakingOverviewvCall().pipe(
        switchMap(({ currentIndex, validators }): Observable<[AccountId[], Option<Bytes>[], u32[]]> =>
          combineLatest([
            of(validators),
            api.query.imOnline.receivedHeartbeats.multi<Option<Bytes>>(validators.map((_address, index): [SessionIndex, number] => [currentIndex, index])),
            api.query.imOnline.authoredBlocks.multi<u32>(validators.map((address): [SessionIndex, AccountId] => [currentIndex, address]))
          ])
        ),
        map(([validators, heartbeats, numBlocks]): DerivedHeartbeats =>
          validators.reduce((result: DerivedHeartbeats, validator, index): DerivedHeartbeats => ({
            ...result,
            [validator.toString()]: {
              blockCount: numBlocks[index],
              hasMessage: !heartbeats[index].isEmpty,
              isOnline: !heartbeats[index].isEmpty || numBlocks[index].gtn(0)
            }
          }), {})
        ),
        drr()
      )
      : of({});
}, true)

*Defined in [imOnline/receivedHeartbeats.ts:19](https://github.com/polkadot-js/api/blob/cba5710fec/packages/api-derive/src/imOnline/receivedHeartbeats.ts#L19)*

**`description`** Return a boolean array indicating whether the passed accounts had received heartbeats in the current session
