'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// The linter checks identifiers, not the properties reached through one, so a
// misspelled method name gets past it and node throws a TypeError instead. A
// TypeError is neither a lint error nor an AssertionError, so the light is
// amber rather than red.
assert.equal(hiker.ansewr(), 42);

console.log('All tests passed');
