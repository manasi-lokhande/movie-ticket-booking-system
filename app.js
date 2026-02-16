
const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")

const userRoutes = require("./Routes/userRoutes")
const movieRoutes = require("./Routes/movieRoutes")
const showRoutes = require("./Routes/showRoutes")
const bookingRoutes = require("./Routes/bookingRoutes")

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/movie_booking")

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:"movie",
    resave:false,
    saveUninitialized:true
}))

app.use("/",userRoutes.router)
app.use("/",movieRoutes.router)
app.use("/",showRoutes.router)
app.use("/",bookingRoutes.router)

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})
