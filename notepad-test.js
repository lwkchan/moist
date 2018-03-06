function notepadIsEmpty() {
  var notepad = new Notepad();
  expect.toBeEmpty(notepad.content);
};

notepadIsEmpty();
  
