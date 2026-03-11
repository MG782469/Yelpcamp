const Campground=require("../models/campground")
const Review=require("../models/review")
 
const {campgroundSchema}=require("../schemas")

const catchAsync=require("../utils/CatchAsync")
const ExpressError=require("../utils/ExpressError")

const User=require("../models/user")
const passport=require("passport")
const flash=require("connect-flash")
const { cloudinary } = require("../cloudinary")

const mbxGeocoding=require("@mapbox/mapbox-sdk/services/geocoding")

const mapBoxTokens=process.env.MAPBOX_TOKEN;
const geocoder=mbxGeocoding({accessToken:mapBoxTokens})

module.exports.index=async(req,res)=>{
    const campgrounds=await Campground.find({})
    res.render("campgrounds/index",{campgrounds})
};

module.exports.renderNewForm=(req,res)=>{
    res.render("campgrounds/new")
};

module.exports.createCampground = async(req, res) => {
    const geoData=await geocoder.forwardGeocode({
        query:req.body.campground.location,
        limit:1
    }).send()
    if (!req.body.campground) throw new ExpressError("Invalid Campground Data", 400);
    const new_camp = new Campground(req.body.campground);
    new_camp.geometry=geoData.body.features[0].geometry
    new_camp.image=req.files.map(f => ({ url: f.path, filename: f.filename }))
    new_camp.author = req.user._id;
    await new_camp.save();
    req.flash("success", "Successfully Made A New Campground!");
    res.redirect("/campgrounds");
};

module.exports.showCampground=async(req,res)=>{
    const {id}=req.params;
    const campground = await Campground.findById(req.params.id)
    .populate({
        path: 'reviews',
        populate: { path: 'author' }
    })
    .populate('author');
  if (!campground) {
    req.flash("error","Cannot find that Campground!")
    return res.redirect("/campgrounds")
    }
    res.render("campgrounds/show",{campground,mapToken:process.env.MAPBOX_TOKEN})
};

module.exports.editCampground=async(req,res)=>{
    const {id}=req.params;
    const campground=await Campground.findById(id)
    if(!campground.author.equals(req.user._id)){
        req.flash("error","You do not have permission to do that!")
        return res.redirect(`/campgrounds/${id}`)
    }
    res.render("campgrounds/edit",{campground})
};

module.exports.deleteCampground=async(req,res)=>{
    const {id}=req.params;
    await Campground.findByIdAndDelete(id)
    req.flash("success","Successfully deleted campground!")
    res.redirect("/campgrounds")
};

module.exports.updateCampground=async(req,res)=>{
    const {id}=req.params;
    const campgground=await Campground.findById(id);
    if(!campgground.author.equals(req.user._id)){
        req.flash("error","You do not have permission to do that!")
        return res.redirect(`/campgrounds/${id}`)
    }
    const campground=await Campground.findByIdAndUpdate(id,{...req.body.campground})
    const imgs=req.files.map(f=>({url:f.path,filename:f.filename}));
    campground.image.push(...imgs);
    await campground.save();
    if(req.body.deleteimages){
        for(let filename of req.body.deleteimages){
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({$pull:{image:{filename:{$in:req.body.deleteimages}}}})
    }
    req.flash("success","Successfully updated campground!") 
    res.redirect(`/campgrounds/${campground._id}`)
}
