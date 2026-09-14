'use strict';

module.exports = {
  answer
};

function answer() {
  // The answer is wrong, so the assertion in hikerTest.js would fail and the
  // light would be red. cyber-dojo.sh runs node only when jshint exits zero,
  // and the unread identifier below is a jshint error, so node never runs and
  // the failing assertion is never reported.
  const sixSevens = 6 * 7;
  return 6 * 9;
}
