const expect = { //vars are accessible everywhere, even when module.
  toEqual: function(assert, expect) {
    return (assert === expect ? console.log('%c Equality test passed.', 'color: green') : (console.log('%c The test failed as the assertion does not equal the expectation', 'color: red')))
  },
  toInclude: function(assert, expect) {
    return (assert.includes(expect) ? console.log('%c Inclusion test passed', 'color: green') : console.log('%c The test failed as the tested object does not include the expected content', 'color: red' ))
  },
  toBeTrue: function(assert) {
    return (assert === true ? console.log('%c Truth test passed', 'color: green') : console.log("The statement is not truthy. The test failed."))
  },
  toBeEmpty: function(assert) {
    return (assert.length === 0 ? console.log('%c The assertion is empty, test passed.', 'color: green') : console.log('%c The assertion is not empty, test failed.', 'color: red'))
  },
}
