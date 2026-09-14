'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// An extra test file beyond the one the kata ships with. It is required along
// with hikerTest.js, so its print and the green line both appear.
assert.equal(String(hiker.answer()).length, 2);

console.log('answerSizeTest ran');
