[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/votes"](_democracy_votes_.md)

# External module: "democracy/votes"

## Index

### Variables

* [votes](_democracy_votes_.md#const-votes)

## Variables

### `Const` votes

• **votes**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (referendumId: BN, accountIds?: AccountId[]) => Observable<Vote[]> => {
  return memo((referendumId: BN, accountIds: AccountId[] = []): Observable<Vote[]> => {
    return ((
      !accountIds || !accountIds.length
        ? of([])
        : api.query.democracy.voteOf.multi(
          accountIds.map((accountId): [BN, AccountId] =>
            [referendumId, accountId]
          )
        )
    ) as Observable<Vec<Vote>>).pipe(drr());
  });
}, true)

*Defined in [democracy/votes.ts:14](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/democracy/votes.ts#L14)*
