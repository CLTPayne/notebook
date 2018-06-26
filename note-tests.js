(function(exports) {
  function testNoteSavesContent() {
    var note = new Note("Buy milk");
    assert.isTrue(note.getText() === "Buy milk");

  };

  testNoteSavesContent();
})(this);
