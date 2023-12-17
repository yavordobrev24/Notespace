const Note = require("../models/Note");
exports.getAllNotes = (userId) => Note.find({ owner: userId }).lean();
exports.createNote = (payload) => Note.create(payload);
