'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// This name sorts after hikerTest.js, so that file has already printed its
// green line by the time this one is required. The assertion below is false,
// so the run ends here and the light is red despite the green line above it.
assert.equal(String(hiker.answer()).length, 3);

console.log('zebraTest ran');
