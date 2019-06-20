const express = require("express");
const bodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const DATABASE_URL =
  "mongodb+srv://icarnaru:cluster__@yelpcamp-zfvgz.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "test";
let collection;

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  // const client = new MongoClient(DATABASE_URL, { useNewUrlParser: true });
  // client.connect(err => {
  //   collection = client.db(DATABASE_NAME).collection("users");
  //   console.log(` --> Connected with MongoDB Atlas to: ${DATABASE_NAME}`);
  // });

  mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
  let db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log(` --> Connected with Mongoose to: ${DATABASE_NAME}`);
  });
  console.log(` --> YelpCamp server is listening on port: ${PORT}`);
});
