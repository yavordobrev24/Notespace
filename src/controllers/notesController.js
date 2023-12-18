const router = require("express").Router();
const noteService = require("../services/noteService");

router.get("/add", (req, res) => {
  res.render("add");
});
router.post("/add", async (req, res) => {
  const { title, image, description } = req.body;
  const payload = {
    title,
    image,
    description,
    owner: res.locals.user._id,
    date: Number(Date.now()),
  };
  await noteService.createNote(payload);

  res.redirect("/");
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
