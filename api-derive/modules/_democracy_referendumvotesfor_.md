[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumVotesFor"](_democracy_referendumvotesfor_.md)

# External module: "democracy/referendumVotesFor"

## Index

### Variables

* [referendumVotesFor](_democracy_referendumvotesfor_.md#const-referendumvotesfor)

## Variables

### `Const` referendumVotesFor

• **referendumVotesFor**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (referendumId: BN | number) => Observable<DerivedReferendumVote[]> => {
  const votesCall = votes(api);
  const votingBalancesCall = votingBalances(api);

  return memo((referendumId: BN | number): Observable<DerivedReferendumVote[]> =>
    api.query.democracy.votersFor<Vec<AccountId>>(referendumId).pipe(
      switchMap((votersFor): Observable<[Vec<AccountId>, Vote[], DerivedBalances[]]> =>
        combineLatest([
          of(votersFor),
          votesCall(referendumId as BN, votersFor),
          votingBalancesCall(votersFor)
        ])
      ),
      map(([votersFor, votes, balances]): DerivedReferendumVote[] =>
        votersFor.map((accountId, index): DerivedReferendumVote => ({
          accountId,
          balance: balances[index].votingBalance || createType('Balance'),
          vote: votes[index] || createType('Vote')
        } as unknown as DerivedReferendumVote))
      ),
      drr()
    ));
}, true)

*Defined in [democracy/referendumVotesFor.ts:18](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/democracy/referendumVotesFor.ts#L18)*
