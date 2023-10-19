const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const { PORT } = require("./constants");

app.use(express.urlencoded({ extended: false }));
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
