(function(exports) {
  function Note() {
    this.text = "";
  };

  Note.prototype.save = function(string) {
    this.text = string;
  };
  //
  // Note.prototype.getText = function() {
  //   return this.text
  // };

  exports.Note = Note;
})(this);
