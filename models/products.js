const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    price:{
        type: Number,
        required:[true, "price must ne provided"]
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
    },
});

module.exports = mongoose.model("product", productSchema);