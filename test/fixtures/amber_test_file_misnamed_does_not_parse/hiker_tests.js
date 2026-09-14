'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// node never runs this file, because its name does not match the *Test*.js
// glob. jshint is handed *.js though, which does match it, so a file the run
// would otherwise ignore still turns the light amber.
assert.equal(String(hiker.answer()).length,

console.log('hiker_tests ran');
