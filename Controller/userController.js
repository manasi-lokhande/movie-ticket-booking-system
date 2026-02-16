
const userModel = require("../Model/userModel")
const showModel = require("../Model/showModel")
const movieModel = require("../Model/movieModel");
const bookingModel = require("../Model/bookingModel");


const registerForm = (req,res)=>{
    res.render("register")
}

const register = async (req,res)=>{
    try{
        const {name,email,password} = req.body
        await userModel.create({name,email,password})
        res.redirect("/login")
    }
    catch(err){
        console.log(err)
    }
}

const loginForm = (req,res)=>{
    res.render("login")
}

const login = async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await userModel.findOne({email,password})

        if(user){
            req.session.userData = user
            res.redirect("/dashboard")
        }else{
            res.send("Invalid login")
        }
    }
    catch(err){
        console.log(err)
    }
}

const dashboard = async (req, res) => {
    try {
        let movies = await movieModel.find();
        let shows = await showModel.find().populate("movieId");
        let bookings = await bookingModel.find();

        res.render("dashboard", {
            user: req.session.userData,
            movies,
            shows,
            bookings
        });

    } catch (err) {
        console.log(err);
    }
};


const logout = (req,res)=>{
    req.session.destroy()
    res.redirect("/login")
}

module.exports = {registerForm,register,loginForm,login,dashboard,logout}
