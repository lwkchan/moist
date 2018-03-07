function Notepad(name) {
  this.content = [];
  this.name = name;
  this.colors = [];
}

Notepad.prototype.displayNotes = function() {
  console.log(this.content.join(''));
};
