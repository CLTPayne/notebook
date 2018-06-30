(function(exports){

  function NoteListView(noteList) {
    this.noteList = noteList;
    this.noteHTML = [];
    this.truncate = function(string) {
      if (string.length >= 21) {
        return string.slice(0,20) + "...";
      } else {
        return string;
      };
    };
  };

  NoteListView.prototype.returnNoteListHTML = function() {
    this.noteHTML.push("<ul>");
    for(var i = 0; i < this.noteList['noteArray'].length; i++) {
      this.noteHTML.push("<li><div>" + this.truncate(this.noteList['noteArray'][i]['text']) + "</div></li>")
    }
    this.noteHTML.push("</ul>");
    return this.noteHTML.join("");
  };

  exports.NoteListView = NoteListView;
})(this);
