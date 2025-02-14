// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    // This is not deprecated, only there for a short while, replaced by Result<(), DispatchError>
    DispatchResult: 'Result<(), Text>',
    DispatchResultOf: 'DispatchResult'
  }
};
