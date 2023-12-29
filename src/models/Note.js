const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: { type: String, required: true },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Object,
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
