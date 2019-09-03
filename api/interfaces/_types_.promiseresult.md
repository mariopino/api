> # Interface: PromiseResult <**F**>

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **PromiseResult**

## Callable

▸ (...`args`: Parameters‹F›): *Promise‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [types.ts:65](https://github.com/polkadot-js/api/blob/7b84427/packages/api/src/types.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

▸ (...`args`: Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F››››): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:66](https://github.com/polkadot-js/api/blob/7b84427/packages/api/src/types.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(...`args`: Parameters‹F›): *Promise‹T›*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/7b84427/packages/api/src/types.ts#L67)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹T›*

▸ <**T**>(...`args`: Push‹Parameters‹F›, Callback‹T››): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:68](https://github.com/polkadot-js/api/blob/7b84427/packages/api/src/types.ts#L68)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹T›› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*