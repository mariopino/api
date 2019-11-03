[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumInfos"](_democracy_referenduminfos_.md)

# External module: "democracy/referendumInfos"

## Index

### Variables

* [referendumInfos](_democracy_referenduminfos_.md#const-referenduminfos)

## Variables

### `Const` referendumInfos

• **referendumInfos**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (ids?: (BN | number)[]) => Observable<Option<ReferendumInfoExtended>[]> => {
  return (ids: (BN | number)[] = []): Observable<Option<ReferendumInfoExtended>[]> =>
    (
      !ids || !ids.length
        ? of([] as Option<ReferendumInfo>[])
        : api.query.democracy.referendumInfoOf.multi(ids) as Observable<Vec<Option<ReferendumInfo>>>
    ).pipe(
      map((infos): Option<ReferendumInfoExtended>[] =>
        ids.map((id, index): Option<ReferendumInfoExtended> =>
          constructInfo(id, infos[index])
        )
      ),
      drr()
    );
}, true)

*Defined in [democracy/referendumInfos.ts:17](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/democracy/referendumInfos.ts#L17)*
