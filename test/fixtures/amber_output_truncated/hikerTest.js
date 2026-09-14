'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// The green line this start-point looks for is printed on stdout, so stdout is
// the stream that has to be flooded. The runner keeps the first 50K of each
// stream and drops the rest, so the green line printed after this loop is cut
// off and never reaches the rag-lambda.
for (let i = 0; i !== 4000; i += 1) {
  console.log('debug: i is ' + i + ', total is ' + (i * 2));
}

assert.equal(hiker.answer(), 42);

console.log('All tests passed');
