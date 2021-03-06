//new router 
const router = require("express").Router()
//importing products router
const ProductsRouter = require("./products")
//import user router
const UserRouter = require("./users")

//////////////////////////////////
// Router Specific Middleware
//////////////////////////////////
router.use("/products", ProductsRouter)

//import user router
router.use("/user", UserRouter)

//////////////////////////////////
// Router Specific Routes
//////////////////////////////////

//home page:
router.get("/", (req, res) => {
    //render home view 
    res.render("index")
})


//////////////////////////////////
// Router Specific Routes
//////////////////////////////////

module.exports = router