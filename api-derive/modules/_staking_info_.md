[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/info"](_staking_info_.md)

# External module: "staking/info"

## Index

### Variables

* [info](_staking_info_.md#const-info)

## Variables

### `Const` info

• **info**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStaking> => {
  const calls = {
    eraLengthCall: eraLength(api),
    bestNumberCall: bestNumber(api),
    recentlyOfflineCall: recentlyOffline(api)
  };

  return memo((_accountId: Uint8Array | string): Observable<DerivedStaking> => {
    const accountId = createType('AccountId', _accountId);

    return api.consts.session
      ? retrieveV2(api, calls, accountId)
      : retrieveV1(api, calls, accountId);
  });
}, true)

*Defined in [staking/info.ts:227](https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/staking/info.ts#L227)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details
