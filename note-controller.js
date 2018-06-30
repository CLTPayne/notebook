(function(exports) {

  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
  };

  // Can inject the NoteLiveView as the arguement instead

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnNoteListHTML();
  };

  exports.NoteController = NoteController;

})(this);
