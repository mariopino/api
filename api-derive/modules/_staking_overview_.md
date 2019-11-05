[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/overview"](_staking_overview_.md)

# External module: "staking/overview"

## Index

### Variables

* [overview](_staking_overview_.md#const-overview)

## Variables

### `Const` overview

• **overview**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedStakingOverview> => {
  const sessionIndexesCall = sessionIndexes(api);
  const validatorsCall = validators(api);

  return (): Observable<DerivedStakingOverview> =>
    combineLatest([
      sessionIndexesCall(),
      validatorsCall()
    ]).pipe(
      switchMap(([{ currentEra, currentIndex, validatorCount }, { currentElected, validators }]) =>
        combineLatest([
          of({ currentElected, currentEra, currentIndex, validators, validatorCount }),
          // this will change on a per block basis, keep it innermost (and it needs eraIndex)
          api.query.staking.currentEraPointsEarned
            ? api.query.staking.currentEraPointsEarned<EraPoints>(currentEra)
            : of(createType('EraPoints'))
        ])
      ),
      map(([{ currentElected, currentEra, currentIndex, validators, validatorCount }, eraPoints]): DerivedStakingOverview => ({
        currentElected, currentEra, currentIndex, eraPoints, validators, validatorCount
      })),
      drr()
    );
}, true)

*Defined in [staking/overview.ts:20](https://github.com/polkadot-js/api/blob/cba5710fec/packages/api-derive/src/staking/overview.ts#L20)*

**`description`** Retrieve the staking overview, including elected and points earned
