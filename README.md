# YelpCamp – Full-Stack Campground Marketplace

## Overview

YelpCamp is a full-stack campground marketplace that enables users to discover, create, review, and manage campground listings through a secure and interactive web application.

The application follows the **Model-View-Controller (MVC) architecture** to maintain separation of concerns and modularize application logic. It integrates authentication, authorization, cloud-based image management, geocoding, and interactive map visualization to provide an end-to-end campground discovery and management platform.

---

## Key Features

### Campground Management

- Create campground listings with title, description, price, and location
- View and explore campground listings
- Edit and update campground information
- Delete user-owned campground listings
- Upload and manage multiple campground images

### Geospatial Visualization

- Interactive campground maps powered by **Mapbox**
- Automatic geocoding of campground locations
- Dynamic map markers based on geographic coordinates
- Location-based visualization on campground pages

### Cloud-Based Image Management

- Upload multiple campground images
- Cloud image storage using **Cloudinary**
- Manage and delete uploaded images
- Display campground images through an image carousel

### Review and Rating System

- Submit reviews and ratings for campgrounds
- View reviews submitted by other users
- Delete user-owned reviews
- Review ownership and authorization protection

### Authentication and Authorization

- Secure user registration and login
- Session-based authentication using **Passport.js**
- Password hashing and credential protection
- Route-level authorization middleware
- Campground ownership validation
- Review ownership protection

### Validation and Error Handling

- Server-side input validation using **Joi**
- MongoDB data sanitization
- Protected application routes
- Centralized asynchronous error handling
- Custom application error handling

### Responsive User Interface

- Responsive interface built using **Bootstrap**
- Server-side dynamic rendering with **EJS**
- Reusable templates and partial components
- Interactive campground and review workflows

---

## Technology Stack

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Frontend

- **EJS**
- **Bootstrap**
- **JavaScript**
- **HTML / CSS**

### Authentication and Security

- **Passport.js**
- **Passport Local**
- **Express Session**
- **Joi**
- **Helmet.js**
- **Mongo Sanitize**

### Cloud and External Services

- **Cloudinary** – Cloud-based image storage and management
- **Mapbox** – Geocoding and interactive map visualization

---

## Application Architecture

YelpCamp follows the **Model-View-Controller (MVC) architectural pattern**.

```text
Client Request
      |
      v
Express Routes
      |
      v
Middleware
(Authentication / Authorization / Validation)
      |
      v
Controllers
(Application Logic)
      |
      v
Mongoose Models
      |
      v
MongoDB
      |
      v
EJS Views
      |
      v
Client Response
```

This architecture separates routing, application logic, database models, and presentation layers, improving code organization and maintainability.

---

## Project Structure

```bash
YelpCamp/
|
├── controllers/        # Application and business logic
├── models/             # Mongoose models and MongoDB schemas
├── routes/             # Express route definitions
├── views/              # EJS templates and reusable partials
├── public/             # Static assets (CSS and JavaScript)
├── utils/              # Error handling and utility functions
├── seeds/              # Database seed data
├── schemas.js          # Joi validation schemas
├── app.js              # Application entry point
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## Core Application Workflow

```text
User
 |
 v
Register / Login
 |
 v
Explore Campgrounds
 |
 ├── View Campground
 |       ├── View Location
 |       ├── View Images
 |       └── View Reviews
 |
 ├── Create Campground
 |       ├── Enter Details
 |       ├── Geocode Location
 |       └── Upload Images
 |
 ├── Manage Campground
 |       ├── Edit Listing
 |       └── Delete Listing
 |
 └── Review Campground
         ├── Add Review
         └── Delete Own Review
```

---

## Security Implementation

The application implements multiple security and validation mechanisms:

- Session-based authentication using **Passport.js**
- Secure password handling through Passport Local Mongoose
- Route-level authentication middleware
- Resource ownership authorization
- Server-side schema validation using **Joi**
- MongoDB query sanitization
- HTTP security headers using **Helmet.js**
- Protected campground and review operations

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MG782469/Yelpcamp.git
cd Yelpcamp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=mongodb://localhost:27017/yelp-camp
SECRET=your_session_secret
```

### 4. Start the Application

```bash
node app.js
```

For development:

```bash
nodemon app.js
```

### 5. Open the Application

Open the application in your browser at:

```text
http://localhost:5000
```

---

## Deployment

The application can be deployed on cloud application platforms such as:

- Render
- Railway

For production deployment, configure MongoDB, Cloudinary, Mapbox, and session secrets through environment variables.

---

## Future Improvements

- User profile and activity pages
- Campground search and advanced filtering
- Favorite and bookmark functionality
- Rating and review analytics
- Pagination for campground listings
- API response caching
- Automated testing
- Enhanced mobile responsiveness

---

## Author

**Manas Girdhar**  
B.Tech – Computer Science and Engineering

GitHub: `MG782469`

---

## Acknowledgement

This project was inspired by **The Web Developer Bootcamp by Colt Steele** and extended as a full-stack application to explore MVC architecture, authentication, authorization, database integration, cloud image management, and geospatial visualization.
