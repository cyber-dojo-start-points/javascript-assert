'use strict';

const fizzBuzz = require('./fizzBuzz.js');
const assert = require('assert');

// Neither hiker.js nor hikerTest.js is here. The new test file still matches
// the *Test*.js glob, which is all cyber-dojo.sh asks of it.
assert.equal(fizzBuzz.fizzBuzz(1), '1');
assert.equal(fizzBuzz.fizzBuzz(15), 'FizzBuzz');

console.log('All tests passed');
