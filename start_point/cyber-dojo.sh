
if [ -f .jshintrc ]; then
  jshint --config .jshintrc *.js
fi

if [ $? == 0 ]; then
  node *Test*.js
fi
