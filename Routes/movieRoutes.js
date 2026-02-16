
const express = require("express")
const {movies,addMovie,deleteMovie,editMovieForm,updateMovie, addform} = require("../Controller/movieController")

const router = express.Router()

router.get("/movies",movies)
router.get("/addMovie",addform)
router.post("/movies",addMovie)
router.get("/deleteMovie/:id",deleteMovie)
router.get("/editMovie/:id",editMovieForm)
router.post("/updateMovie/:id",updateMovie)

module.exports = {router}
