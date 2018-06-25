(function(exports) {
  function testNoteSavesContent() {
    var note = new Note();
    note.save("Buy milk");

    if (note.text !== "Buy milk") {
      throw new Error("Expect note.text to equal 'Buy milk'");
    }
  };

  testNoteSavesContent();
})(this);
