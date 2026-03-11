const express=require("express")
const router=express.Router({mergeParams:true})

const Review=require("../models/review")
const {reviewSchema}=require("../schemas")

const catchAsync=require("../utils/CatchAsync")
const ExpressError=require("../utils/ExpressError")

const Campground=require("../models/campground")
 
const {campgroundSchema}=require("../schemas")

const User=require("../models/user")
const passport=require("passport")
const flash=require("connect-flash")

module.exports.deleteReview=async(req,res)=>{
    const {id,reviewId}=req.params;
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/campgrounds/${id}`)
};

module.exports.createReview=async(req,res)=>{
    const {id}=req.params;
    const campground=await Campground.findById(id)
    const review =new Review(req.body.review)
    review.author=req.user._id;
    campground.reviews.push(review)
    await campground.save()
    await review.save()
    res.redirect(`/campgrounds/${campground._id}`)
};
