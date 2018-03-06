(function(exports) {

  const itBlocks = []

  function describe(string, callback) {
    console.log('%c' + string, 'color: darkblue');
    callback();
  }

  function it(string, callback) {
    console.log(string);
    // beforeEach(callback)
    callback();
    itBlocks.push(callback());
  }

  function beforeEach(callback){
    itBlocks.forEach = function(itblock) {
      callback();
    }
  }

  exports.describe = describe; // exports it to global scope
  exports.it = it; // exports it to global scope
  exports.beforeEach = beforeEach; // exports before to global scope

})(this);
