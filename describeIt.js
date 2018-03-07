var beforeEachCallback;
var spiedOnObject;
var spiedOnMethod;
// var spy;

const beforeEach = function(callback) {
  beforeEachCallback = callback;
};

const spyOn = function(object, string) {
  // var spy = object[string];
  spiedOnObject = object;
  spiedOnMethod = string;
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
    // spiedOnObject[spiedOnMethod]
    if (spyOn() !== undefined) {
      if (spiedOnObject[spiedOnMethod] === undefined) {
        throw new Error('Spy was not called');
      }
    }
  }

  exports.describe = describe; // exports it to global scope
  exports.it = it; // exports it to global scope
})(this);
