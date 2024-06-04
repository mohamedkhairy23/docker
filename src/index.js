const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Docker</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});