
const bookingModel = require("../Model/bookingModel")
const showModel = require("../Model/showModel")

const bookForm = async (req,res)=>{
    try{
        const show = await showModel.findById(req.params.id).populate("movieId")
        res.render("booking",{show})
    }
    catch(err){
        console.log(err)
    }
}

const bookTicket = async (req,res)=>{
    try{
        const {seats} = req.body
        await bookingModel.create({
            userId:req.session.userData._id,
            showId:req.params.id,
            seats
        })
        res.redirect("/history")
    }
    catch(err){
        console.log(err)
    }
}

const history = async (req,res)=>{
    try{
        const data = await bookingModel.find({userId:req.session.userData._id})
        .populate({
            path:"showId",
            populate:{path:"movieId"}
        })
        res.render("bookingHistory",{data})
    }
    catch(err){
        console.log(err)
    }
}

const cancel = async (req,res)=>{
    try{
        await bookingModel.findByIdAndDelete(req.params.id)
        res.redirect("/history")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {bookForm,bookTicket,history,cancel}
