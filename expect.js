const expect = { //vars are accessible everywhere, even when module.
  toEqual: function(assert, expect) {
    return (assert === expect ? "Equality test passed." : (assert + " does not equal " + expect + ". The test failed."))
  },
  toInclude: function(assert, expect) {
    return (assert.includes(expect) ? "Inclusion test passed" : ("The tested object does not include " + expect + ". The test failed."))
  },
  toBeTrue: function(assert) {
    return (assert === true ? "Truth test passed" : ("The statement is not truthy. The test failed."))
  },
  toBeEmpty: function(assert) {
    return (assert.length === 0 ? console.log("The assertion is empty, test passed.") : console.log("The assertion is not empty, test failed."))
  }
}
