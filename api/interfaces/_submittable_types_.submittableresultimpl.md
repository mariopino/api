[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/types"](../modules/_submittable_types_.md) › [SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)

# Interface: SubmittableResultImpl

## Hierarchy

* **SubmittableResultImpl**

## Implemented by

* [SubmittableResult](../classes/_submittable_result_.submittableresult.md)

## Index

### Properties

* [events](_submittable_types_.submittableresultimpl.md#events)
* [isCompleted](_submittable_types_.submittableresultimpl.md#iscompleted)
* [isError](_submittable_types_.submittableresultimpl.md#iserror)
* [isFinalized](_submittable_types_.submittableresultimpl.md#isfinalized)
* [status](_submittable_types_.submittableresultimpl.md#status)

### Methods

* [findRecord](_submittable_types_.submittableresultimpl.md#findrecord)

## Properties

###  events

• **events**: *EventRecord[]*

*Defined in [submittable/types.ts:11](https://github.com/polkadot-js/api/blob/d0f9114/packages/api/src/submittable/types.ts#L11)*

___

###  isCompleted

• **isCompleted**: *boolean*

*Defined in [submittable/types.ts:13](https://github.com/polkadot-js/api/blob/d0f9114/packages/api/src/submittable/types.ts#L13)*

___

###  isError

• **isError**: *boolean*

*Defined in [submittable/types.ts:14](https://github.com/polkadot-js/api/blob/d0f9114/packages/api/src/submittable/types.ts#L14)*

___

###  isFinalized

• **isFinalized**: *boolean*

*Defined in [submittable/types.ts:15](https://github.com/polkadot-js/api/blob/d0f9114/packages/api/src/submittable/types.ts#L15)*

___

###  status

• **status**: *ExtrinsicStatus*

*Defined in [submittable/types.ts:12](https://github.com/polkadot-js/api/blob/d0f9114/packages/api/src/submittable/types.ts#L12)*

## Methods

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *EventRecord | undefined*

*Defined in [submittable/types.ts:17](https://github.com/polkadot-js/api/blob/d0f9114/packages/api/src/submittable/types.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord | undefined*
