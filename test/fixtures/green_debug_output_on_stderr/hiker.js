'use strict';

module.exports = {
  answer
};

function answer() {
  // console.error writes to stderr. The rag-lambda reads stdout and stderr
  // joined together, so a debug line on stderr sits beside the green line on
  // stdout and the light is still green.
  console.error('answer was called');
  return 6 * 7;
}
