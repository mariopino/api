[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Blueprint"](../modules/_base_blueprint_.md) › [Blueprint](_base_blueprint_.blueprint.md)

# Class: Blueprint <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_base_util_.basewithtx.md)‹ApiType›

  ↳ **Blueprint**

  ↳ [PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)

  ↳ [RxBlueprint](_rx_rxblueprint_.rxblueprint.md)

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹ApiType›

## Index

### Constructors

* [constructor](_base_blueprint_.blueprint.md#constructor)

### Properties

* [abi](_base_blueprint_.blueprint.md#abi)
* [api](_base_blueprint_.blueprint.md#api)
* [codeHash](_base_blueprint_.blueprint.md#codehash)
* [decorateMethod](_base_blueprint_.blueprint.md#decoratemethod)

### Accessors

* [messages](_base_blueprint_.blueprint.md#messages)

### Methods

* [deployContract](_base_blueprint_.blueprint.md#deploycontract)
* [getMessage](_base_blueprint_.blueprint.md#getmessage)

## Constructors

###  constructor

\+ **new Blueprint**(`api`: [ApiObject](../modules/_types_.md#apiobject)‹ApiType›, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `codeHash`: string | Hash): *[Blueprint](_base_blueprint_.blueprint.md)*

*Overrides [BaseWithTx](_base_util_.basewithtx.md).[constructor](_base_util_.basewithtx.md#constructor)*

*Defined in [base/Blueprint.ts:39](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/Blueprint.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | [ApiObject](../modules/_types_.md#apiobject)‹ApiType› |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`codeHash` | string &#124; Hash |

**Returns:** *[Blueprint](_base_blueprint_.blueprint.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:13](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/util.ts#L13)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:15](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/util.ts#L15)*

___

###  codeHash

• **codeHash**: *Hash*

*Defined in [base/Blueprint.ts:39](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/Blueprint.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/util.ts#L17)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:27](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/util.ts#L27)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number | BN, `maxGas`: number | BN, ...`params`: any[]): *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹ApiType›*

*Defined in [base/Blueprint.ts:47](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/Blueprint.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number &#124; BN | - |
`maxGas` | number &#124; BN | - |
`...params` | any[] | - |

**Returns:** *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹ApiType›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:38](https://github.com/polkadot-js/api/blob/287ceb2ded/packages/api-contract/src/base/util.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
