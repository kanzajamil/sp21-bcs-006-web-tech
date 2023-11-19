let express = require("express");
let cookieParser = require("cookie-parser");
var session = require("express-session");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" ,resave: true,
saveUninitialized: true}));
app.use(require("./middlewares/common"));

const maintenance = require("./middlewares/maintenance");
const logger = require("./middlewares/logger");
const sessionauth = require("./middlewares/sessionauth");

app.get("/views", (req, res) => {
  let visits = req.cookies.visits;

  if (!visits) visits = 1;
  else visits = visits + 1;
  res.cookie("visits", visits);
  res.send({ visits });
});

app.use("/", require("./routes/site/auth"));



app.get("/", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
    res.render("login");
  });

app.get("/signup", function (req, res) {
  res.render("signup");
});

const mongoose = require("mongoose");
const { cookie } = require("express/lib/response");
mongoose
  .connect("mongodb://0.0.0.0:27017/project")
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));

app.listen(5000);


