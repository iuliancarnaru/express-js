const express = require("express");
const app = express();
const fetch = require("node-fetch");
const PORT = 3000;

// EJS template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("search"));

app.get("/results", (req, res) => {
  let id = req.query.id;
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6e63fd877ba081fbe093430a9f9065f12`
  )
    .then(res => res.json())
    .then(json => res.render("results", { json }))
    .catch(err => res.send(err));
});

app.listen(PORT, () => `Movie app is listening on port ${PORT}`);
