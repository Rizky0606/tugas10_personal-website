const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/blog", (req, res) => {
  res.send("Halaman Blog");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port} `);
});
