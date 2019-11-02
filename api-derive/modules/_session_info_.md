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

  return memo((): Observable<DerivedSessionInfo> => {
    return api.consts.staking
      ? api.consts.babe
        ? infoLatestBabe(api, calls) // 2.x with Babe
        : infoLatestAura(api, calls) // 2.x with Aura (not all info there)
      : infoV1(api, calls); // 1.x
  });
}, true)

*Defined in [session/info.ts:133](https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/session/info.ts#L133)*

**`description`** Retrieves all the session and era info and calculates specific values on it as the length of the session and eras
