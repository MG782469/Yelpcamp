const express=require("express")
const app=express()
const User=require("../models/user")
const router=express.Router();
const catchAsync=require("../utils/CatchAsync")
const ExpressError=require("../utils/ExpressError")
const passport=require("passport")
const flash=require("connect-flash")
const session=require("express-session")

module.exports.registerUser=(req,res)=>{
    res.render("users/register")
};

module.exports.createUser=async(req,res,next)=>{
    try{
         const {email,username,password}=req.body;
         const user=new User({email,username})
         const newUser= await User.register(user,password)
         req.login(newUser,err=>{
            if (err) return next(err);
            const redirectUrl = req.session.returnTo || "/campgrounds";
            delete req.session.returnTo;
            res.redirect(redirectUrl);
         })
    }catch(e){
        console.log(e);
        req.flash("error",e.message)
        res.redirect("/register")
    }
};

module.exports.registerUser = (req, res) => {
  res.render("users/register");
};

module.exports.getLogin=(req,res)=>{
    res.render("users/login")
};

module.exports.postLogin=(req,res)=>{
    req.flash("success","Welcome back!")
    const redirectUrl=req.session.returnTo || "/campgrounds"
    delete req.session.returnTo
    res.redirect(redirectUrl)
}

module.exports.logout=(req, res, next) => {
    req.logout(function(err) {
        if (err) return next(err);
        req.flash("success", "Goodbye!");
        res.redirect("/campgrounds");
    });
}
