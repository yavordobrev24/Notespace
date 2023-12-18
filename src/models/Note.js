const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Number,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
