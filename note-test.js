function noteHasNoContent() {
  var note = new Note();
  expect.toBeEmpty(note.content);
};

noteHasNoContent();
