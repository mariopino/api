> # External module: "submittable/Extrinsic"

## Index

### Functions

* [createSubmittableExtrinsic](_submittable_extrinsic_.md#createsubmittableextrinsic)

## Functions

###  createSubmittableExtrinsic

▸ **createSubmittableExtrinsic**<**ApiType**>(`type`: [ApiTypes](_types_.md#apitypes), `api`: [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md), `decorateMethod`: function): *Creator‹ApiType›*

*Defined in [submittable/Extrinsic.ts:258](https://github.com/polkadot-js/api/blob/f66b2d0/packages/api/src/submittable/Extrinsic.ts#L258)*

**Type parameters:**

▪ **ApiType**

**Parameters:**

▪ **type**: *[ApiTypes](_types_.md#apitypes)*

▪ **api**: *[ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)*

▪ **decorateMethod**: *function*

▸ (`method`: function, `options?`: [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)): *any*

**Parameters:**

▪ **method**: *function*

▸ (...`args`: any[]): *Observable‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **options**: *[DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)*

**Returns:** *Creator‹ApiType›*