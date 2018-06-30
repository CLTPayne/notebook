(function(exports) {

  function Note(text, id) {
    this.text = text;
    this.id = id
  };

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.getId = function() {
    return this.id;
  }

  exports.Note = Note;
})(this);
