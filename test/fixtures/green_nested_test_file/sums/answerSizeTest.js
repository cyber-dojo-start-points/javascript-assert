'use strict';

const hiker = require('../hiker.js');
const assert = require('assert');

// A test in a sub-directory. cyber-dojo.sh's node glob descends, so this file
// is required like any other and its print reaches the output.
assert.equal(String(hiker.answer()).length, 2);

console.log('nested answerSizeTest ran');
