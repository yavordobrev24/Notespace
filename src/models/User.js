const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  notes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Note",
    },
  ],
});

const User = userSchema("User", userSchema);

module.exports = User;