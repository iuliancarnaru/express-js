const express = require("express");
const app = express();
const port = 3000;

// "/" --> "Hi, there"
// "/bye" --> "Goodbye"
// "/dog" --> "HAM!"

app.get("/", (req, res) => res.send("Hi, there stranger!"));

app.get("/bye", (req, res) => res.send("Goodbye!"));

app.get("/dog", (req, res) => {
  res.send("HAM!");
  console.log("Someone request DOG page");
});

app.get("/r/:subpageName", (req, res) => res.send("Subpage!"));

app.get("/r/:subpageName/coments/:id/:title", (req, res) =>
  res.send("Comments!")
);

app.get("/speak/:animal", (req, res) => {
  const sounds = {
    pig: "Oinks",
    cow: "Moow",
    dog: "Wof wof!"
  };

  const animal = req.params.animal.toLowerCase();
  const sound = sounds[animal];

  res.send(`The ${animal} says "${sound}"`);
});

app.get("*", (req, res) => res.redirect("/"));

// tell express to listen for requests
app.listen(port, () => console.log(`App listening on port ${port}!`));

// --------------   for cloud environments --------------

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log(`Server running on port :3000`);
// });
