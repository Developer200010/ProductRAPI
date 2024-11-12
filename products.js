const dbConnect = require("./db/connection.js")
const productModel = require("./models/products.js")
require("dotenv").config();
const productD = require("./products.json")

const start= async() =>{
    try {
        await dbConnect(process.env.MONGO_URL);
        await productModel.deleteMany()
        await productModel.create(productD)
        console.log("successfully done")
    } catch (error) {
        console.log(error.message)
    }
}

start()