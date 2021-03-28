// grab env variables
require("dotenv").config
// import express
const express = require("express")
//import session
const session = require('express-session');
// import database connection
const mongoose = require("./db/connection")
// import merced logger
const {log} = require("mercedlogger")
// import middleware
const methodOverride = require("method-override")
const morgan = require("morgan")
const cors = require("cors")

//Import index router: 
const indexRouter = require("./routes/index")
//Import user router: 
const userRouter = require("./routes/users")

// PORT VARIABLE
const PORT = process.env.PORT || "2021"

//////////////////////////////////
// Create APP Object
///////////////////////////////////
const app = express()


//////////////////////////////////
// Set the View Engine
//////////////////////////////////
app.set("view engine", "ejs")


///////////////////////////////////
// Setup Middleware
///////////////////////////////////
app.use(cors()) // prevent cors errors
app.use(methodOverride("_method")) // swap methods for delete/put requests
app.use(express.static("public")) // serve public folder as static
app.use(morgan("tiny")) // request logging
app.use(express.json()) // parse json bodies
app.use(express.urlencoded({extended: false}))
app.use(session({ 
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
})); //session

////////////////////////////////
// Routes and Routers
////////////////////////////////

// index/main/home route
app.use("/", indexRouter)

//users route
app.use('/users', userRouter);

///////////////////////////////////
// App Listener
//////////////////////////////////
app.listen(PORT, () => log.white("🚀 Server Launch 🚀", `Listening on port ${PORT}`))