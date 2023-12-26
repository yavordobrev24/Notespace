const { guestOnly } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/", guestOnly, async (req, res) => {
  res.render("home");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
