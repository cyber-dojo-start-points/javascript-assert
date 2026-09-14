'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// ansewr is not defined anywhere. jshint is configured with "undef": true, so
// it names it rather than letting node reach it.
assert.equal(ansewr(hiker), 42);

console.log('All tests passed');
