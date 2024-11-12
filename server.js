const express = require("express");
const productsDetails = require("./routes/products")
const app = express();
require("dotenv").config();
const dbConnect = require("./db/connection.js")

app.use("/api/products", productsDetails);

const start = async() => {
  try {
    await dbConnect();
    app.listen(process.env.PORT, () => {
      console.log(`server is running ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
