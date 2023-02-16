/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { themes, unstable_metadata } = require('@carbon/themes');
const merge = require('lodash.merge');
const { formatToken } = require('./tokens');

function extend(config) {
  const theme = {
    colors: {},
  };

  for (const [themeName, themeData] of Object.entries(themes)) {
    for (const [token, value] of Object.entries(themeData)) {
      var themeAndTokenName = `${themeName}-${token}`;
      if (isColorToken(token)) {
        theme.colors[themeAndTokenName] = value;
      }
    }
  }

  return merge(config, {
    theme,
  });
}

function isColorToken(tokenName) {
  return unstable_metadata.v11.some(obj => obj.name === formatToken(tokenName) && obj.type === 'color');
}

module.exports = {
  extend,
};
