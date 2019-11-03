[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/voterPositions"](_elections_voterpositions_.md)

# External module: "elections/voterPositions"

## Index

### Variables

* [voterPositions](_elections_voterpositions_.md#const-voterpositions)

## Variables

### `Const` voterPositions

• **voterPositions**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedVoterPositions> => {
  return (): Observable<DerivedVoterPositions> =>
    api.query.elections.nextVoterSet<SetIndex>().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<[BN, Vec<Option<AccountId>>[]]> => combineLatest(
        of(api.consts.elections.voterSetSize) as any as Observable<BN>,
        api.query.elections.voters.multi([...Array(+nextVoterSet + 1).keys()].map((_, i): [number] => [i])) as any as Observable<Vec<Option<AccountId>>[]>
      )),
      map((result: [BN, Vec<Option<AccountId>>[]]): DerivedVoterPositions => {
        const [setSize, voters] = result;
        return voters.reduce((result: DerivedVoterPositions, vec, setIndex): DerivedVoterPositions => {
          vec.forEach((e, index): void => {
            // re-create the index based on position 0 is [0][0] and likewise
            // 64 (0..63 in first) is [1][0] (the first index value in set 2)
            const accountId: AccountId | null = e.unwrapOr(null);

            if (accountId) {
              result[accountId.toString()] = {
                globalIndex: setSize.muln(setIndex).addn(index),
                index: new BN(index),
                setIndex: createType('SetIndex', setIndex)
              };
            }
          });

          return result;
        }, {});
      }),
      drr()
    );
}, true)

*Defined in [elections/voterPositions.ts:29](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/elections/voterPositions.ts#L29)*

**`name`** voterPositions

**`returns`** An mapping of all current voter accounts to their voter set and global index.

**`example`** 
<BR>

```javascript
api.derive.elections.voterPositions((voters) => {
  const { index, setIndex, globalIndex } = voters[ALICE];
  console.log(`ALICE is a voter at index ${index} in voter set ${setIndex}, with global index ${globalIndex}.`);
});
```
