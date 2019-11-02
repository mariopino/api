[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/overview"](_staking_overview_.md)

# External module: "staking/overview"

## Index

### Variables

* [overview](_staking_overview_.md#const-overview)

## Variables

### `Const` overview

• **overview**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedStakingOverview> => {
  const sessionIndexesCall = sessionIndexes(api);

  return memo((): Observable<DerivedStakingOverview> =>
    combineLatest([
      sessionIndexesCall(),
      api.queryMulti<[Vec<AccountId>, Vec<AccountId>]>([
        api.query.session.validators,
        api.query.staking.currentElected
      ])
    ]).pipe(
      switchMap(([{ currentEra, currentIndex, validatorCount }, [validators, currentElected]]) =>
        combineLatest([
          of({ currentElected, currentEra, currentIndex, validators, validatorCount }),
          // this will change on a per block basis, keep it innermost (and it needs eraIndex)
          api.query.staking.currentEraPointsEarned<EraPoints>(currentEra)
        ])
      ),
      map(([{ currentElected, currentEra, currentIndex, validators, validatorCount }, eraPoints]): DerivedStakingOverview => ({
        currentElected, currentEra, currentIndex, eraPoints, validators, validatorCount
      })),
      drr()
    )
  );
}, true)

*Defined in [staking/overview.ts:19](https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/staking/overview.ts#L19)*

**`description`** Retrieve the staking overview, including elected and points earned
