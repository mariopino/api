[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/approvalsOf"](_elections_approvalsof_.md)

# External module: "elections/approvalsOf"

## Index

### Variables

* [approvalsOf](_elections_approvalsof_.md#const-approvalsof)

## Variables

### `Const` approvalsOf

• **approvalsOf**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (who: AccountId) => Observable<boolean[][]> => {
  return memo((who: AccountId | string): Observable<boolean[][]> =>
    api.query.elections.nextVoterSet<SetIndex>().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<Vec<ApprovalFlag>[]> =>
        api.query.elections.approvalsOf.multi(
          [...Array(nextVoterSet.toNumber() + 1).keys()].map((i): [string, number] => [
            who.toString(), i]
          )
        ) as any as Observable<Vec<ApprovalFlag>[]>
      ),
      map((votes: Vec<ApprovalFlag>[]): boolean[][] =>
        votes.map((flags: Vec<ApprovalFlag>): boolean[] =>
          approvalFlagsToBools(flags)
        )
      ),
      drr()
    ));
}, true)

*Defined in [elections/approvalsOf.ts:26](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-derive/src/elections/approvalsOf.ts#L26)*

**`name`** approvalsOf

**`returns`** A nested array of boolean approvals for the given account in each voter set index, converted from its ApprovalFlag(s).

**`example`** 
<BR>

```javascript
api.derive.elections.approvalsOf(ALICE, (approvals) => {
  // approvals === [[false], [true, false], ...]
});
```
