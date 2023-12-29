const router = require("express").Router();
const noteService = require("../services/noteService");

router.get("/", async (req, res) => {
  const email = req.user.email;
  const { search } = req.query;
  const notes = await noteService.getAllNotes(res.locals.user._id, search);
  notes.forEach((n) => {
    console.log(n);
    n.day = n.date.getDate();
    const month = n.date.getMonth() + 1;
    switch (month) {
      case 1:
        n.month = "Jan";
        break;
      case 2:
        n.month = "Feb";
        break;
      case 3:
        n.month = "Mar";
        break;
      case 4:
        n.month = "Apr";
        break;
      case 5:
        n.month = "May";
        break;
      case 6:
        n.month = "Jun";
        break;
      case 7:
        n.month = "Jul";
        break;
      case 8:
        n.month = "Aug";
        break;
      case 9:
        n.month = "Sep";
        break;
      case 10:
        n.month = "Oct";
        break;
      case 11:
        n.month = "Nov";
        break;
      case 12:
        n.month = "Dec";
        break;
      /**   "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec" */
    }
    n.year = n.date.getFullYear();
  });
  return res.render("notes", { notes, email, search });
});
router.get("/create", (req, res) => {
  const email = req.user.email;
  const date = new Date();
  console.log(date);
  console.log(date.getDate());
  console.log(date.getMonth() + 1);
  console.log(date.getFullYear());
  res.render("create", { email });
});
router.post("/create", async (req, res) => {
  const { title, content } = req.body;
  const date = new Date();
  const payload = {
    title,
    content,
    owner: res.locals.user._id,
    date,
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
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const email = req.user.email;
  const note = await noteService.getSingleNote(id);
  return res.render("edit", { note, email });
});
router.post("/edit/:id", (req, res) => {
  res.redirect("/");
});
router.get("/delete/:id/", (req, res) => {
  res.redirect("/");
});
module.exports = router;
