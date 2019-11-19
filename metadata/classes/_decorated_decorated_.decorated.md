[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/Decorated"](../modules/_decorated_decorated_.md) › [Decorated](_decorated_decorated_.decorated.md)

# Class: Decorated

This class represents a decorated wrapper over the [Metadata](_metadata_metadata_.metadata.md). The
[Metadata](_metadata_metadata_.metadata.md) type is a Codec type returned by the node, and `Decorated`
composes it and populates the `.query`, `.tx` and `.consts` sections.

## Hierarchy

* **Decorated**

## Index

### Constructors

* [constructor](_decorated_decorated_.decorated.md#constructor)

### Properties

* [consts](_decorated_decorated_.decorated.md#consts)
* [metadata](_decorated_decorated_.decorated.md#metadata)
* [query](_decorated_decorated_.decorated.md#query)
* [tx](_decorated_decorated_.decorated.md#tx)

## Constructors

###  constructor

\+ **new Decorated**(`value?`: Uint8Array | string | [Metadata](_metadata_metadata_.metadata.md)): *[Decorated](_decorated_decorated_.decorated.md)*

*Defined in [Decorated/Decorated.ts:25](https://github.com/polkadot-js/api/blob/6b74ea39c2/packages/metadata/src/Decorated/Decorated.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | Uint8Array &#124; string &#124; [Metadata](_metadata_metadata_.metadata.md) |

**Returns:** *[Decorated](_decorated_decorated_.decorated.md)*

## Properties

###  consts

• **consts**: *[Constants](../interfaces/_decorated_types_.constants.md)*

*Defined in [Decorated/Decorated.ts:19](https://github.com/polkadot-js/api/blob/6b74ea39c2/packages/metadata/src/Decorated/Decorated.ts#L19)*

___

###  metadata

• **metadata**: *[Metadata](_metadata_metadata_.metadata.md)*

*Defined in [Decorated/Decorated.ts:21](https://github.com/polkadot-js/api/blob/6b74ea39c2/packages/metadata/src/Decorated/Decorated.ts#L21)*

___

###  query

• **query**: *[Storage](../interfaces/_decorated_types_.storage.md)*

*Defined in [Decorated/Decorated.ts:23](https://github.com/polkadot-js/api/blob/6b74ea39c2/packages/metadata/src/Decorated/Decorated.ts#L23)*

___

###  tx

• **tx**: *ModulesWithCalls*

*Defined in [Decorated/Decorated.ts:25](https://github.com/polkadot-js/api/blob/6b74ea39c2/packages/metadata/src/Decorated/Decorated.ts#L25)*
