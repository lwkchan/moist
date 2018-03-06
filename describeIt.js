(function(exports) {
  function describe(string, callback) {
    console.log(string);
    callback();
  }

  function it(string, callback) {
    console.log(string);
    callback();
  }

  exports.describe = describe;
  exports.it = it;
})(this);
