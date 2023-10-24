const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);
      req.user = decodedToken;
      res.locals.user = decodedToken;
      res.locals.isAuthenticated = true;
    } catch (e) {
      console.log(e);
      res.clearCookie("auth");
      res.redirect("/users/login");
    }
  }
  next();
};
exports.isAuth = (req, res, next) => {
  if (!res.locals.user) {
    return res.redirect("/users/login");
  }
  next();
};
