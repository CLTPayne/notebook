(function(exports) {

  function NoteController(noteList) {
    var note
    this.noteList = noteList;
    noteList.addNote(note)
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.insertHTML = function() {
    console.log(document.getElementById('#app'));
    var element = document.getElementById('app');
    console.log(element)
    element.innerHTML = this.noteListView.returnHTML();
  };

  exports.NoteController = NoteController;

})(this);
