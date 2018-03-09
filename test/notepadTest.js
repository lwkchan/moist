describe('Notepad', function() {
  var notepad;

  beforeEach(function() {
    notepad = new Notepad();
    console.log('calling before each...');
  });

  it('is equal', function() {
    expect.toEqual(1, 1);
  });

  it('is empty', function() {
    expect.toBeEmpty(notepad.content);
  });

  it('is still empty?', function() {
    notepad.content.push('Am I empty still?');
    expect.toBeEmpty(notepad.content);
  });

  it('includes Hello World', function() {
    notepad.content.push('Hello World');
    expect.toInclude(notepad.content, 'Hello World');
  });
});
