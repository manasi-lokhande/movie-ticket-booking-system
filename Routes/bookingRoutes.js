
const express = require("express")
const {bookForm,bookTicket,history,cancel} = require("../Controller/bookingController")

const router = express.Router()

router.get("/booking/:id",bookForm)
router.post("/booking/:id",bookTicket)
router.get("/history",history)
router.get("/cancel/:id",cancel)

module.exports = {router}
