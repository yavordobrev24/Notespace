const router = require("express").Router();
const noteService = require("../services/noteService");

router.get("/", async (req, res) => {
  const userId = 1;
  //const notes = await noteService.getAllNotes(userId);
  //res.render("notes", { notes });
  res.send("OK");
});
router.get("/add", (req, res) => {
  res.send("Add note");
});
router.post("/add", (req, res) => {
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
