const router = require("express").Router();
const noteService = require("../services/noteService");

router.get("/add", (req, res) => {
  res.render("add");
});
router.post("/add", async (req, res) => {
  const { title, image, description } = req.body;
  const payload = { title, image, description, owner: res.locals.user._id };
  await noteService.createNote(payload);

  res.redirect("/");
});
router.get("/details/:noteId", (req, res) => {
  res.send("Details of note");
});
router.get("/edit/:noteId", (req, res) => {
  res.send("Edit note");
});
router.post("/edit/:noteId", (req, res) => {
  res.redirect("/");
});
router.get("/delete/:noteId", (req, res) => {
  res.redirect("/");
});
module.exports = router;
