//new router 
const router = require("express").Router()
//importing products router
const ProductsRouter = require("./products")

//////////////////////////////////
// Router Specific Middleware
//////////////////////////////////
router.use("/products", ProductsRouter)

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