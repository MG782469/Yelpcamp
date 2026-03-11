const express=require("express")
const router=express.Router({mergeParams:true})

const Campground=require("../models/campground")
const Review=require("../models/review")
const review=require("../controllers/reviews")

const {reviewSchema}=require("../schemas")

const catchAsync=require("../utils/CatchAsync")
const ExpressError=require("../utils/ExpressError")

const {isLoggedIn,reviewAuthor}=require("../middleware")

const validateReview=(req,res,next)=>{
    const {error}=reviewSchema.validate(req.body)
    if(error){
    const msg=error.details.map(m=>m.message).join(",")
    throw new ExpressError(msg,400)
    }else{
    next()
    }
}

router.delete("/:reviewId",isLoggedIn,reviewAuthor,catchAsync(review.deleteReview))

router.post("/",isLoggedIn,validateReview,catchAsync(review.createReview))

module.exports=router
