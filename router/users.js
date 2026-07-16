const express=require("express")
const app=express()
const User=require("../models/user")
const router=express.Router();
const catchAsync=require("../utils/CatchAsync")
const ExpressError=require("../utils/ExpressError")
const passport=require("passport")
const flash=require("connect-flash")
const user=require("../controllers/users")

router.route("/register")
    .get(user.registerUser)
    .post(catchAsync(user.createUser))

router.route("/login")
    .get(user.getLogin)
    .post(passport.authenticate("local", {failureFlash: true,failureRedirect: "/login"}),user.postLogin)

router.get("/logout",user.logout);

module.exports=router
