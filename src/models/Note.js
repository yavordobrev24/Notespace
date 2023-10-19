const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  date: { type: String, required: true },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Note = noteSchema("Note", noteSchema);

module.exports = Note;
