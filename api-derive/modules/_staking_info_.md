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
  const query = api.consts.session
    ? retrieveV2
    : retrieveV1;

  return (accountId: Uint8Array | string): Observable<DerivedStaking> =>
    query(api, calls, createType('AccountId', accountId)).pipe(drr());
}, true)

*Defined in [staking/info.ts:225](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/staking/info.ts#L225)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details
