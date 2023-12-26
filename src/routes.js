const router = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const notesController = require("./controllers/notesController");
const { isAuth } = require("./middlewares/authMiddleware");

router.use("/", homeController, userController);
router.use("/notes", isAuth, notesController);
router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
