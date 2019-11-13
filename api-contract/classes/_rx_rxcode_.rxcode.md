[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["rx/RxCode"](../modules/_rx_rxcode_.md) › [RxCode](_rx_rxcode_.rxcode.md)

# Class: RxCode

## Hierarchy

  ↳ [Code](_base_code_.code.md)‹"rxjs"›

  ↳ **RxCode**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹"rxjs"›

## Index

### Constructors

* [constructor](_rx_rxcode_.rxcode.md#constructor)

### Properties

* [abi](_rx_rxcode_.rxcode.md#abi)
* [api](_rx_rxcode_.rxcode.md#api)
* [code](_rx_rxcode_.rxcode.md#code)
* [decorateMethod](_rx_rxcode_.rxcode.md#decoratemethod)

### Accessors

* [messages](_rx_rxcode_.rxcode.md#messages)

### Methods

* [createBlueprint](_rx_rxcode_.rxcode.md#createblueprint)
* [getMessage](_rx_rxcode_.rxcode.md#getmessage)

## Constructors

###  constructor

\+ **new RxCode**(`api`: ApiRx, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `wasm`: string | Uint8Array): *[RxCode](_rx_rxcode_.rxcode.md)*

*Overrides [Code](_base_code_.code.md).[constructor](_base_code_.code.md#constructor)*

*Defined in [rx/RxCode.ts:13](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/rx/RxCode.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiRx |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`wasm` | string &#124; Uint8Array |

**Returns:** *[RxCode](_rx_rxcode_.rxcode.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:13](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/util.ts#L13)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹"rxjs"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:15](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/util.ts#L15)*

___

###  code

• **code**: *Uint8Array*

*Inherited from [Code](_base_code_.code.md).[code](_base_code_.code.md#code)*

*Defined in [base/Code.ts:39](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/Code.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"rxjs"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/util.ts#L17)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:27](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/util.ts#L27)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"rxjs"›*

*Inherited from [Code](_base_code_.code.md)*

*Defined in [base/Code.ts:47](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"rxjs"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:38](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/base/util.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
