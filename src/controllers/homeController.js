const { getAllNotes } = require("../services/noteService");

const router = require("express").Router();

router.get("/", async (req, res) => {
  if (res.locals.isAuthenticated) {
    const notes = await getAllNotes(res.locals.user._id);
    const currentTime = Number(Date.now());
    return res.render("notes", { notes, currentTime });
  }
  res.render("home");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
