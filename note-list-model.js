(function(exports) {

  function NoteList() {
    this.noteArray = [];
  };

  NoteList.prototype.getNoteArray = function () {
    return this.noteArray;
  };

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    this.noteArray.push(note);
  };

  exports.NoteList = NoteList;

})(this);
