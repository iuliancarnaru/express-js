const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

// set the templating language
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

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

// res.send()
// res.render()
app.get("/", (req, res) => res.render("index"));
app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds });
});

// REST principle -- POST and GET have the same name
app.post("/campgrounds", (req, res) => {
  // get data from from and add to campgrounds array
  let camp = {
    name: req.body.name,
    image: req.body.image
  };

  campgrounds.push(camp);
  // redirect to campgrounds page - as default is GET request
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => res.render("new.ejs"));

app.listen(PORT, () =>
  console.log(` --> YelpCamp server is listening on port: ${PORT}`)
);
