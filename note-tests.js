(function(exports) {
  function testNoteSavesContent() {
    var note = new Note("Buy milk");
    assert.isTrue(note.getText() === "Buy milk");
    console.log('Test for note saving content passes');
  };

  testNoteSavesContent();

  function testNoteInitializesWithId() {
    var note = new Note("Go swimming!", 0);
    assert.isTrue(note.getId() === 0);
    console.log('Test for note having a unique ID passes');
  };

  testNoteInitializesWithId();

  function testNoteListCanHoldNotes() {
    var noteList = new NoteList();
    noteList.addNote("Go shopping!");
    assert.isTrue(noteList.noteArray[0]['text'] === "Go shopping!");
    console.log('Test for note list holds passes');
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


  function testNoteListViewReturnsTruncateNote() {
    var noteList = new NoteList();
    noteList.addNote("Go shopping on Monday and don't forget to buy milk!")
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnNoteListHTML().includes("Go shopping on Monda..."))
    console.log('Test passes');
  }

  testNoteListViewReturnsTruncateNote();

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
    // The above is overwriting the original behaviour / function in the memory of the test
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
