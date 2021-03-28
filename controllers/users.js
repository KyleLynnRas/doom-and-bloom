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

// log in form 
const signIn = (req, res) => {
    // res.render("users/login")
    res.render("users/login")
}

// login - find user and check credentials 
const logIn = (req, res) => {
    User.findOne({ username: req.body.username
    }, (error, authUser) => {
        //if user not found send to signin 
        if (authUser === null){
            res.redirect("/users/signin")
        } else {
            //check passwords
            const passwordCheck = bcrypt.compareSync(req.body.password, authUser.password)
            if (passwordCheck) {
                //if match, add user info to sesion
                req.session.userId = authUser._id;
                console.log(req.session)
                //send user to products index view 
                res.redirect("/products")
            } else {
                // send to sign in again 
                res.redirect("users/signin")
            }
        }
    })
}

// sign out 
const signOut = (req, res) => {
    //end user session
    req.session.destroy( (error) => {
        delete req.user
        //redirect to main 
        res.redirect("/")
    })
}


//////////////////////////////////
// Export
//////////////////////////////////

module.exports = {
   new: newUser, 
   signUp, 
   signIn, 
   logIn, 
   signOut
}