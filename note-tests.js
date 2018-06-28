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
    assert.isTrue(noteListView.returnNoteListHTML().includes("<ul><li><div>First Test Note</div></li><li><div>Second Test Note</div></li></ul>"));
    console.log('Test passes')
  };

  testNoteListViewReturnsAStringOfHTML();

  function testNoteControllerCanBeInstantiated() {
    var noteList = new NoteList();
    noteList.addNote("Favourite drink: water");
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController)
    console.log('Test Passes')
  };

//should have a double for the NoteList above ^^

  testNoteControllerCanBeInstantiated();

  function testNoteControllerAddsNoteToApp() {
    var noteListDouble = {}
    var HTMLText = "<ul><li><div>Favourite drink: coffee</div></li></ul>";
    var noteController = new NoteController(noteListDouble);

    noteController.noteListView.returnNoteListHTML = function stubReturnHTML() {
      return HTMLText;
    }
    noteController.insertHTML();
    var element = document.getElementById('app').innerHTML;

    assert.isTrue(element === "<ul><li><div>Favourite drink: coffee</div></li></ul>")
    console.log('Test Passes')
  };

  testNoteControllerAddsNoteToApp();

  function testSingleNoteViewReturnsAStringOfHTML() {
    var noteDouble = {text: "Favourite drink: wine"}
    var singleNoteView = new SingleNoteView(noteDouble)
    assert.isTrue(singleNoteView.returnSingleNoteHTML().includes("<div>Favourite drink: wine</div>"));
    console.log('Test Passes')
  };

  testSingleNoteViewReturnsAStringOfHTML();

})(this);
