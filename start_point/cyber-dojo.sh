
if [ -f .jshintrc ]; then
  jshint --config .jshintrc *.js
fi

# One node process requires every test file, at any depth, so a test in a
# sub-directory runs like any other and a second test file is not silently
# left out. Naming the files as arguments instead would run only the first,
# since node takes one script and treats the rest as its arguments.
if [ $? == 0 ]; then
  node --eval 'require("node:fs").globSync("**/*Test*.js").sort().forEach(f => require("./" + f))'
fi
