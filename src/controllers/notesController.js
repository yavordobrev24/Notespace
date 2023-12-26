const router = require("express").Router();
const noteService = require("../services/noteService");

router.get("/", async (req, res) => {
  const notes = await noteService.getAllNotes(res.locals.user._id);

  return res.render("notes", { notes });
});
router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/create", async (req, res) => {
  const { title, content } = req.body;
  const payload = {
    title,
    content,
    owner: res.locals.user._id,
  };
  await noteService.createNote(payload);

  res.redirect("/notes");
});
router.get("/:noteId/details", (req, res) => {
  res.send("Details of note");
});
router.get("/:noteId/edit", (req, res) => {
  res.send("Edit note");
});
router.post("/:noteId/edit", (req, res) => {
  res.redirect("/");
});
router.get("/:noteId/delete/", (req, res) => {
  res.redirect("/");
});
module.exports = router;
