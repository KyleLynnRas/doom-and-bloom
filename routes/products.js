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

// destroy route- delete a product
router.delete("/:id", ProductController.destroy)

// update route - update product's info
router.put("/:id", ProductController.update)

// create route - adds product to db
router.post("/", ProductController.create)

// edit route - directs to edit form
router.get("/:id/edit", ProductController.edit)

// show route - displays info about one item
router.get("/:id", ProductController.show)

///////////////////////////////////
// Export 
///////////////////////////////////

module.exports = router