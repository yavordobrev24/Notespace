const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("../utils/errorHandler");

router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
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

router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;
  try {
    const token = await userService.register({
      email,
      password,
      repeatPassword,
    });
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/notes");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("users/register", { errorMessages });
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});
module.exports = router;
