// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../../injector';

import ExtrinsicSignature from './ExtrinsicSignature';

describe('ExtrinsicSignatureV4', (): void => {
  it('encodes to a sane Uint8Array', (): void => {
    const u8a = new Uint8Array([
      // signer as an AccountIndex
      0x09,
      // signature type
      0x01,
      // signature
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      // extra stuff
      0x00, // immortal,
      0x04, // nonce, compact
      0x08 // tip, compact
    ]);

    expect(
      new ExtrinsicSignature(u8a, { isSigned: true }).toU8a()
    ).toEqual(u8a);
  });
});
