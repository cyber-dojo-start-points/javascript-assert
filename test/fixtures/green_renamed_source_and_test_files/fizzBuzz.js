'use strict';

module.exports = {
  fizzBuzz
};

function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  }
  return String(n);
}
