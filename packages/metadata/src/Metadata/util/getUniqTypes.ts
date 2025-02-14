// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';

import { Option, Vec } from '@polkadot/types/codec';
import { Text, Type } from '@polkadot/types/primitive';

import flattenUniq from './flattenUniq';
import validateTypes from './validateTypes';

type Arg = { type: Type } & Codec;

type Item = {
  type: {
    isDoubleMap?: boolean;
    isMap: boolean;
    asDoubleMap?: {
      key1: Text;
      key2: Text;
      value: Text;
    };
    asMap: {
      key: Text;
      value: Text;
    };
    asType: Text;
  };
} & Codec;

type Storage = Option<Vec<Item> | {
  // v0
  functions?: Vec<Item>;
  // V7+
  items?: Vec<Item>;
} & Codec>;

type Call = { args: Vec<Arg> } & Codec;

type Calls = Option<Vec<Call>>;

type Event = { args: Vec<Type> } & Codec;

type Events = Option<Vec<Event>>;

type Module = {
  // V0
  module?: {
    call: {
      functions: Vec<Call>;
    };
  };
  // V1+
  calls?: Calls;
  // V6+
  constants?: Vec<{ type: Text } & Codec>;
  events?: Events;
  storage?: Storage;
} & Codec;

interface ExtractionMetadata {
  modules: Vec<Module>;

  // V0
  outerEvent?: {
    events: Vec<[Text, Vec<Event>] & Codec>;
  };
}

function unwrapCalls (mod: Module): Call[] {
  return mod.calls
    ? mod.calls.unwrapOr([])
    // V0
    : mod.module
      ? mod.module.call.functions
      : [];
}

function getCallNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map((mod): string[][] =>
    unwrapCalls(mod).map(({ args }): string[] =>
      args.map((arg): string =>
        arg.type.toString()
      )
    )
  );
}

function getConstantNames ({ modules }: ExtractionMetadata): string[][] {
  return modules.map(({ constants }): string[] =>
    constants
      ? constants.map((constant): string =>
        constant.type.toString()
      )
      : []
  );
}

function unwrapEvents (events?: Events): Event[] {
  if (!events) {
    return [];
  }

  return events.unwrapOr([]);
}

function getEventNames ({ modules, outerEvent }: ExtractionMetadata): string[][][] {
  const mapArg = ({ args }: Event): string[] =>
    args.map((arg): string =>
      arg.toString()
    );

  // V0
  if (outerEvent) {
    return outerEvent.events.map(([, events]): string[][] =>
      events.map(mapArg)
    );
  }

  // V1+
  return modules.map(({ events }): string[][] =>
    unwrapEvents(events).map(mapArg)
  );
}

function unwrapStorage (storage?: Storage): Item[] {
  if (!storage) {
    return [];
  }

  const data = storage.unwrapOr([]);

  return Array.isArray(data)
    ? data
    : (data.items || data.functions) as Item[];
}

function getStorageNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ storage }): string[][] =>
    unwrapStorage(storage).map(({ type }): string[] => {
      if (type.isDoubleMap && type.asDoubleMap) {
        return [
          type.asDoubleMap.key1.toString(),
          type.asDoubleMap.key2.toString(),
          type.asDoubleMap.value.toString()
        ];
      } else if (type.isMap) {
        return [
          type.asMap.key.toString(),
          type.asMap.value.toString()
        ];
      } else {
        return [
          type.asType.toString()
        ];
      }
    })
  );
}

export default function getUniqTypes (meta: ExtractionMetadata, throwError: boolean): string[] {
  const types = flattenUniq([
    getCallNames(meta),
    getConstantNames(meta),
    getEventNames(meta),
    getStorageNames(meta)
  ]);

  validateTypes(types, throwError);

  return types;
}
