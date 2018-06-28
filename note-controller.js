(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnNoteListHTML();
  };

  exports.NoteController = NoteController;

})(this);
