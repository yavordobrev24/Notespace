const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();

const { CONNECTION_STR, PORT } = require("./constants");

app.use(express.urlencoded({ extended: false }));
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

async function connectDb() {
  await mongoose.connect(CONNECTION_STR);
  console.log("Connected to DB");
}

connectDb();

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/login", (req, res) => {
  res.send("Login");
});
app.post("/login", (req, res) => {
  res.redirect("/");
});
app.get("/register", (req, res) => {
  res.send("Register");
});
app.post("/register", (req, res) => {
  res.redirect("/");
});
app.get("/add", (req, res) => {
  res.send("Add note");
});
app.post("/add", (req, res) => {
  res.redirect("/");
});
app.get("/details/:noteId", (req, res) => {
  res.send("Details of note");
});
app.get("/edit/:noteId", (req, res) => {
  res.send("Edit note");
});
app.post("/edit/:noteId", (req, res) => {
  res.redirect("/");
});
app.get("/delete/:noteId", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
