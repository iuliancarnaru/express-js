const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// global scope data
let friends = ["Dan", "Alexandro", "Dani", "Lala"];

// getting data
app.get("/", (req, res) => res.render("home"));

app.get("/fallinlovewith/:thing", (req, res) => {
  const thing = req.params.thing;
  res.render("love", { thing });
});

app.get("/posts", (req, res) => {
  const posts = [
    { title: "First post", author: "Iulian" },
    { title: "First second", author: "Aneta" },
    { title: "First third", author: "Paul" },
    { title: "First forth", author: "Marcela" },
    { title: "First fifth", author: "Izabela" }
  ];

  res.render("posts", { posts });
});

app.get("/friends", (req, res) => {
  res.render("friends", { friends });
});

// sending data
app.post("/addfriend", (req, res) => {
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.listen(PORT, () => `App is listening on port ${PORT}`);
