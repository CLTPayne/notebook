(function(exports) {
  function testNoteSavesContent() {
    var note = new Note("Buy milk");
    assert.isTrue(note.getText() === "Buy milk");
    console.log('Test passes');
  };

  testNoteSavesContent();

  function testNoteListCanHoldNotes() {
    var noteList = new NoteList();
    noteList.addNote("Go shopping!");
    assert.isTrue(noteList.noteArray[0]['text'] === "Go shopping!");
    console.log('Test passes');
  };

  testNoteListCanHoldNotes();

  function testNoteListViewReturnsAStringOfHTML() {
    var noteList = new NoteList();
    noteList.addNote("First Test Note");
    noteList.addNote("Second Test Note");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnHTML().includes("<ul><li><div>First Test Note</div></li><li><div>Second Test Note</div></li></ul>"));
    console.log('Test passes')
  };

  testNoteListViewReturnsAStringOfHTML();

})(this);
