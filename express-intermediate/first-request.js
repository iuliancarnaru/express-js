const fetch = require("node-fetch");

// const getData = async address => {
//   const response = await fetch(`${address}`, {});
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     return data;
//   } else {
//     throw new Error(`Unable to fetch data...`);
//   }
// };

// getData(`https://api.github.com/users/github`)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// --------------------------

fetch("https://api.github.com/users/github")
  .then(res => res.json())
  .then(json => console.log(json));

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
// Search with Movie ID: hhttp://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdbttp://www.omdbapi.com/?i=tt3896198&apikey=thewdb
