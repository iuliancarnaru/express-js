const express = require("express");
const fetch = require("node-fetch");
const PORT = 3000;
const app = express();

// set the templating language
app.set("view engine", "ejs");

// res.send()
// res.render()

app.get("/", (req, res) => res.render("index"));
app.get("/campgrounds", (req, res) => {
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
    }
  ];

  res.render("campgrounds", { campgrounds });
});

app.listen(PORT, () =>
  console.log(` --> YelpCamp server is listening on port: ${PORT}`)
);
