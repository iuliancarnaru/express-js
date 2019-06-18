const fetch = require("node-fetch");

const getData = async address => {
  const response = await fetch(`${address}`, {});
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Unable to fetch data...`);
  }
};

getData(`https://api.github.com/users/github`)
  .then(data => console.log(data))
  .catch(error => console.log(error));
