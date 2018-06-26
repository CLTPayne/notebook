(function(exports) {
  function testNoteSavesContent() {
    var note = new Note();
    note.save("Buy milk");
    assert.isTrue(note.text === "Buy milk");

  };

  testNoteSavesContent();
})(this);

// Add test for getText function
