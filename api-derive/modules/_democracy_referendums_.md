[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendums"](_democracy_referendums_.md)

# External module: "democracy/referendums"

## Index

### Variables

* [referendums](_democracy_referendums_.md#const-referendums)

## Variables

### `Const` referendums

• **referendums**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<Option<ReferendumInfoExtended>[]> => {
  const referendumInfosCall = referendumInfos(api);

  return memo((): Observable<Option<ReferendumInfoExtended>[]> =>
    (api.queryMulti([
      api.query.democracy.nextTally,
      api.query.democracy.referendumCount
    ]) as Observable<[ReferendumIndex?, ReferendumIndex?]>).pipe(
      switchMap(([nextTally, referendumCount]): Observable<Option<ReferendumInfoExtended>[]> =>
        referendumCount && nextTally && referendumCount.gt(nextTally) && referendumCount.gtn(0)
          ? referendumInfosCall(
            [...Array(referendumCount.sub(nextTally).toNumber())].map((_, i): BN =>
              nextTally.addn(i)
            )
          )
          : of([])
      ),
      drr()
    )
  );
}, true)

*Defined in [democracy/referendums.ts:17](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/democracy/referendums.ts#L17)*
