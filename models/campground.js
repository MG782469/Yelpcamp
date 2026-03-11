const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const Review=require("./review");
const { campgroundSchema } = require("../schemas");
const User=require("./user")

const ImageSchema=new Schema({
    url:String,
    filename:String
})

const opts={toJSON:{virtuals:true}};

ImageSchema.virtual("thumbnail").get(function(){
    return this.url.replace("/uploads","/uploads/w_100")
})

const CampgroundSchema=new Schema({
    title: {
        type: String,
        minlength: [3, "Title should be at least 3 characters long"]
    },
    image:[ImageSchema],
    price:Number,
    description:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry:{
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    location:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
},opts)

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<a href="/campgrounds/${this._id}">${this.title}</a>`;
});

CampgroundSchema.post('findOneAndDelete',async function(data){
    if(data){
        await Review.deleteMany({
            _id:{$in: data.reviews}
        })
    }
})

module.exports=mongoose.model("Campground",CampgroundSchema)
