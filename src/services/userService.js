const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = (payload) => User.create(payload);
exports.login = async (email, password) => {
  const user = await User.find({ email }).lean();
  const token = await bcrypt.compare(password, user.password);
  if (token) {
    return console.log(token);
  }
  res.send("Wrong password or email!");
};
