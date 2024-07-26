const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/hello", (re, res) => {
  res.send("I am backend");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
