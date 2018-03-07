An npm package to test your application using pure vanilla JavaScript.

Quick Example Usage
--------

If this is your model:
```
function Notepad(name) {
  this.content = []
  this.name = name
  this.colors = []
}
```

This could be your test file:
```
(function notepadIsEmpty() {
  var notepad = new Notepad();
  expect.toBeEmpty(notepad.content);
})();

(function notepadNameIsDefined() {
  var notepad = new Notepad('My notepad');
  expect.toBeTrue(notepad.name != undefined);
})();

(function notepadNameCanBeSet() {
  var notepad = new Notepad('Moisty Notepad');
  expect.toEqual(notepad.name, 'Moisty Notepad');
})();

(function notepadCanIncludeColors() {
  var notepad = new Notepad();
  notepad.colors.push('blue');
  expect.toInclude(notepad.colors, 'blue');
})();
```

More detailed Example Usage
--------

[TBC]