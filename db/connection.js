const mongoose = require("mongoose");
require("dotenv").config()
const dbConnect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=> console.log("db is connected successfully")).catch((error)=> console.log(error.message))
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbConnect;