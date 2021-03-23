//////////////////////////////////
// Import Models
//////////////////////////////////
const Product = require("../models/product")

// add seed data to DB: 
const seed = async (req, res) => {
    const newProducts = 
    [
        {
            name: "Aloe vera",
            description: "Aloe vera is an easy to care for succulent. It requires bright, indirect sunlight and infrequent watering. Our aloe comes already potted",
            img: "https://i.imgur.com/rj9NkaF.jpg",
            price: 15,
            qty: 10
          }, {
            name: "Dragon Tree",
            description: "The dragon tree (Dracaena marginata) can grow to be about 15 feet and can purify the air in your home! It needs bright, indirect sunlight to thrive. This plant is toxic to pets though, so best not to bring this one home if you have a pet.",
            img: "https://i.imgur.com/jbtdLzs.jpg",
            price: 20,
            qty: 30
          }, {
            name: "Spider Plant",
            description: "Don't have a green thumb? It's fine, the spider plant (Chlorophytum comosum) is probably the easiest plant to care for. It likes bright indirect sunlight and can be watered once a week. This plant comes potted.",
            img: "https://i.imgur.com/kjawK1J.jpg",
            price: 18,
            qty: 25
          }, {
            name: "Lavender",
            description: "The lavender plant (Lavandula) is not only beautiful but will fill your home with a calming aroma. While it can be grown indoors, it needs a lot of sunlight (4-5 hours a day) and well draining soil.",
            img: "https://i.imgur.com/2IjQCii.jpg",
            price: 20,
            qty: 7
          }, {
            name: "Snake Plant",
            description: "The snake plant (Dracaena trifasciata) is another easy to care for house plant. It likes indirect sunlight and can be watered once a week (and less often in the winter).",
            img: "https://i.imgur.com/zpM9EgG.jpg",
            price: 25,
            qty: 10
          }, {
            name: "Bromeliad",
            description: "A bromeliad (Bromeliaceae) will add a beautiful burst of color to your home! They like bright, indirect sunlight and high humidity. Our bromeliads come in pink, yellow and orange.",
            img: "https://i.imgur.com/uN4y7FH.jpg",
            price: 15,
            qty: 37
          }, {
            name: "Orchid",
            description: "Orchids need a warm and humid environment without direct sunlight. Make sure to let the soil dry between watering and use a well draining soil. Our orchids come already potted, with an extra bag of our orchid soil mix.",
            img: "https://i.imgur.com/qtwZWzz.jpg",
            price: 30,
            qty: 8
          }, {
            name: "Banana Tree",
            description: "This banana tree (Dwarf Cavendish) can grow between 5-10 feet. It loves all the sunlight it can get and prefers it's soil to dry between waterings.",
            img: "https://i.imgur.com/3SbdMcW.jpg",
            price: 20,
            qty: 30
          }
    ]

    try {
        //add newProducts array to DB
        const seedItems = await Product.create(newProducts)
        res.send(seedItems)
      } catch (err) {
        res.send(err.message)
      }
    }

// lists all json data at /json
const jsonInfo = async (req, res) => {
    //retrieve all products data from DB
    const newProducts = await Product.find({})
    res.send(newProducts)
}

// index - listing all products 
const index = async (req, res) => {
    const newProducts = await Product.find({})
    //renders index view 
    res.render("products/index", {
        newProducts
        })
    }

// new - adding a new product
const newProduct = async (req, res) => {
   //render new view
   res.render("products/new")

}

// create - add product to db, redirect to index
const create = async (req, res) => {
    //add to db
    await Product.create(req.body)
    res.redirect("/products")
}



//////////////////////////////////
// Export
//////////////////////////////////

module.exports = {
    index, 
    seed, 
    new: newProduct, 
    jsonInfo, 
    create
}