var resultDiv = document.getElementById('results');
var paragraph;
var br;

const expect = {
  toEqual: function(assert, expect) {
    createElements();
    var passingText = stringCssify('Equality', true, expect, assert);
    var failingText = stringCssify('Equality', false, expect, assert);
    assert === expect
      ? paragraph.appendChild(passingText)
      : paragraph.appendChild(failingText);
    appendElements();
    cssify();
  },
  toInclude: function(assert, expect) {
    createElements();
    var passingText = stringCssify('inclusion', true, expect, assert);
    var failingText = stringCssify('inclusion', false, expect, assert);
    assert.includes(expect)
      ? paragraph.appendChild(passingText)
      : paragraph.appendChild(failingText);
    appendElements();
    cssify();
  },
  toBeTrue: function(assert) {
    createElements();
    var passingText = stringCssify('Truth', true, expect, assert);
    var failingText = stringCssify('Truth', false, expect, assert);
    assert === true
      ? paragraph.appendChild(passingText)
      : paragraph.appendChild(failingText);
    appendElements();
    cssify();
  },
  toBeEmpty: function(assert) {
    createElements();
    var passingText = stringCssify('Checking if its empty', true, '[]', assert);
    var failingText = stringCssify(
      'Checking if its empty',
      false,
      '[]',
      assert
    );
    assert.length === 0
      ? paragraph.appendChild(passingText)
      : paragraph.appendChild(failingText);
    appendElements();
    cssify();
  }
};

function cssify() {
  var para = resultDiv.children;
  var spongebobDry = document.getElementById('spongebob-dry');
  var moistImg = document.getElementById('moist-tests');
  var notMoistText = document.getElementById('not-moist-text');
  for (var i = 0; i < para.length; i++) {
    if (para[i].innerHTML.includes('passed')) {
      para[i].className = 'passed';
    } else if (para[i].innerHTML.includes('failed')) {
      para[i].className = 'failed';
      spongebobDry.className = 'not-moist-img-display';
      moistImg.className = 'moist-img-hide';
      notMoistText.className = 'not-moist-img-display';
    }
  }
}

function createElements() {
  paragraph = document.createElement('p');
  br = document.createElement('br');
}

function appendElements() {
  resultDiv.appendChild(paragraph);
  paragraph.appendChild(br);
}

function randomWordGenerator() {
  var span = document.createElement('span');
  var words = [
    'Excruciatingly moist',
    'delightfully moist',
    'magnificently moist',
    'sublimely moist',
    'exquisitely moist',
    'almost too moist'
  ];
  var text = words[Math.floor(Math.random() * words.length)];
  return (span.innerHTML = text);
}

function stringCssify(string, boolean, expect, assert) {
  if (boolean) {
    return document.createTextNode(
      `This test is ${randomWordGenerator()}, ${string} test passed. Expected ${expect}, got ${assert}.`
    );
  } else {
    return document.createTextNode(
      `Oh dear its failed. This test isn't good. Expected ${expect}, got ${assert}.`
    );
  }
}
