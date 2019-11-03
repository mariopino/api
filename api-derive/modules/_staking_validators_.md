[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/validators"](_staking_validators_.md)

# External module: "staking/validators"

## Index

### Variables

* [validators](_staking_validators_.md#const-validators)

## Variables

### `Const` validators

• **validators**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<AccountId[]> => {
  const overviewCall = overview(api);

  return memo((): Observable<AccountId[]> =>
    overviewCall().pipe(
      map(({ validators }): AccountId[] => validators),
      drr()
    ));
}, true)

*Defined in [staking/validators.ts:17](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/staking/validators.ts#L17)*

**`description`** Retrieve latest list of validators
