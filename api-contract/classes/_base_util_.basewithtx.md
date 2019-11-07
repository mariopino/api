[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/util"](../modules/_base_util_.md) › [BaseWithTx](_base_util_.basewithtx.md)

# Class: BaseWithTx <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

* [Base](_base_util_.base.md)‹ApiType›

  ↳ **BaseWithTx**

  ↳ [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)

  ↳ [Blueprint](_base_blueprint_.blueprint.md)

  ↳ [Code](_base_code_.code.md)

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹ApiType›

## Index

### Constructors

* [constructor](_base_util_.basewithtx.md#constructor)

### Properties

* [abi](_base_util_.basewithtx.md#abi)
* [api](_base_util_.basewithtx.md#api)
* [decorateMethod](_base_util_.basewithtx.md#decoratemethod)

### Accessors

* [messages](_base_util_.basewithtx.md#messages)

### Methods

* [getMessage](_base_util_.basewithtx.md#getmessage)

## Constructors

###  constructor

\+ **new BaseWithTx**(`api`: [ApiObject](../modules/_types_.md#apiobject)‹ApiType›, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[BaseWithTx](_base_util_.basewithtx.md)*

*Overrides [Base](_base_util_.base.md).[constructor](_base_util_.base.md#constructor)*

*Defined in [base/util.ts:55](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-contract/src/base/util.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | [ApiObject](../modules/_types_.md#apiobject)‹ApiType› |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[BaseWithTx](_base_util_.basewithtx.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:13](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-contract/src/base/util.ts#L13)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:15](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-contract/src/base/util.ts#L15)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-contract/src/base/util.ts#L17)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:27](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-contract/src/base/util.ts#L27)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:38](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-contract/src/base/util.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
