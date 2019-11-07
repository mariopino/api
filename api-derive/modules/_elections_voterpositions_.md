[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/voterPositions"](_elections_voterpositions_.md)

# External module: "elections/voterPositions"

## Index

### Functions

* [voterPositions](_elections_voterpositions_.md#voterpositions)

## Functions

###  voterPositions

▸ **voterPositions**(`api`: ApiInterfaceRx): *function*

*Defined in [elections/voterPositions.ts:29](https://github.com/polkadot-js/api/blob/2be97310d3/packages/api-derive/src/elections/voterPositions.ts#L29)*

**`name`** voterPositions

**`example`** 
<BR>

```javascript
api.derive.elections.voterPositions((voters) => {
  const { index, setIndex, globalIndex } = voters[ALICE];
  console.log(`ALICE is a voter at index ${index} in voter set ${setIndex}, with global index ${globalIndex}.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An mapping of all current voter accounts to their voter set and global index.

▸ (): *Observable‹[DerivedVoterPositions](_types_.md#derivedvoterpositions)›*
