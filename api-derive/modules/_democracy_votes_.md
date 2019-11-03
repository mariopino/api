[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/votes"](_democracy_votes_.md)

# External module: "democracy/votes"

## Index

### Variables

* [votes](_democracy_votes_.md#const-votes)

## Variables

### `Const` votes

• **votes**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (referendumId: BN, accountIds?: AccountId[]) => Observable<Vote[]> => {
  return (referendumId: BN, accountIds: AccountId[] = []): Observable<Vote[]> =>
    (
      !accountIds || !accountIds.length
        ? of([] as Vote[])
        : api.query.democracy.voteOf.multi<Vote>(
          accountIds.map((accountId): [BN, AccountId] =>
            [referendumId, accountId]
          )
        )
    ).pipe(drr());
}, true)

*Defined in [democracy/votes.ts:13](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/democracy/votes.ts#L13)*
