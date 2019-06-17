const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.render("home.ejs"));

app.get("/fallinlovewith/:thing", (req, res) => {
  const thing = req.params.thing;
  res.render("love.ejs", { thing });
});

app.listen(PORT, () => `App is listening on port ${PORT}`);
