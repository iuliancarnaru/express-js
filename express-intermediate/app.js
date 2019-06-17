const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.render("home.ejs"));

app.get("/fallinlovewith/:thing", (req, res) => {
  const thing = req.params.thing;
  res.render("love.ejs", { thing });
});

app.get("/posts", (req, res) => {
  const posts = [
    { title: "First post", author: "Iulian" },
    { title: "First second", author: "Aneta" },
    { title: "First third", author: "Paul" },
    { title: "First forth", author: "Marcela" },
    { title: "First fifth", author: "Izabela" }
  ];

  res.render("posts.ejs", { posts });
});

app.listen(PORT, () => `App is listening on port ${PORT}`);
