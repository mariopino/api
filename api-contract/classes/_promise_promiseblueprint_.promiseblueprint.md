[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/PromiseBlueprint"](../modules/_promise_promiseblueprint_.md) › [PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)

# Class: PromiseBlueprint

## Hierarchy

  ↳ [Blueprint](_base_blueprint_.blueprint.md)‹"promise"›

  ↳ **PromiseBlueprint**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹"promise"›

## Index

### Constructors

* [constructor](_promise_promiseblueprint_.promiseblueprint.md#constructor)

### Properties

* [abi](_promise_promiseblueprint_.promiseblueprint.md#abi)
* [api](_promise_promiseblueprint_.promiseblueprint.md#api)
* [codeHash](_promise_promiseblueprint_.promiseblueprint.md#codehash)
* [decorateMethod](_promise_promiseblueprint_.promiseblueprint.md#decoratemethod)

### Accessors

* [messages](_promise_promiseblueprint_.promiseblueprint.md#messages)

### Methods

* [deployContract](_promise_promiseblueprint_.promiseblueprint.md#deploycontract)
* [getMessage](_promise_promiseblueprint_.promiseblueprint.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseBlueprint**(`api`: ApiPromise, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `codeHash`: string | Hash): *[PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)*

*Overrides [Blueprint](_base_blueprint_.blueprint.md).[constructor](_base_blueprint_.blueprint.md#constructor)*

*Defined in [promise/PromiseBlueprint.ts:14](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/promise/PromiseBlueprint.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`codeHash` | string &#124; Hash |

**Returns:** *[PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:13](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/util.ts#L13)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹"promise"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:15](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/util.ts#L15)*

___

###  codeHash

• **codeHash**: *Hash*

*Inherited from [Blueprint](_base_blueprint_.blueprint.md).[codeHash](_base_blueprint_.blueprint.md#codehash)*

*Defined in [base/Blueprint.ts:39](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/Blueprint.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/util.ts#L17)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:27](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/util.ts#L27)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number | BN, `maxGas`: number | BN, ...`params`: any[]): *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹"promise"›*

*Inherited from [Blueprint](_base_blueprint_.blueprint.md).[deployContract](_base_blueprint_.blueprint.md#deploycontract)*

*Defined in [base/Blueprint.ts:47](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/Blueprint.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number &#124; BN | - |
`maxGas` | number &#124; BN | - |
`...params` | any[] | - |

**Returns:** *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹"promise"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:38](https://github.com/polkadot-js/api/blob/ca186a4b2c/packages/api-contract/src/base/util.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
