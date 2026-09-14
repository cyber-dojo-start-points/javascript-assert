'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

assert.equal(hiker.answer(), 42);
assert.equal(String(hiker.answer()).length, 2);
assert.notEqual(hiker.answer(), 6 * 9);

console.log('All tests passed');
