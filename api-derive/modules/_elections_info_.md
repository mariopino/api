[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/info"](_elections_info_.md)

# External module: "elections/info"

## Index

### Variables

* [info](_elections_info_.md#const-info)

## Variables

### `Const` info

• **info**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedElectionsInfo> => {
  const query = api.query.electionsPhragmen
    ? queryPhragmen
    : queryElections;

  return (): Observable<DerivedElectionsInfo> =>
    query(api).pipe(drr());
}, true)

*Defined in [elections/info.ts:91](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/elections/info.ts#L91)*

**`name`** info

**`returns`** An object containing the combined results of the storage queries for
all relevant election module properties.

**`example`** 
<BR>

```javascript
api.derive.elections.info(({ members, candidates }) => {
  console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
});
```
