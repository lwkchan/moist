const expect = { //vars are accessible everywhere, even when module.
  toEqual: function(assert, expect) {
    return (assert === expect ? console.log("Equality test passed.") : (console.log(assert + " does not equal " + expect + ". The test failed.")))
  },
  toInclude: function(assert, expect) {
    return (assert.includes(expect) ? console.log("Inclusion test passed") : console.log("The tested object does not include " + expect + ". The test failed."))
  },
  toBeTrue: function(assert) {
    return (assert === true ? console.log("Truth test passed") : console.log("The statement is not truthy. The test failed."))
  },
  toBeEmpty: function(assert) {
    return (assert.length === 0 ? console.log("The assertion is empty, test passed.") : console.log("The assertion is not empty, test failed."))
  }
}
