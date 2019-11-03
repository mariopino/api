[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/indexes"](_accounts_indexes_.md)

# External module: "accounts/indexes"

## Index

### Type aliases

* [AccountIndexes](_accounts_indexes_.md#accountindexes)

### Variables

* [indexes](_accounts_indexes_.md#const-indexes)

## Type aliases

###  AccountIndexes

Ƭ **AccountIndexes**: *Record‹string, AccountIndex›*

*Defined in [accounts/indexes.ts:15](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/accounts/indexes.ts#L15)*

## Variables

### `Const` indexes

• **indexes**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<AccountIndexes> => {
  return (): Observable<AccountIndexes> =>
    api.query.indices.nextEnumSet<AccountIndex>().pipe(
      // use the nextEnumSet (which is a counter of the number of sets) to construct
      // a range of values to query [0, 1, 2, ...]. Retrieve the full enum set for the
      // specific index - each query can return up to ENUMSET_SIZE (64) records, each
      // containing an AccountId
      switchMap((next: AccountIndex): Observable<any> =>
        api.query.indices.enumSet.multi([...Array(next.toNumber() + 1).keys()]) as Observable<any>
      ),
      map((all: (AccountId[] | undefined)[]): AccountIndexes =>
        (all || []).reduce((result, list, outerIndex): AccountIndexes => {
          (list || []).forEach((accountId, innerIndex): void => {
            // re-create the index based on position 0 is [0][0] and likewise
            // 64 (0..63 in first) is [1][0] (the first index value in set 2)
            const index = (outerIndex * enumsetSize) + innerIndex;

            result[accountId.toString()] = createType('AccountIndex', index);
          });

          return result;
        }, {} as AccountIndexes)),
      drr()
    );
}, true)

*Defined in [accounts/indexes.ts:34](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/accounts/indexes.ts#L34)*

**`name`** indexes

**`returns`** Returns all the indexes on the system.

**`description`** This is an unwieldly query since it loops through
all of the enumsets and returns all of the values found. This could be up to 32k depending
on the number of active accounts in the system

**`example`** 
<BR>

```javascript
api.derive.accounts.indexes((indexes) => {
  console.log('All existing AccountIndexes', indexes);
});
```
