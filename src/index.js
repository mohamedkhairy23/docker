const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo DB");
  })
  .catch((err) => {
    console.log(`Failed to connect to Mongo DB: ${err}`);
  });

app.get("/", (req, res) => {
  res.send("<h1>Hello Docker</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
