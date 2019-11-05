[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/voters"](_elections_voters_.md)

# External module: "elections/voters"

## Index

### Variables

* [voters](_elections_voters_.md#const-voters)

## Variables

### `Const` voters

• **voters**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<Vec<AccountId>> => {
  const voterPositionsCall = voterPositions(api);

  return (): Observable<Vec<AccountId>> =>
    voterPositionsCall().pipe(
      map((voterPositions: DerivedVoterPositions): Vec<AccountId> =>
        createType(
          'Vec<AccountId>',
          Object.entries(voterPositions)
            .sort((a, b): number => a[1].globalIndex.cmp(b[1].globalIndex))
            .map(([accountId]): AccountId => createType('AccountId', accountId))
        )
      ),
      drr()
    );
}, true)

*Defined in [elections/voters.ts:28](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/elections/voters.ts#L28)*

**`name`** voters

**`returns`** An array of all current voters from all sets.

**`example`** 
<BR>

```javascript
api.derive.elections.voters((voters) => {
  console.log(`There are ${voters.length} current voters.`);
});
```
