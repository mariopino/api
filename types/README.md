[Polkadot JS API](README.md) › [Globals](globals.md)

# Polkadot JS API

# @polkadot/types

Implementation of the types and their (de-)serialisation via SCALE codec.<br>
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).

## Codec types

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:

| **Types** | |
| --- | --- |
| [AbstractArray](classes/_codec_abstractarray_.abstractarray.md) | Manages codec arrays. It is an extension to Array |
| [Base](classes/_codec_base_.base.md) | A type extends the Base class, when it holds a value |
| [Compact](enums/_codec_create_types_.typedefinfo.md#compact) | A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding |
| [Enum](classes/_codec_enum_.enum.md) | A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value |
| [Int](classes/_codec_int_.int.md) | A generic signed integer codec |
| [Option](classes/_codec_option_.option.md) | An Option is an optional field. The first byte indicates that there is is value to follow |
| [Set](enums/_codec_create_types_.typedefinfo.md#set) | An Set is an array of string values, represented an an encoded type by a bitwise representation of the values |
| [Struct](classes/_codec_struct_.struct.md) | A Struct defines an Object with key-value pairs - where the values are Codec values. |
| [StructAny](classes/_codec_structany_.structany.md) | Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map |
| [Tuple](classes/_codec_tuple_.tuple.md) | A Tuple defines an anonymous fixed-length array, where each element has its own type |
| [U8a](classes/_codec_u8a_.u8a.md) |  A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it |
| [U8aFixed](classes/_codec_u8afixed_.u8afixed.md) | A U8a that manages a a sequence of bytes up to the specified bitLength |
| [UInt](classes/_codec_uint_.uint.md) | A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate |
| [Vec](classes/_codec_vec_.vec.md) | This manages codec arrays. Internally it keeps track of the length (as decoded) |
| [VecAny](classes/_codec_vecany_.vecany.md) | This manages codec arrays, assuming that the inputs are already of type Codec |

## Primitive types

These primitive types are available:

| **Types** | |
| --- | --- |
| [AccountId](interfaces/_interfaces_runtime_types_.accountid.md) | A wrapper around an AccountId/PublicKey representation |
| [AccountIndex](interfaces/_interfaces_runtime_types_.accountindex.md) | A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account |
| [AccountInfo](interfaces/_interfaces_deprecated_types_.accountinfo.md) | An Account information structure for contracts |
| [Address](interfaces/_interfaces_runtime_types_.address.md) | A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix |
| [Bool](classes/_primitive_bool_.bool.md) | Representation for a boolean value in the system |
| [Bytes](classes/_primitive_bytes_.bytes.md) | A Bytes wrapper for `Vec<u8>` |
| [Call](interfaces/_interfaces_runtime_types_.call.md) | Extrinsic function descriptor, as defined in [the extrinsic format for a node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node) |
| [Data](classes/_primitive_data_.data.md) | A raw data structure. It is an encoding of a U8a without any length encoding |
| [Event](interfaces/_interfaces_system_types_.event.md) | Wrapper for the actual data that forms part of an [Event](interfaces/_interfaces_system_types_.event.md) |
| [EventRecord](interfaces/_interfaces_system_types_.eventrecord.md) | A record for an [Event](interfaces/_interfaces_system_types_.event.md) (as specified by [Metadata](classes/_metadata_metadata_.metadata.md)) with the specific [Phase](interfaces/_interfaces_system_types_.phase.md) of application |
| [Extrinsic](interfaces/_interfaces_runtime_types_.extrinsic.md) | Representation of an Extrinsic in the system |
| [ExtrinsicEra](interfaces/_interfaces_runtime_types_.extrinsicera.md) | The era for an extrinsic, indicating either a mortal or immortal extrinsic |
| [[ExtrinsicSignature]] | A container for the [Signature](interfaces/_interfaces_runtime_types_.signature.md) associated with a specific [Extrinsic](interfaces/_interfaces_runtime_types_.extrinsic.md) |
| [H160](classes/_primitive_h160_.h160.md) | Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default |
| [H256](classes/_primitive_h256_.h256.md) | Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default |
| [H512](classes/_primitive_h512_.h512.md) | Hash containing 512 bits (64 bytes), typically used for signatures |
| [Hash](interfaces/_interfaces_runtime_types_.hash.md) | The default hash that is used accross the system. It is just a thin wrapper around [H256](classes/_primitive_h256_.h256.md)
| [I8](classes/_primitive_i8_.i8.md) | An 8-bit signed integer |
| [I16](classes/_primitive_i16_.i16.md) | A 16-bit signed integer |
| [I32](classes/_primitive_i32_.i32.md) | A 32-bit signed integer |
| [I64](classes/_primitive_i64_.i64.md) | A 64-bit signed integer |
| [I128](classes/_primitive_i128_.i128.md) | A 128-bit signed integer |
| [I256](classes/_primitive_i256_.i256.md) | A 256-bit signed integer |
| [Moment](interfaces/_interfaces_runtime_types_.moment.md) | A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust) |
| [Null](classes/_primitive_null_.null.md) | Implements a type that does not contain anything (apart from `null`) |
| [Origin](interfaces/_interfaces_runtime_types_.origin.md) | Where Origin occurs, it should be ignored as an internal-only value |
| [Signature](interfaces/_interfaces_runtime_types_.signature.md) | The default signature that is used accross the system |
| [ExtrinsicPayload](interfaces/_interfaces_runtime_types_.extrinsicpayload.md) | A signing payload for an [Extrinsic](interfaces/_interfaces_runtime_types_.extrinsic.md). For the final encoding, it is variable length based on the contents included |
| [StorageData](classes/_primitive_storagedata_.storagedata.md) | Data retrieved via Storage queries and data for key-value pairs |
| [StorageKey](classes/_primitive_storagekey_.storagekey.md) |  A representation of a storage key (typically hashed) in the system |
| [Text](classes/_primitive_text_.text.md) | This is a string wrapper, along with the length. |
| [Type](interfaces/_interfaces_runtime_types_.block.md#type) | This is a extended version of String, specifically to handle types |
| [U8](classes/_primitive_u8_.u8.md) | An 8-bit unsigned integer |
| [U16](classes/_primitive_u16_.u16.md) | A 16-bit unsigned integer |
| [U32](classes/_primitive_u32_.u32.md) | A 32-bit unsigned integer |
| [U64](classes/_primitive_u64_.u64.md) | A 64-bit unsigned integer |
| [U128](classes/_primitive_u128_.u128.md) | A 128-bit unsigned integer |
| [U256](classes/_primitive_u256_.u256.md) | A 256-bit unsigned integer |
| [USize](classes/_primitive_usize_.usize.md) | A System default unsigned number, typically used in RPC to report non-consensus data |
| [Weight](interfaces/_interfaces_runtime_types_.weight.md) | Numeric range of a transaction weight. |
| [WeightMultiplier](interfaces/_interfaces_runtime_types_.weightmultiplier.md) | Representation of a weight multiplier. This represents how a fee value can be computed from a weighted transaction. |

## Substrate types

These custom types implement specific types that are found as part of the Substrate core. They're all extensions of one of the codec types:

| **Types** | |
| --- | --- |
| [Amount](interfaces/_interfaces_deprecated_types_.amount.md) | The Substrate Amount representation as a [Balance](interfaces/_interfaces_runtime_types_.balance.md) |
| [ApprovalFlag](interfaces/_interfaces_elections_types_.approvalflag.md) | Approval flag, implemented as a [U32](classes/_primitive_u32_.u32.md) |
| [AssetOf](interfaces/_interfaces_deprecated_types_.assetof.md) | The Substrate AssetOf representation as a [Balance](interfaces/_interfaces_runtime_types_.balance.md) |
| [AuthorityId](interfaces/_interfaces_consensus_types_.authorityid.md) | Wrapper for a AuthorityId. Same as an normal AccountId |
| [[AuthoritiesChange]] | Log for Authories changed |
| [AuthorityWeight](interfaces/_interfaces_grandpa_types_.authorityweight.md) | The weight of an authority |
| [Balance](interfaces/_interfaces_runtime_types_.balance.md) | The Substrate Balance representation as a [U128](classes/_primitive_u128_.u128.md) |
| [BalanceLock](interfaces/_interfaces_balances_types_.balancelock.md) | The Substrate BalanceLock for staking |
| [BalanceOf](interfaces/_interfaces_runtime_types_.balanceof.md) | The Substrate BalanceOf representation as a [Balance](interfaces/_interfaces_runtime_types_.balance.md) |
| [BlockNumber](interfaces/_interfaces_runtime_types_.blocknumber.md) | A representation of a Substrate BlockNumber, implemented as a [U64](classes/_primitive_u64_.u64.md) |
| [CodeHash](interfaces/_interfaces_contracts_types_.codehash.md) | The default contract code hash that is used accross the system |
| [Conviction](interfaces/_interfaces_democracy_types_.conviction.md) | A value denoting the strength of conviction of a vote. |
| [Consensus](interfaces/_interfaces_runtime_types_.consensus.md) | Log item indicating consensus |
| [ContractInfo](interfaces/_interfaces_contracts_types_.contractinfo.md) | The contract information for a given contract |
| [ContractStorageKey](interfaces/_interfaces_contracts_types_.contractstoragekey.md) | A representation of a storage key for contracts |
| [EraIndex](interfaces/_interfaces_staking_types_.eraindex.md) | A representation for the era count |
| [Exposure](interfaces/_interfaces_staking_types_.exposure.md) | A snapshot of the stake backing a single validator in the system |
| [Gas](interfaces/_interfaces_contracts_types_.gas.md) | A gas number type for Substrate, extending [U64](classes/_primitive_u64_.u64.md) |
| [Heartbeat](interfaces/_interfaces_imonline_types_.heartbeat.md) | Heartbeat which is send/received. |
| [IndividualExposure](interfaces/_interfaces_staking_types_.individualexposure.md) | The Substrate IndividualExposure for staking |
| [InherentOfflineReport](interfaces/_interfaces_deprecated_types_.inherentofflinereport.md) | Describes the offline-reporting extrinsic |
| [Justification](interfaces/_interfaces_runtime_types_.justification.md) | A generic justification as a stream of [Bytes](classes/_primitive_bytes_.bytes.md), this is specific per consensus implementation |
| [Key](interfaces/_interfaces_system_types_.key.md) | The Substrate Key representation as a [Bytes](classes/_primitive_bytes_.bytes.md) (`vec<u8>`) |
| [Keys](interfaces/_interfaces_session_types_.keys.md) | The session keys for both Grandpa (ed25519) and Babe (sr25519) |
| [KeyValue](interfaces/_interfaces_runtime_types_.keyvalue.md) |  KeyValue structure. Since most of the keys and resultant values in Subtrate are hashed and/or encoded, keys and values are reprsented as [Bytes](classes/_primitive_bytes_.bytes.md) |
| [KeyValueOption](interfaces/_interfaces_rpc_types_.keyvalueoption.md) | A key/value change. Similar to the [KeyValue](interfaces/_interfaces_runtime_types_.keyvalue.md) structure, but the value can be optional |
| [LockIdentifier](interfaces/_interfaces_runtime_types_.lockidentifier.md) | The Substrate LockIdentifier for staking |
| [LockPeriods](interfaces/_interfaces_deprecated_types_.lockperiods.md) | A number of lock periods |
| [MemberCount](interfaces/_interfaces_collective_types_.membercount.md) | A number of council members |
| [[MisbehaviorKind]] | An [[EnumType]] containing a Bft misbehaviour |
| [[MisbehaviorReport]] | A Misbehaviour report of [[MisbehavioirKind]] against a specific [AuthorityId](interfaces/_interfaces_consensus_types_.authorityid.md) |
| [NewAccountOutcome](interfaces/_interfaces_deprecated_types_.newaccountoutcome.md) | Enum to track the outcome for creation of an [AccountId](interfaces/_interfaces_runtime_types_.accountid.md) |
| [NextAuthority](interfaces/_interfaces_grandpa_types_.nextauthority.md) | The next authority available as [SessionKey](interfaces/_interfaces_deprecated_types_.sessionkey.md) |
| [[Nonce]] | The Nonce or number of transactions sent by a specific account |
| [[NonceCompact]] | The Compact<Nonce> or number of transactions sent by a specific account |
| [OpaqueKey](interfaces/_interfaces_deprecated_types_.opaquekey.md) | A key represented as a [Bytes](classes/_primitive_bytes_.bytes.md) |
| [Perbill](interfaces/_interfaces_runtime_types_.perbill.md) | Parts per billion (see also [Permill](interfaces/_interfaces_runtime_types_.permill.md)) |
| [Permill](interfaces/_interfaces_runtime_types_.permill.md) | Parts per million (See also [Perbill](interfaces/_interfaces_runtime_types_.perbill.md)) |
| [PrefabWasmModule](interfaces/_interfaces_contracts_types_.prefabwasmmodule.md) | Struct to encode the vesting schedule of an individual account |
| [PropIndex](interfaces/_interfaces_democracy_types_.propindex.md) | An increasing number that represents a specific council proposal index in the system |
| [Proposal](interfaces/_interfaces_democracy_types_.proposal.md) | A proposal in the system. It just extends [Call](interfaces/_interfaces_runtime_types_.call.md) (Proposal = Call in Rust) |
| [ProposalIndex](interfaces/_interfaces_collective_types_.proposalindex.md) | An increasing number that represents a specific council proposal index in the system |
| [ReferendumIndex](interfaces/_interfaces_democracy_types_.referendumindex.md) | An increasing number that represents a specific referendum in the system |
| [ReferendumInfo](interfaces/_interfaces_democracy_types_.referenduminfo.md) | Info regarding an ongoing referendum |
| [RewardDestination](interfaces/_interfaces_staking_types_.rewarddestination.md) | A destination account for payment |
| [Schedule](interfaces/_interfaces_contracts_types_.schedule.md) | Definition of the cost schedule and other parameterizations for wasm vm |
| [Seal](interfaces/_interfaces_runtime_types_.seal.md) | Log item indicating a sealing event |
| [SeedOf](interfaces/_interfaces_contracts_types_.seedof.md) | The Substrate SeedOf representation as a [Hash](interfaces/_interfaces_runtime_types_.hash.md) |
| [SessionIndex](interfaces/_interfaces_session_types_.sessionindex.md) | Simple index type with which we can count sessions as [U32](classes/_primitive_u32_.u32.md) |
| [SessionKey](interfaces/_interfaces_deprecated_types_.sessionkey.md) | Wrapper for a SessionKey. Same as an normal [AuthorityId](interfaces/_interfaces_consensus_types_.authorityid.md), i.e. a wrapper around publicKey |
| [SetIndex](interfaces/_interfaces_elections_types_.setindex.md) | Set index, implemented as a [U32](classes/_primitive_u32_.u32.md) |
| [StakingLedger](interfaces/_interfaces_staking_types_.stakingledger.md) | The ledger of a (bonded) stash |
| [StoredPendingChange](interfaces/_interfaces_grandpa_types_.storedpendingchange.md) | Stored pending change for a Grandpa events |
| [StoredState](interfaces/_interfaces_grandpa_types_.storedstate.md) | Current state of the GRANDPA authority set. State transitions must happen in the same order of states defined below, e.g. `Paused` implies a prior `PendingPause` |
| [TreasuryProposal](interfaces/_interfaces_treasury_types_.treasuryproposal.md) | A Proposal made for Treasury |
| [UncleEntryItem](interfaces/_interfaces_authorship_types_.uncleentryitem.md) | Information about an uncle to include |
| [UnlockChunk](interfaces/_interfaces_staking_types_.unlockchunk.md) | Just a Balance/BlockNumber tuple to encode when a chunk of funds will be unlocked |
| [ValidatorId](interfaces/_interfaces_runtime_types_.validatorid.md) | Validator in the system, maps to an AccountId |
| [ValidatorPrefs](interfaces/_interfaces_staking_types_.validatorprefs.md) | Validator preferences |
| [VestingSchedule](interfaces/_interfaces_balances_types_.vestingschedule.md) | Struct to encode the vesting schedule of an individual account |
| [Vote](interfaces/_interfaces_elections_types_.vote.md) | A number of lock periods, plus a vote, one way or the other |
| [Votes](interfaces/_interfaces_collective_types_.votes.md) | Info for keeping track of a council motion being voted on. |
| [VoteIndex](interfaces/_interfaces_elections_types_.voteindex.md) | Voting index, implemented as a [U32](classes/_primitive_u32_.u32.md) |
| [VoterInfo](interfaces/_interfaces_elections_types_.voterinfo.md) | The activity status of a voter. |
| [VoteThreshold](interfaces/_interfaces_elections_types_.votethreshold.md) | Voting threshold, used inside proposals to set change the voting tally |
| [WithdrawReasons](interfaces/_interfaces_balances_types_.withdrawreasons.md) | The Substrate WithdrawReasons for staking |

## Polkadot types

These types are only available in Polkadot chains -

| **Types** | |
| --- | --- |
| [AuctionIndex](interfaces/_interfaces_parachains_types_.auctionindex.md) | A parachain auction index as a [U32](classes/_primitive_u32_.u32.md) |
| [AttestedCandidate](interfaces/_interfaces_parachains_types_.attestedcandidate.md) | An attested candidate |
| [Bidder](interfaces/_interfaces_parachains_types_.bidder.md) | The desired target of a bidder in an auction. |
| [LeasePeriod](interfaces/_interfaces_parachains_types_.leaseperiod.md) | The length of the lease for a parachain |
| [LeasePeriodOf](interfaces/_interfaces_parachains_types_.leaseperiodof.md) | The length of the lease for a parachain |
| [IncomingParachain](interfaces/_interfaces_parachains_types_.incomingparachain.md) | Information regarding a parachain that will be deployed. |
| [NewBidder](interfaces/_interfaces_parachains_types_.newbidder.md) | A bidder identifier, which is just the combination of an account ID and a sub-bidder ID. This is called `NewBidder` in order to distinguish between bidders that would deploy a *new* parachain and pre-existing parachains bidding to renew themselves. |
| [ParachainDispatchOrigin](interfaces/_interfaces_parachains_types_.parachaindispatchorigin.md) | Which origin a parachain's message to the relay chain should be dispatched from. |
| [ParaId](interfaces/_interfaces_parachains_types_.paraid.md) | Identifier for a deployed parachain implemented as a [U32](classes/_primitive_u32_.u32.md) |
| [ParaIdOf](interfaces/_interfaces_parachains_types_.paraidof.md) | Identifier for a deployed parachain implemented as a [U32](classes/_primitive_u32_.u32.md) |
| [SlotRange](interfaces/_interfaces_parachains_types_.slotrange.md) | A compactly represented sub-range from the series (0, 1, 2, 3) |
| [SubId](interfaces/_interfaces_parachains_types_.subid.md) | A sub-bidder identifier. Used to distinguish between different logical bidders coming from the same account ID. |
| [UpwardMessage](interfaces/_interfaces_parachains_types_.upwardmessage.md) | A message from a parachain to its Relay Chain |
| [WinningData](interfaces/_interfaces_parachains_types_.winningdata.md) | Winning data type. This encodes the top bidders of each range together with their bid. |
| [WinningDataEntry](interfaces/_interfaces_parachains_types_.winningdataentry.md) | And entry in the [WinningData](interfaces/_interfaces_parachains_types_.winningdata.md) fixed vector |

## RPC types

These types are not used in the runtime, but are rather used in RPC results:

| **Types** | |
| --- | --- |
| [Block](interfaces/_interfaces_runtime_types_.block.md) | A block encoded with header and extrinsics |
| [ChainProperties](interfaces/_interfaces_rpc_types_.chainproperties.md) | Wraps the properties retrieved from the chain via the `system.properties` RPC call |
| [Digest](interfaces/_interfaces_runtime_types_.digest.md) | A [Header](interfaces/_interfaces_runtime_types_.header.md) Digest |
| [DigestOf](interfaces/_interfaces_system_types_.digestof.md) | A [Header](interfaces/_interfaces_runtime_types_.header.md) Digest |
| [DigestItem](interfaces/_interfaces_runtime_types_.digestitem.md) | A [[EnumType]] the specifies the specific item in the logs of a [Digest](interfaces/_interfaces_runtime_types_.digest.md) |
| [ExtrinsicStatus](interfaces/_interfaces_rpc_types_.extrinsicstatus.md) | An EnumType that indicates the status of the Extrinsic as been submitted |
| [Header](interfaces/_interfaces_runtime_types_.header.md) | A [Block](interfaces/_interfaces_runtime_types_.block.md) header |
| [Health](interfaces/_interfaces_rpc_types_.health.md) | A system health indicator, reported back over RPC |
| [NetworkState](interfaces/_interfaces_rpc_types_.networkstate.md) | Wraps the properties retrieved from the chain via the `system.network_state` RPC call |
| [Metadata](classes/_metadata_metadata_.metadata.md) | The versioned runtime metadata as a decoded structure |
| [PeerInfo](interfaces/_interfaces_rpc_types_.peerinfo.md) | A system peer info indicator, reported back over RPC |
| [RuntimeVersion](interfaces/_interfaces_rpc_types_.runtimeversion.md) | A [Tuple](classes/_codec_tuple_.tuple.md) that conatins the [ApiId](interfaces/_interfaces_rpc_types_.apiid.md) and [U32](classes/_primitive_u32_.u32.md) version |
| [SignedBlock](interfaces/_interfaces_runtime_types_.signedblock.md) | A [Block](interfaces/_interfaces_runtime_types_.block.md) that has been signed and contains a [Justification](interfaces/_interfaces_runtime_types_.justification.md) |
| [StorageChangeSet](interfaces/_interfaces_rpc_types_.storagechangeset.md) | A set of storage changes. It contains the [Block](interfaces/_interfaces_runtime_types_.block.md) hash and a list of the actual changes |

## Derive types

These types are are specific for the Polkadot-JS derive API, so you won't find a representation of them in the SCALE codec or the Substrate core. They are used in the [api-derive](https://www.npmjs.com/package/@polkadot/api-derive) methods.

| **Types** | |
| --- | --- |
| [[HeaderExtended]] | A [Header](interfaces/_interfaces_runtime_types_.header.md) header with an additional `author` field that indicates the block author] |
