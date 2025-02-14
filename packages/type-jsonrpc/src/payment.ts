// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE order here is the same as in Rust, alphabetical below

const queryInfo: RpcMethodOpt = {
  description: 'Retrieves the fee information for an encoded extrinsic',
  params: [
    createParam('extrinsic', 'Bytes'),
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'RuntimeDispatchInfo'
};

const section = 'payment';

/**
 * @summary Calls to retrieve payment information.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Methods that retrieves payment information, e.g. fee calculations',
  section,
  methods: {
    queryInfo: createMethod(section, 'queryInfo', queryInfo)
  }
};
