if(process.env.NODE_ENV!=="production"){
  require("dotenv").config()
}

const express =require("express")
const path=require("path")
const mongoose=require("mongoose")
const Campground=require("./models/campground")
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
const ExpressError=require("./utils/ExpressError")
const catchAsync=require("./utils/CatchAsync")
const Review=require("./models/review")
const campgroundRouters=require("./router/campgrounds")
const reviewRouters=require("./router/reviews")
const flash=require("connect-flash")
const session=require("express-session")
const passport=require("passport")
const LocalStrategy = require('passport-local').Strategy;
const User=require("./models/user")
const userRouters=require("./router/users")
const cloudinary=require("cloudinary")
const multer=require("multer")
const { storage } = require("./cloudinary");
const upload = multer({ storage });
const mongoSanitize=require("express-mongo-sanitize")

mongoose.connect("mongodb://localhost:27017/yelp-camp")
.then(()=>{
    console.log("Connection Successful!")
})
.catch((err)=>{
    console.log("Error",err)
})

const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")))

app.engine("ejs",ejsMate)
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(methodOverride("_method"))

app.use(session({
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/",(req,res)=>{
    res.render("campgrounds/home")
})

app.use("/campgrounds",campgroundRouters)
app.use("/campgrounds/:id/reviews",reviewRouters)
app.use("/",userRouters)

app.all(/(.*)/,(req,res,next)=>{
    next(new ExpressError("Page Not Found",404))
})

app.use((err,req,res,next)=>{
    const {status=500}=err
    if(!err.message)err.message="Something Went Wrong!"
    res.status(status).render("campgrounds/error",{err});
})

app.listen(5000,()=>{
    console.log("Listening To The Port 5000!")
})
