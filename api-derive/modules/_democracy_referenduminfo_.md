[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumInfo"](_democracy_referenduminfo_.md)

# External module: "democracy/referendumInfo"

## Index

### Variables

* [referendumInfo](_democracy_referenduminfo_.md#const-referenduminfo)

### Functions

* [constructInfo](_democracy_referenduminfo_.md#constructinfo)

## Variables

### `Const` referendumInfo

• **referendumInfo**: *(Anonymous function)* =  memo((api: ApiInterfaceRx): (index: BN | number) => Observable<Option<ReferendumInfoExtended>> => {
  return memo((index: BN | number): Observable<Option<ReferendumInfoExtended>> =>
    (api.query.democracy.referendumInfoOf<Option<ReferendumInfo>>(index))
      .pipe(
        map((optionInfo): Option<ReferendumInfoExtended> =>
          constructInfo(index, optionInfo)
        ),
        drr()
      ));
}, true)

*Defined in [democracy/referendumInfo.ts:30](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/democracy/referendumInfo.ts#L30)*

## Functions

###  constructInfo

▸ **constructInfo**(`index`: BN | number, `optionInfo?`: Option‹ReferendumInfo›): *Option‹[ReferendumInfoExtended](../classes/_type_referenduminfoextended_.referenduminfoextended.md)›*

*Defined in [democracy/referendumInfo.ts:17](https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/democracy/referendumInfo.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN &#124; number |
`optionInfo?` | Option‹ReferendumInfo› |

**Returns:** *Option‹[ReferendumInfoExtended](../classes/_type_referenduminfoextended_.referenduminfoextended.md)›*
