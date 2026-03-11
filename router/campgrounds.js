const campground=require("../controllers/campgrounds")

const express=require("express")
const router=express.Router()

const Campground=require("../models/campground")
const Review=require("../models/review")

const cloudinary=require("cloudinary").v2
const multer=require("multer")

const {storage}=require("../cloudinary")
const upload=multer({storage}) 

const {campgroundSchema}=require("../schemas")

const catchAsync=require("../utils/CatchAsync")
const ExpressError=require("../utils/ExpressError")

const {isLoggedIn}=require("../middleware")
const {isAuthor}=require("../middleware")

const validateCampground=(req,res,next)=>{
    const {error}=campgroundSchema.validate(req.body)
if(error){
    const msg=error.details.map(m=>m.message).join(",")
    throw new ExpressError(msg,400)
}else{
    next()
}
}

router.route("/")
    .get(catchAsync(campground.index))
    .post(isLoggedIn,upload.array('image'),validateCampground,catchAsync(campground.createCampground))

router.get("/new",isLoggedIn,campground.renderNewForm)

router.route("/:id")
    .get(catchAsync(campground.showCampground))
    .put(isLoggedIn,isAuthor,upload.array('image'),validateCampground,catchAsync(campground.updateCampground))
    .delete(isLoggedIn,isAuthor,catchAsync(campground.deleteCampground))

router.get("/:id/edit",isLoggedIn,isAuthor,catchAsync(campground.editCampground))

module.exports=router;
