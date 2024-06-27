function receivesAFunction(callback) {
  // Calls the callback function directly
  callback();
}

function returnsANamedFunction() {
  // Defining and returning a named function
  function namedFunction() {
    // Function body
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  // Defining and returning anonymous function
  return function () {
    // Function body.
  };
}
