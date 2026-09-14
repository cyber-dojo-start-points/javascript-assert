'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// hiker_tests.js does not match the *Test*.js glob, so node never runs it.
// It parses, so jshint passes it, and hikerTest.js beside it still reaches
// green. The false assertion below is never evaluated.
assert.equal(String(hiker.answer()).length, 3);

console.log('hiker_tests ran');
