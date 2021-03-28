//////////////////////////////////
// Import dependency
//////////////////////////////////
//new router 
const router = require("express").Router()
//import user controller 
const UserController = require("../controllers/users")

//////////////////////////////////
// Router Specific Middleware
//////////////////////////////////


//////////////////////////////////
// Router Specific Routes
//////////////////////////////////

// new user sign up form 
router.get('/new', UserController.new);

// create new user from form 
router.post('/signup', UserController.signUp);

// log in form 
router.get('/signin', UserController.signIn)

// log in using form info
router.post("/login", UserController.logIn)

//////////////////////////////////
// Router Specific Routes
//////////////////////////////////

module.exports = router