'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// All three assertions are false. The first one throws and the throw ends the
// whole node process, so only that one is reported and the other two never
// run.
assert.equal(hiker.answer(), 24);
assert.equal(String(hiker.answer()).length, 3);
assert.equal(hiker.answer(), 6 * 9);

console.log('All tests passed');
