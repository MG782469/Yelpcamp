const Campground = require("./models/campground");
const {campgroundSchema}=require("./schemas")
const {reviewSchema}=require("./schemas")
const Review=require("./models/review")

const isLoggedIn=(req,res,next)=>{
    console.log("hello",req.user)
    if(!req.isAuthenticated()){
        req.session.returnTo=req.originalUrl
        req.flash("error","You must be signed in first!")
        return res.redirect("/login")
    }
    next();
}

const isAuthor=async(req,res,next)=>{
    const {id}=req.params;
    const campground=await Campground.findById(id);
    if(!campground.author.equals(req.user._id)){
        req.flash("error","You do not have permission to do that!")
        return res.redirect(`/campground/${id}`)
    }
    next();
}

const reviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const campground = await Campground.findById(id);
    const review = await Review.findById(reviewId);

    // Make sure review exists
    if (!review) {
        req.flash("error", "Review not found!");
        return res.redirect(`/campgrounds/${id}`);
    }

    // Check ownership
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that!");
        return res.redirect(`/campgrounds/${campground._id}`);
    }

    next();
};

const validateCampground=(req,res,next)=>{
    const {error}=campgroundSchema.validate(req.body)
if(error){
    const msg=error.details.map(m=>m.message).join(",")
    throw new ExpressError(msg,400)
}else{
    next()
}
}

const validateReview=(req,res,next)=>{
    const {error}=reviewSchema.validate(req.body)
    if(error){
        const msg=error.details.map(m=>m.message).join(",")
    }else{
        next()
    }
}

module.exports={isAuthor,isLoggedIn,validateCampground,validateReview,reviewAuthor}
