[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["session/info"](_session_info_.md)

# External module: "session/info"

## Index

### Variables

* [info](_session_info_.md#const-info)

## Variables

### `Const` info

• **info**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedSessionInfo> => {
  const calls = {
    bestNumberCall: bestNumber(api),
    indexesCall: indexes(api)
  };
  const query = api.consts.staking
    ? api.consts.babe
      ? infoLatestBabe // 2.x with Babe
      : infoLatestAura // 2.x with Aura (not all info there)
    : infoV1;

  return (): Observable<DerivedSessionInfo> =>
    query(api, calls).pipe(drr());
}, true)

*Defined in [session/info.ts:130](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/session/info.ts#L130)*

**`description`** Retrieves all the session and era info and calculates specific values on it as the length of the session and eras
