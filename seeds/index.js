const mongoose=require("mongoose")
const cities=require("./cities")
const {places,descriptors}=require("./seedHelpers")
const Campground=require("../models/campground")

mongoose.connect("mongodb://localhost:27017/yelp-camp")
.then(()=>{
    console.log("Connection Successful!")
})
.catch((err)=>{
    console.log("Error",err)
})

const sample=array=>array[Math.floor(Math.random()*array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const price = Math.floor(Math.random() * 30);
    const camp = new Campground({
      location: `${sample(cities).city}, ${sample(cities).state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://picsum.photos/500/300",
      author: "689861c34aa1e3e923f27df8",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur, impedit omnis rerum in qui. Recusandae facere voluptas exercitationem placeat possimus vitae dolores. Inventore ex, animi praesentium cupiditate provident culpa.",
      price: price,
    });
    await camp.save();
  }
};

seedDB().then(()=>{
    mongoose.connection.close();
})
