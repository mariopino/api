[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/approvalsOfAt"](_elections_approvalsofat_.md)

# External module: "elections/approvalsOfAt"

## Index

### Variables

* [approvalsOfAt](_elections_approvalsofat_.md#const-approvalsofat)

## Variables

### `Const` approvalsOfAt

• **approvalsOfAt**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (who: AccountId, at: SetIndex) => Observable<boolean[]> => {
  return memo((who: AccountId | string, at: SetIndex | BN | number): Observable<boolean[]> =>
    api.query.elections.approvalsOf<Vec<ApprovalFlag>>([who.toString(), at]).pipe(
      map((flags: Vec<ApprovalFlag>): boolean[] => approvalFlagsToBools(flags)),
      drr()
    ));
}, true)

*Defined in [elections/approvalsOfAt.ts:28](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/elections/approvalsOfAt.ts#L28)*

**`name`** approvalsOfAt

**`returns`** An array of boolean approvals for the account and set index, converted from the returned ApprovalFlag.

**`example`** 
<BR>

```javascript
api.derive.elections.approvalsOfAt(ALICE, new BN(0), (approvals) => {
  // approvals === [false, true, ...]
});
```
