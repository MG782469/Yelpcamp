# 🌲 YelpCamp – Full Stack Campground Listing Application

## 🚀 Overview
YelpCamp is a full-stack web application that allows users to discover, create, review, and manage campgrounds. Users can share their camping experiences, upload images, and explore campground locations through an interactive map.

The platform provides a secure authentication system, image upload functionality, and location-based visualization to help users easily find and review camping spots.

---

## 📌 Project Highlights

- Developed a **full-stack campground listing platform** where users can create, view, edit, and delete campgrounds.
- Implemented **secure user authentication and authorization** using **Passport.js** with login and signup functionality.
- Added features for **posting reviews and comments** on campgrounds with proper access control.
- Integrated **image uploads and cloud storage** for campground images.
- Implemented **location-based map visualization** for campground locations.

### Technologies Used
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Passport.js  
- EJS  

---

## ✨ Key Features

### 🏕️ Campground Management
- Create new campgrounds with title, description, price, and location  
- Edit and update campground details  
- Delete campgrounds created by the user  
- Upload multiple images for each campground  

### 🗺️ Interactive Map Integration
- Campground locations displayed using **Mapbox**
- Automatic geocoding of locations
- Map markers showing campground position
- Interactive map view on campground pages

### 📷 Image Upload & Storage
- Upload campground images
- Cloud image storage using **Cloudinary**
- Image deletion and management
- Multiple images with carousel display

### ⭐ Review System
- Users can leave reviews and ratings for campgrounds
- View reviews from other users
- Delete their own reviews

### 🔐 Authentication & Authorization
- Secure user registration and login
- Session-based authentication using **Passport.js**
- Only campground owners can edit or delete their listings
- Review ownership protection

### 💻 Responsive UI
- Clean and responsive interface using **Bootstrap**
- Dynamic pages rendered with **EJS**

---

## 🏗️ Technology Stack

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

### Frontend
- EJS  
- Bootstrap  
- JavaScript  

### Services
- Cloudinary – Image storage  
- Mapbox – Maps and geolocation  
- Passport.js – Authentication  

---

## 📁 Project Structure

```bash
YelpCamp/
│
├── controllers/       # Application logic
├── models/            # MongoDB schemas
├── routes/            # Express routes
├── views/             # EJS templates
├── public/            # Static assets (CSS, JS, images)
├── utils/             # Helper functions
├── schemas.js         # Validation schemas
├── app.js             # Main server file
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MG782469/Yelpcamp.git
cd Yelpcamp
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the root directory:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=mongodb://localhost:27017/yelp-camp
SECRET=your_secret_key
```

### 4️⃣ Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

### 5️⃣ Open in Browser

```
http://localhost:5000
```

---

## 🔐 Security Features

- Password hashing using **bcrypt**
- Input validation using **Joi**
- Authorization middleware
- Protected routes

---

## 🚀 Deployment

You can deploy YelpCamp using:

- Render
- Railway
- Heroku

---

## 🎯 Future Improvements

- User profile pages  
- Campground search & filters  
- Rating analytics  
- Bookmark favorite campground  
- Improved mobile responsiveness  

---

## 👨‍💻 Author

**Manas Girdhar**  
B.Tech CSE Student  

GitHub:  
https://github.com/MG782469

---

## ⭐ Acknowledgement

This project was inspired by the web development course by **Colt Steele**.
