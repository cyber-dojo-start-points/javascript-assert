'use strict';

module.exports = {
  product
};

function product(lhs, rhs) {
  // Nothing requires this file, so node never loads it and the half-written
  // expression would never be seen. cyber-dojo.sh hands jshint *.js though,
  // which is every source file in the sandbox, so it is linted anyway.
  return lhs * ;
}
