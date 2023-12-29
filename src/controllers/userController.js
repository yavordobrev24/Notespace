const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("../utils/errorHandler");
const { isAuth, guestOnly } = require("../middlewares/authMiddleware");
router.get("/login", guestOnly, (req, res) => {
  res.render("users/login");
});
router.post("/login", guestOnly, async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await userService.login(email, password);
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/notes");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("users/login", { errorMessages });
  }
});

router.get("/signup", guestOnly, (req, res) => {
  res.render("users/signup");
});
router.post("/signup", guestOnly, async (req, res) => {
  const { email, password, repeatPassword } = req.body;
  try {
    const token = await userService.signup({
      email,
      password,
      repeatPassword,
    });
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/notes");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("users/signup", { errorMessages });
  }
});
router.get("/profile", isAuth, async (req, res) => {
  res.render("profile");
});
router.get("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});
module.exports = router;
