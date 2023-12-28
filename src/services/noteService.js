const Note = require("../models/Note");
exports.getAllNotes = async (userId, search = null) => {
  const notes = await Note.find({ owner: userId }).lean();
  if (search) {
    return notes.filter((n) =>
      n.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return notes;
};
exports.createNote = (payload) => Note.create(payload);
exports.getSingleNote = (noteId) => Note.findById(noteId).lean();
