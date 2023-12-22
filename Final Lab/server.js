let express = require("express");
let cookieParser = require("cookie-parser");
var session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
let app = express();

const fileUpload = require("express-fileupload");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" ,resave: true,
saveUninitialized: true}));
app.use(require("./middlewares/common"));


const logger = require("./middlewares/logger");
const sessionauth = require("./middlewares/sessionauth");
const admin = require("./middlewares/admin");


app.get("/views", (req, res) => {
  let visits = req.cookies.visits;

  if (!visits) visits = 1;
  else visits = visits + 1;
  res.cookie("visits", visits);
  res.send({ visits });
});

app.use(fileUpload({
  useTempFiles : true,
}));


app.use("/", require("./routes/site/auth"));

app.use("/admin", sessionauth, admin, require("./routes/admin/newz"));

let newsapirouter = require("./routes/api/newz");

app.use(newsapirouter);
let membersapirouter = require("./routes/api/members");
app.use(membersapirouter);

let calc = require("./routes/calculation/calculator");
app.use(calc);
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/admin", function (req, res) {
  res.render("admin");
});


app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/calculator", function (req, res){
  res.render("calculator");
});


app.get("/news", function (req, res) {
  res.render("news");
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


