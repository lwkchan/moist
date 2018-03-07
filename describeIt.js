var beforeEachCallback;

const beforeEach = function(callback) {
  beforeEachCallback = callback;
};

(function(exports) {
  function describe(string, callback) {
    console.log('%c' + string, 'color: darkblue');
    callback();
  }

  function it(string, callback) {
    console.log(string);
    if (beforeEachCallback !== undefined) {
      beforeEachCallback();
    }
    callback();
  }

  exports.describe = describe; // exports it to global scope
  exports.it = it; // exports it to global scope
})(this);
