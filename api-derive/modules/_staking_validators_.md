[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/validators"](_staking_validators_.md)

# External module: "staking/validators"

## Index

### Variables

* [validators](_staking_validators_.md#const-validators)

## Variables

### `Const` validators

• **validators**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DeriveStakingValidators> => {
  return (): Observable<DeriveStakingValidators> =>
    api.queryMulti<[Vec<AccountId>, Vec<AccountId>]>([
      api.query.session.validators,
      api.query.staking.currentElected
    ]).pipe(
      map(([validators, currentElected]): DeriveStakingValidators => ({
        currentElected, validators
      })),
      drr()
    );
}, true)

*Defined in [staking/validators.ts:18](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/staking/validators.ts#L18)*

**`description`** Retrieve latest list of validators
