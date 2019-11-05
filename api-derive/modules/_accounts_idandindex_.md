[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/idAndIndex"](_accounts_idandindex_.md)

# External module: "accounts/idAndIndex"

## Index

### Type aliases

* [AccountIdAndIndex](_accounts_idandindex_.md#accountidandindex)

### Variables

* [idAndIndex](_accounts_idandindex_.md#const-idandindex)

## Type aliases

###  AccountIdAndIndex

Ƭ **AccountIdAndIndex**: *[undefined | AccountId, undefined | AccountIndex]*

*Defined in [accounts/idAndIndex.ts:23](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/accounts/idAndIndex.ts#L23)*

## Variables

### `Const` idAndIndex

• **idAndIndex**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountIdAndIndex> => {
  const calls = {
    idToIndexCall: idToIndex(api),
    indexToIdCall: indexToId(api)
  };

  return (address?: Address | AccountId | AccountIndex | string | null): Observable<AccountIdAndIndex> =>
    retrieve(address, calls).pipe(drr());
}, true)

*Defined in [accounts/idAndIndex.ts:63](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/accounts/idAndIndex.ts#L63)*

**`name`** idAndIndex

**`param`** An accounts address in various formats.

**`description`** An array containing the [[AccountId]] and [[AccountIndex]] as optional values.

**`example`** 
<BR>

```javascript
api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
  console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
});
```
