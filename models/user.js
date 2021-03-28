//Schema/model from connected mongoose 
const {Schema, model} = require("../db/connection")

///////////////////////////////////
// USER SCHEMA
///////////////////////////////////

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    shopping_cart: [{type: Schema.Types.ObjectId, ref: "Product"}]
})

///////////////////////////////////
// MODEL
///////////////////////////////////

const User = model("User", UserSchema)

///////////////////////////////////
//EXPORT
///////////////////////////////////

module.exports = User