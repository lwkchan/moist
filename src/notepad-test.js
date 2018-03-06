(function notepadIsEmpty() {
  var notepad = new Notepad();
  expect.toBeEmpty(notepad.content);
})();

(function notepadNameIsDefined() {
  var notepad = new Notepad('Terryblnotes');
  expect.toBeTrue(notepad.name != undefined);
})();

(function notepadNameCanBeSet() {
  var notepad = new Notepad('Terryblnotes');
  expect.toEqual(notepad.name, 'Terryblnotes');
})();

(function notepadCanIncludeColors() {
  var notepad = new Notepad();
  notepad.colors.push('white');
  expect.toInclude(notepad.colors, 'white');
})();
