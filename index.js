/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { apply } = require('./src/apply');
const transition = require('./src/transition');
const breakpoints = require('./src/breakpoints');
const spacing = require('./src/spacing');
const themes = require('./src/themes');
const type = require('./src/type');

module.exports = apply([
  breakpoints,
  spacing,
  themes,
  transition,
  type,
]);
