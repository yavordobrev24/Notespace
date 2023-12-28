const router = require("express").Router();
const noteService = require("../services/noteService");

router.get("/", async (req, res) => {
  const email = req.user.email;
  const { search } = req.query;
  const notes = await noteService.getAllNotes(res.locals.user._id, search);
  return res.render("notes", { notes, email, search });
});
router.get("/create", (req, res) => {
  const email = req.user.email;
  res.render("create", { email });
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
router.get("/details/:id", async (req, res) => {
  const { id } = req.params;
  const email = req.user.email;
  console.log(id);
  const note = await noteService.getSingleNote(id);
  console.log(note);
  return res.render("details", { note, email });
});
router.get("/edit/:id", (req, res) => {
  res.send("Edit note");
});
router.post("/edit/:id", (req, res) => {
  res.redirect("/");
});
router.get("/delete/:id/", (req, res) => {
  res.redirect("/");
});
module.exports = router;
