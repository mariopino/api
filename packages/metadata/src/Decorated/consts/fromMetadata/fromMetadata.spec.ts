// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '@polkadot/types/injector';

import { ClassOf, Metadata } from '@polkadot/types';

import rpcMetadata from '../../../Metadata/static';
import fromMetadata from '../fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata(rpcMetadata);
const consts = fromMetadata(metadata);

describe('fromMetadata', (): void => {
  it('should return constants with the correct type and value', (): void => {
    expect(consts.democracy.cooloffPeriod).toBeInstanceOf(ClassOf('BlockNumber'));
    expect(consts.democracy.cooloffPeriod.toHex()).toEqual('0x000c4e00');
  });
});
