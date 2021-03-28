//////////////////////////////////
// Import Models
//////////////////////////////////
const User = require('../models/user');
// require bcrypt 
const bcrypt = require("bcryptjs")
// use 10 salt rounds for passwords       
const SALT_ROUNDS = 10;  

// new user sign up form 
const newUser = (req, res) => {
    res.render("users/new")
}

// create new user/encrypt password
const signUp = (req, res) => {
    //encrypt req.body.password: 
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS))
    // res.send(req.body)
    //create user 
    User.create(req.body, (error, newUser) => {
        console.log(newUser)
        //redirect to main view
        res.redirect("/")
    })
}



//////////////////////////////////
// Export
//////////////////////////////////

module.exports = {
   new:newUser, 
   signUp
}