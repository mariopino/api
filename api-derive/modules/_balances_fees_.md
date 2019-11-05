[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["balances/fees"](_balances_fees_.md)

# External module: "balances/fees"

## Index

### Variables

* [fees](_balances_fees_.md#const-fees)

## Variables

### `Const` fees

• **fees**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedFees> => {
  const query = api.consts.balances
    ? queryV2
    : queryV1;

  return (): Observable<DerivedFees> =>
    query(api).pipe(
      map(([creationFee, existentialDeposit, transferFee, transactionBaseFee, transactionByteFee]): DerivedFees => ({
        creationFee,
        existentialDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      })),
      drr()
    );
}, true)

*Defined in [balances/fees.ts:54](https://github.com/polkadot-js/api/blob/fcf89d1501/packages/api-derive/src/balances/fees.ts#L54)*

**`name`** fees

**`returns`** An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.

**`example`** 
<BR>

```javascript
api.derive.balances.fees(({ creationFee, transferFee }) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```
