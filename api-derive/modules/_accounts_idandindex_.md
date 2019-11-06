[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/idAndIndex"](_accounts_idandindex_.md)

# External module: "accounts/idAndIndex"

## Index

### Type aliases

* [AccountIdAndIndex](_accounts_idandindex_.md#accountidandindex)

### Functions

* [idAndIndex](_accounts_idandindex_.md#idandindex)

## Type aliases

###  AccountIdAndIndex

Ƭ **AccountIdAndIndex**: *[undefined | AccountId‹›, undefined | AccountIndex‹›]*

*Defined in [accounts/idAndIndex.ts:23](https://github.com/polkadot-js/api/blob/c077d0f2e7/packages/api-derive/src/accounts/idAndIndex.ts#L23)*

## Functions

###  idAndIndex

▸ **idAndIndex**(`api`: ApiInterfaceRx): *function*

*Defined in [accounts/idAndIndex.ts:63](https://github.com/polkadot-js/api/blob/c077d0f2e7/packages/api-derive/src/accounts/idAndIndex.ts#L63)*

**`name`** idAndIndex

**`description`** An array containing the [[AccountId]] and [[AccountIndex]] as optional values.

**`example`** 
<BR>

```javascript
api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
  console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`address?`: Address | AccountId | AccountIndex | string | null): *Observable‹[AccountIdAndIndex](_accounts_idandindex_.md#accountidandindex)›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address?` | Address &#124; AccountId &#124; AccountIndex &#124; string &#124; null | An accounts address in various formats. |
