const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const mongoose = require("mongoose");
const Redis = require("ioredis");

const app = express();

const connectToRedis = () => {
  if (process.env.REDIS_URI) {
    console.log("Redis connected");
    return process.env.REDIS_URI;
  }
  throw new Error("Redis connection failed");
};

const redisClient = new Redis(connectToRedis());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo DB");
  })
  .catch((err) => {
    console.log(`Failed to connect to Mongo DB: ${err}`);
  });

const listOfProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
  },
];

app.get("/", (req, res) => {
  redisClient.set("products", JSON.stringify(listOfProducts));
  res.send("<h1>Hello Docker</h1><hr /><h2>Hello Redis</h2>");
});

app.get("/data", async (req, res) => {
  const products = await redisClient.get("products");

  if (products) {
    const parsingProducts = JSON.parse(products);
    res.status(200).json(parsingProducts);
  }

  redisClient.set("products", JSON.stringify(listOfProducts));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
