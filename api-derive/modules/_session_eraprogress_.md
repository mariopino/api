[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["session/eraProgress"](_session_eraprogress_.md)

# External module: "session/eraProgress"

## Index

### Variables

* [eraProgress](_session_eraprogress_.md#const-eraprogress)

## Variables

### `Const` eraProgress

• **eraProgress**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  const infoCall = info(api);

  return (): Observable<BlockNumber> =>
    infoCall().pipe(
      map(({ eraProgress }): BlockNumber => eraProgress),
      drr()
    );
}, true)

*Defined in [session/eraProgress.ts:14](https://github.com/polkadot-js/api/blob/2371d6a29c/packages/api-derive/src/session/eraProgress.ts#L14)*
