'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// This name sorts before hikerTest.js, so it is required first. Its assertion
// is false, so it throws an AssertionError that ends the process before
// hikerTest.js is reached, and the light is red.
assert.equal(String(hiker.answer()).length, 3);

console.log('answerSizeTest ran');
