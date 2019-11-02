[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["contracts/fees"](_contracts_fees_.md)

# External module: "contracts/fees"

## Index

### Variables

* [fees](_contracts_fees_.md#const-fees)

## Variables

### `Const` fees

• **fees**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): () => Observable<DerivedContractFees> => {
  return memo((): Observable<DerivedContractFees> => {
    if (api.query.contract && !api.query.contract.rentByteFee) {
      return queryV1(api);
    }

    return (
      api.consts.contracts
        ? queryConstants(api)
        : queryQuery(api)
    ).pipe(
      map(([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee]): DerivedContractFees =>
        // We've done this on purpose, i.e. so we can  just copy the name/order from the parse above and see gaps
        parseResult([
          callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee
        ])
      ),
      drr()
    );
  });
}, true)

*Defined in [contracts/fees.ts:106](https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/contracts/fees.ts#L106)*

**`name`** fees

**`returns`** An object containing the combined results of the queries for
all relevant contract fees as declared in the substrate chain spec.

**`example`** 
<BR>

```javascript
api.derive.contracts.fees(([creationFee, transferFee]) => {
  console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
});
```
