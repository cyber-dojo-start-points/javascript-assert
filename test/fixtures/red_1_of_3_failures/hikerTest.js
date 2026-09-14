'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// The first assertion holds. The second does not, and an assert that does not
// hold throws, so the third one below it never runs.
assert.equal(String(hiker.answer()).length, 2);
assert.equal(hiker.answer(), 43);
assert.notEqual(hiker.answer(), 6 * 9);

console.log('All tests passed');
