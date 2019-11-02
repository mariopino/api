[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/info"](_accounts_info_.md)

# External module: "accounts/info"

## Index

### Variables

* [info](_accounts_info_.md#const-info)

## Variables

### `Const` info

• **info**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable<DeriveAccountInfo> => {
  const idAndIndexCall = idAndIndex(api);
  const nickCall = retrieveNick(api);

  return memo((address?: AccountIndex | AccountId | Address | string | null): Observable<DeriveAccountInfo> =>
    idAndIndexCall(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<[DeriveAccountInfo, Option<[Bytes, Balance] & Codec>?]> => {
        return combineLatest([
          of({ accountId, accountIndex }),
          nickCall(accountId)
        ]);
      }),
      map(([{ accountId, accountIndex }, nameOf]): DeriveAccountInfo => ({
        accountId,
        accountIndex,
        nickname: nameOf && nameOf.isSome
          ? u8aToString(nameOf.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())
          : undefined
      })),
      drr()
    )
  );
}, true)

*Defined in [accounts/info.ts:29](https://github.com/polkadot-js/api/blob/8d3cb72189/packages/api-derive/src/accounts/info.ts#L29)*

**`name`** info

**`description`** Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
