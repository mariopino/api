// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType } from '@polkadot/types/codec';

import Metadata from '../';
import latestSubstrateV0 from './static-substrate.json';
import rpcData from './static';
import { defaultValues, toLatest } from '../util/testUtil';

describe('Metadata', (): void => {
  it('works with fallback', (): void => {
    const metadata = new Metadata(rpcData);
    const metadataV0 = createType('MetadataV0', rpcData);

    expect(metadata.asV0.toString()).toEqual(metadataV0.toString());
  });

  it('decodes latest substrate properly', (): void => {
    const metadata = new Metadata(rpcData);
    const json = metadata.asV0.toJSON();

    console.error(JSON.stringify(json));

    expect(metadata.version).toBe(0);
    expect(metadata.asV0.modules.length).not.toBe(0);
    expect(json).toEqual(latestSubstrateV0);
  });

  toLatest(0, rpcData);

  defaultValues(rpcData);
});
