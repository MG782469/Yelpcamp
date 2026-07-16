const mongoose = require("mongoose");
const Campground = require("../models/campground");
const Review = require("../models/review");
const User = require("../models/user");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const seedDB = async () => {
    await Campground.deleteMany({});
    console.log("All campgrounds deleted.");
    mongoose.connection.close();
};

seedDB();
mongoose.connection.once("open", async () => {
    console.log("MongoDB Connected");
    await Campground.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});
    console.log("Database Cleared!");
    mongoose.connection.close();
});