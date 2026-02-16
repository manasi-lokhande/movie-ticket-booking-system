
const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    showId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"shows"
    },
    seats:Number
})

module.exports = mongoose.model("bookings",bookingSchema)
