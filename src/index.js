const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const { CONNECTION_STR, PORT } = require("./constants");
const routes = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

async function connectDb() {
  await mongoose.connect(CONNECTION_STR);
  console.log("Connected to DB");
}

connectDb();

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
