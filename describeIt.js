var Before = function() {};

Before.prototype.beforeEach = function(callback) {
 this.callback = callback;
};

var before = new Before();

(function(exports) {
 function describe(string, callback) {
   console.log('%c' + string, 'color: darkblue');
   callback();
 }

 function it(string, callback) {
   console.log(string);
   if (before.callback !== undefined) {
     before.callback();
   }
   callback();
 }

 exports.describe = describe; // exports it to global scope
 exports.it = it; // exports it to global scope
})(this);
