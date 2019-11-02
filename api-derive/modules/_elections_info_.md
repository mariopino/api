[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/info"](_elections_info_.md)

# External module: "elections/info"

## Index

### Variables

* [info](_elections_info_.md#const-info)

## Variables

### `Const` info

• **info**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedElectionsInfo> => {
  return memo((): Observable<DerivedElectionsInfo> => {
    return api.query.electionsPhragmen
      ? queryPhragmen(api)
      : queryElections(api);
  });
}, true)

*Defined in [elections/info.ts:92](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/elections/info.ts#L92)*

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
