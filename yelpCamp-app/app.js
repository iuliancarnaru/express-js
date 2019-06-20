const express = require("express");
const bodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const DATABASE_URL =
  "mongodb+srv://icarnaru:cluster__@yelpcamp-zfvgz.mongodb.net/test?retryWrites=true&w=majority";
const CLUSTER = "yelpCamp";
const DATABASE_NAME = "test";
// let collection;

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// ----------- CRUD ---------------
let campgrounds = [
  {
    name: "Salmon Creek",
    image: "https://farm9.staticflickr.com/8322/7887662552_8667d69960.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://farm9.staticflickr.com/8020/7538732802_49a42d28d2.jpg"
  },
  {
    name: "Lake District",
    image: "https://farm5.staticflickr.com/4117/4741325076_2d2b5d70dc.jpg"
  },
  {
    name: "Ambelside",
    image: "https://farm7.staticflickr.com/6009/5933610064_e587c3ea9c.jpg"
  }
];

app.get("/", (req, res) => res.render("index"));

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds });
});

app.post("/campgrounds", (req, res) => {
  let camp = {
    name: req.body.name,
    image: req.body.image
  };

  campgrounds.push(camp);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => res.render("new.ejs"));
// --------------------------------

app.listen(PORT, () => {
  // const client = new MongoClient(DATABASE_URL, { useNewUrlParser: true });
  // client.connect(err => {
  //   collection = client.db(DATABASE_NAME).collection("users");
  //   console.log(` --> Connected with MongoDB Atlas to: ${DATABASE_NAME}`);
  // });

  mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
  let db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log(
      ` --> Connected with Mongoose to MongoDB ${CLUSTER} cluster: "${DATABASE_NAME}" db...`
    );
  });
  console.log(` --> YelpCamp server is listening on port: ${PORT}`);
});
