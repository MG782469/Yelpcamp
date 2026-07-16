# YelpCamp

A full-stack campground marketplace that allows users to discover, create, review, and manage campgrounds through a secure and interactive web application.

The application follows the **Model-View-Controller (MVC)** architecture and demonstrates real-world backend development concepts including authentication, authorization, RESTful routing, file uploads, cloud storage integration, geospatial services, server-side validation, and database relationships.

---

## Live Demo

> Add your deployed application URL here after deployment.

```
https://your-app-url.onrender.com
```

---

## Features

### User Authentication

- User registration and login
- Session-based authentication using Passport.js
- Secure password hashing with Passport Local Mongoose
- Logout functionality
- Protected routes

### Campground Management

- Create campground listings
- Edit campground details
- Delete owned campgrounds
- Browse all campgrounds
- View detailed campground pages
- Ownership authorization

### Image Management

- Upload multiple campground images
- Cloudinary integration
- Delete uploaded images
- Cloud-based image storage

### Maps & Geocoding

- Automatic location geocoding
- Interactive Mapbox maps
- Geographic coordinates
- Location markers

### Reviews

- Add reviews
- Delete owned reviews
- Review authorization
- Display campground reviews

### Validation & Security

- Joi server-side validation
- MongoDB query sanitization
- Helmet security headers
- Centralized error handling
- Authentication middleware
- Authorization middleware

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- EJS
- Bootstrap 5
- HTML
- CSS
- JavaScript

### Authentication

- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session

### Validation & Security

- Joi
- Helmet
- Express Mongo Sanitize

### Cloud Services

- Cloudinary
- Mapbox

---

## Project Structure

```
YelpCamp
│
├── controllers/
├── middleware/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── routes/
├── seeds/
├── utils/
├── views/
│   ├── campgrounds/
│   ├── reviews/
│   ├── users/
│   ├── layouts/
│   └── partials/
│
├── cloudinary/
├── schemas.js
├── app.js
├── package.json
├── .env.example
└── README.md
```

---

## Application Architecture

The application follows the MVC architecture.

```
                 Client

                    │

                    ▼

             Express Routes

                    │

                    ▼

              Middleware

     Authentication • Validation

          Authorization

                    │

                    ▼

              Controllers

          Business Logic

                    │

                    ▼

             Mongoose Models

                    │

                    ▼

               MongoDB Atlas

                    │

                    ▼

               EJS Templates

                    │

                    ▼

              HTTP Response
```

---

## Application Workflow

```
User

│

├── Register

├── Login

│

└── Campgrounds

      │

      ├── Browse Campgrounds

      │

      ├── View Campground

      │      ├── Images

      │      ├── Reviews

      │      └── Map

      │

      ├── Create Campground

      │      ├── Upload Images

      │      ├── Add Location

      │      └── Save

      │

      ├── Edit Campground

      │

      ├── Delete Campground

      │

      ├── Add Review

      │

      └── Delete Review
```

---

## Security Features

- Session-based authentication
- Password hashing
- Route protection
- Resource ownership validation
- Joi validation
- MongoDB sanitization
- Helmet security headers
- Flash messages
- Centralized async error handling

---

## Installation

### Clone Repository

```bash
git clone https://github.com/<your-username>/YelpCamp.git

cd YelpCamp
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment Variables

Create a `.env` file in the project root.

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

MAPBOX_TOKEN=your_mapbox_access_token

DB_URL=your_mongodb_connection_string

SECRET=your_session_secret
```

---

### MongoDB

For local development

```text
mongodb://127.0.0.1:27017/yelp-camp
```

For production, use a MongoDB Atlas connection string.

---

### Run the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Open

```
http://localhost:5000
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name |
| CLOUDINARY_KEY | Cloudinary API key |
| CLOUDINARY_SECRET | Cloudinary API secret |
| MAPBOX_TOKEN | Mapbox access token |
| DB_URL | MongoDB connection string |
| SECRET | Express session secret |

---

## Deployment

The application can be deployed on platforms such as:

- Render
- Railway

For production deployment:

- Configure MongoDB Atlas
- Configure Cloudinary credentials
- Configure Mapbox access token
- Add all environment variables
- Set `NODE_ENV=production`

---

## Future Enhancements

- Search functionality
- Advanced filtering
- Pagination
- User profile pages
- Favorites / Wishlist
- Notifications
- Admin dashboard
- REST API
- Docker support
- Unit & Integration testing
- CI/CD pipeline

---

## Screenshots

### Home Page

<img width="950" height="439" alt="image" src="https://github.com/user-attachments/assets/91e824d7-86f5-4efc-8d23-53d65d42c2d1" />

### Campground Details

<img width="946" height="440" alt="image" src="https://github.com/user-attachments/assets/0de04043-ca33-4297-8427-35a10155262f" />

### Create Campground

<img width="949" height="439" alt="image" src="https://github.com/user-attachments/assets/9a4bc6f9-00af-4923-80cf-17c463cd050c" />

### Login

<img width="948" height="438" alt="image" src="https://github.com/user-attachments/assets/756ba76d-2c2c-48a9-a025-8e63d8028cde" />


---

## Author

**Manas Girdhar**

B.Tech – Computer Science and Engineering

GitHub: https://github.com/MG782469

LinkedIn:https://www.linkedin.com/in/manas-girdhar-36611b324/

---

## Acknowledgements

This project was originally inspired by **The Web Developer Bootcamp** by **Colt Steele** and has been extended with additional features including cloud image storage, interactive maps, improved security, authentication, authorization, and deployment-ready architecture.
