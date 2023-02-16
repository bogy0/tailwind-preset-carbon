/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const {
  easings,
  fast01,
  fast02,
  moderate01,
  moderate02,
  slow01,
  slow02,
} = require('@carbon/motion');
const merge = require('lodash.merge');

function extend(config) {
  const transitionTimingFunction = {};
  const transitionDuration = {
    fast01,
    fast02,
    moderate01,
    moderate02,
    slow01,
    slow02,
  };

  for (var key1 in easings) {
    for (var key2 in easings[key1]) {
      var newKey = key1 + '-' + key2;

      transitionTimingFunction[newKey] = easings[key1][key2];
    }
  }

  return merge(config, {
    theme: {
      transitionTimingFunction,
      transitionDuration,
    },
  });
}

module.exports = {
  extend,
};
