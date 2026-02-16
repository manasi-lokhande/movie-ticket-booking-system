
const movieModel = require("../Model/movieModel")

const movies = async (req,res)=>{
    try{
        const data = await movieModel.find()
        res.render("manageMovies",{data})
    }
    catch(err){
        console.log(err)
    }
}

const addform = (req,resp)=>{
    resp.render("addMovie")
}

const addMovie = async (req,res)=>{
    try{
        const {title,description} = req.body
        await movieModel.create({title,description})
        res.redirect("/movies")
    }
    catch(err){
        console.log(err)
    }
}

const deleteMovie = async (req,res)=>{
    try{
        await movieModel.findByIdAndDelete(req.params.id)
        res.redirect("/movies")
    }
    catch(err){
        console.log(err)
    }
}

const editMovieForm = async (req,res)=>{
    try{
        const movie = await movieModel.findById(req.params.id)
        res.render("editMovie",{movie})
    }
    catch(err){
        console.log(err)
    }
}

const updateMovie = async (req,res)=>{
    try{
        const {title,description} = req.body
        await movieModel.findByIdAndUpdate(req.params.id,{title,description})
        res.redirect("/movies")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {movies,addMovie,deleteMovie,editMovieForm,updateMovie,addform}
