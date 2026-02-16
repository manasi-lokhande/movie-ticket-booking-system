
const express = require("express")
const {shows,addShow,deleteShow} = require("../Controller/showController")

const router = express.Router()

router.get("/shows",shows)
router.post("/shows",addShow)
router.get("/deleteShow/:id",deleteShow)

module.exports = {router}
