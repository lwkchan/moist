function notepadIsEmpty() {
  var notepad = new Notepad();
  expect.toBeEmpty(notepad.content);
};

notepadIsEmpty();

function notepadNameIsDefined(params) {
  var notepad = new Notepad('Terryblnotes');
  expect.toBeTrue(notepad.name != undefined);
}

notepadNameIsDefined();