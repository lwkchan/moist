

var resultDiv = document.getElementById('results')
// console.log(document)
// console.log(resultDiv)



const expect = { //vars are accessible everywhere, even when module.
  toEqual: function(assert, expect) {
    var paragraph = document.createElement('p');
    assert === expect ? paragraph.appendChild(document.createTextNode('%c Equality test passed.')) : paragraph.appendChild('%c The test failed as the assertion does not equal the expectation');
    console.log('resultdiv');
    console.log(resultDiv);
    return resultDiv.appendChild(paragraph);


  }
  // toInclude: function(assert, expect) {
  //   return (assert.includes(expect) ? console.log('%c Inclusion test passed', 'color: green') : console.log('%c The test failed as the tested object does not include the expected content', 'color: red' ))
  // },
  // toBeTrue: function(assert) {
  //   return (assert === true ? console.log('%c Truth test passed', 'color: green') : console.log("The statement is not truthy. The test failed."))
  // },
  // toBeEmpty: function(assert) {
  //   return (assert.length === 0 ? console.log('%c The assertion is empty, test passed.', 'color: green') : console.log('%c The assertion is not empty, test failed.', 'color: red'))
  // },
}
