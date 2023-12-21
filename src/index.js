const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const { CONNECTION_STR, PORT } = require("./constants");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(
  "/bootstrap/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/popper",
  express.static(path.join(__dirname, "../node_modules/@popperjs/core/dist/"))
);

app.use(
  "/bootstrap/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);

async function connectDb() {
  await mongoose.connect(CONNECTION_STR);
  console.log("Connected to DB");
}

connectDb();

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
