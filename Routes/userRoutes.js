
const express = require("express")
const {registerForm,register,loginForm,login,dashboard,logout} = require("../Controller/userController")

const router = express.Router()

router.get("/register",registerForm)
router.post("/register",register)
router.get("/login",loginForm)
router.post("/login",login)

const auth = (req,res,next)=>{
    if(req.session.userData) next()
    else res.redirect("/login")
}

router.get("/dashboard",auth,dashboard)
router.get("/logout",logout)

module.exports = {router}
