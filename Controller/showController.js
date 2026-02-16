
const showModel = require("../Model/showModel")
const movieModel = require("../Model/movieModel")

const shows = async (req,res)=>{
    try{
        const data = await showModel.find().populate("movieId")
        const movies = await movieModel.find()
        res.render("shows",{data,movies})
    }
    catch(err){
        console.log(err)
    }
}

const addShow = async (req,res)=>{
    try{
        const {movieId,date,time} = req.body
        await showModel.create({movieId,date,time})
        res.redirect("/shows")
    }
    catch(err){
        console.log(err)
    }
}

const deleteShow = async (req,res)=>{
    try{
        await showModel.findByIdAndDelete(req.params.id)
        res.redirect("/shows")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {shows,addShow,deleteShow}
