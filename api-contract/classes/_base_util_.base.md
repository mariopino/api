[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/util"](../modules/_base_util_.md) › [Base](_base_util_.base.md)

# Class: Base <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

* **Base**

  ↳ [BaseWithTx](_base_util_.basewithtx.md)

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹ApiType›

## Index

### Constructors

* [constructor](_base_util_.base.md#constructor)

### Properties

* [abi](_base_util_.base.md#abi)
* [api](_base_util_.base.md#api)
* [decorateMethod](_base_util_.base.md#decoratemethod)

### Accessors

* [messages](_base_util_.base.md#messages)

### Methods

* [getMessage](_base_util_.base.md#getmessage)

## Constructors

###  constructor

\+ **new Base**(`api`: [ApiObject](../modules/_types_.md#apiobject)‹ApiType›, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[Base](_base_util_.base.md)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/api-contract/src/base/util.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | [ApiObject](../modules/_types_.md#apiobject)‹ApiType› |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[Base](_base_util_.base.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Defined in [base/util.ts:13](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/api-contract/src/base/util.ts#L13)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Defined in [base/util.ts:15](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/api-contract/src/base/util.ts#L15)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/api-contract/src/base/util.ts#L17)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Defined in [base/util.ts:27](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/api-contract/src/base/util.ts#L27)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Defined in [base/util.ts:38](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/api-contract/src/base/util.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
