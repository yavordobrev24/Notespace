const { getAllNotes } = require("../services/noteService");

const router = require("express").Router();

router.get("/", async (req, res) => {
  if (res.locals.isAuthenticated) {
    const notes = await getAllNotes(res.locals.user._id);
    const currentTime = new Date();

    notes.forEach((note) => {
      const timeDifference = currentTime - note.date;

      const secondsDifference = Math.floor(timeDifference / 1000);

      const minutesDifference = Math.floor(secondsDifference / 60);

      const hoursDifference = Math.floor(minutesDifference / 60);

      const daysDifference = Math.floor(hoursDifference / 24);

      const weeksDifference = Math.floor(daysDifference / 7);

      const monthsDifference = Math.floor(weeksDifference / 4);

      const yearsDifference = Math.floor(monthsDifference / 12);

      if (yearsDifference > 0) {
        note.passedTime = `${yearsDifference} years`;
        return;
      }
      if (monthsDifference > 0) {
        note.passedTime = `${monthsDifference} months`;
        return;
      }
      if (weeksDifference > 0) {
        note.passedTime = `${weeksDifference} weeks`;
        return;
      }
      if (daysDifference > 0) {
        note.passedTime = `${daysDifference} days`;
        return;
      }
      if (hoursDifference > 0) {
        note.passedTime = `${hoursDifference} hours`;
        return;
      }
      if (minutesDifference > 0) {
        note.passedTime = `${minutesDifference} mins`;
        return;
      }
      note.passedTime = `${secondsDifference} sec`;
      return;
    });

    return res.render("notes", { notes });
  }
  res.render("home");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
