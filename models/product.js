//Schema/model from connected mongoose 
const {Schema, model} = require("../db/connection")

///////////////////////////////////
// PRODUCT SCHEMA
///////////////////////////////////

const ProductSchema = new Schema({
    name: {type: String, required: true}, 
    description: String, 
    img: String,
    price: {type: Number, min: 1},
    qty: {type: Number, min: 0},
})

///////////////////////////////////
// MODEL
///////////////////////////////////

const Product = model("Product", ProductSchema)

///////////////////////////////////
//EXPORT
///////////////////////////////////

module.exports = Product