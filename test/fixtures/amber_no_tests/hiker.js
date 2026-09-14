'use strict';

module.exports = {
  answer
};

// There is no test file at all, so the *Test*.js glob matches nothing and node
// is handed the pattern itself as a filename. It cannot find a module of that
// name, which is neither a jshint error nor an AssertionError, so the light is
// amber.
function answer() {
  return 6 * 7;
}
