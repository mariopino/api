// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Signer, SignerResult } from '@polkadot/api/types';
import { KeyringPair } from '@polkadot/keyring/types';

import { createType } from '@polkadot/types';
import { hexToU8a, u8aToHex } from '@polkadot/util';
import { SignerPayloadJSON, SignerPayloadRaw } from '@polkadot/types/types';

let id = 0;

export class SingleAccountSigner implements Signer {
  private keyringPair: KeyringPair;

  private signDelay: number;

  constructor (keyringPair: KeyringPair, signDelay = 0) {
    this.keyringPair = keyringPair;
    this.signDelay = signDelay;
  }

  public async signPayload (payload: SignerPayloadJSON): Promise<SignerResult> {
    if (payload.address !== this.keyringPair.address) {
      throw new Error('does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signed = createType('ExtrinsicPayload', payload, { version: payload.version }).sign(this.keyringPair);

        resolve({
          id: ++id,
          ...signed
        });
      }, this.signDelay);
    });
  }

  public async signRaw ({ address, data }: SignerPayloadRaw): Promise<SignerResult> {
    if (address !== this.keyringPair.address) {
      throw new Error('does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signature = u8aToHex(this.keyringPair.sign(hexToU8a(data)));

        resolve({
          id: ++id,
          signature
        });
      }, this.signDelay);
    });
  }
}
