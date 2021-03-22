////////////////////////////////////
// Import Dependency
////////////////////////////////////
const router = require("express").Router()

//controller functions: 
const ProductController = require("../controllers/products")

////////////////////////////////////
// Routes 
////////////////////////////////////
// to seed data to database
// router.get('/seed', ProductController.seed)

// index of all data in json 
router.get("/json", ProductController.jsonInfo)

// index route to /products
router.get("/", ProductController.index)

// new route to /products/new
router.get("/new", ProductController.new)

///////////////////////////////////
// Export 
///////////////////////////////////

module.exports = router