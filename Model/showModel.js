
const mongoose = require("mongoose")

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movies"
    },
    date:String,
    time:String
})

module.exports = mongoose.model("shows",showSchema)
