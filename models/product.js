//Schema/model from connected mongoose 
const {Schema, model} = require("../db/connection")

///////////////////////////////////
// SCHEMA
///////////////////////////////////

const ProductSchema = new Schema({
    name: {type: String, required: true}, 
    description: String, 
    img: String,
    price: {type: Number, min: 1},
    qty: {type: Number, min: 1},
})

///////////////////////////////////
// MODEL
///////////////////////////////////

const Product = model("Product", ProductSchema)

///////////////////////////////////
//EXPORT
///////////////////////////////////

module.exports = Product