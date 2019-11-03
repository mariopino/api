[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/idToIndex"](_accounts_idtoindex_.md)

# External module: "accounts/idToIndex"

## Index

### Variables

* [idToIndex](_accounts_idtoindex_.md#const-idtoindex)

## Variables

### `Const` idToIndex

• **idToIndex**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (accountId: AccountId | string) => Observable<AccountIndex | undefined> => {
  const indexesCall = indexes(api);

  return memo((accountId: AccountId | string): Observable<AccountIndex | undefined> =>
    indexesCall().pipe(
      startWith({}),
      map((indexes: AccountIndexes): AccountIndex | undefined =>
        (indexes || {})[accountId.toString()]
      ),
      drr()
    ));
}, true)

*Defined in [accounts/idToIndex.ts:28](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-derive/src/accounts/idToIndex.ts#L28)*

**`name`** idToIndex

**`param`** An accounts Id in different formats.

**`returns`** Returns the corresponding AccountIndex.

**`example`** 
<BR>

```javascript
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
  console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
});
```
