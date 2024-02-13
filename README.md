# MERN Stack Photo Gallery Project

## Overview

This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack photo gallery website deployed on Vercel. It allows users to upload and manage photos, as well as perform authentication-related tasks such as login, logout, sign up, and change password.

## Features

- User authentication: Allows users to sign up for a new account, log in, log out, and change their password.
- Profile management: Users can upload and change their profile picture.
- Photo gallery: Users can upload, view, and manage their photos.
- ...

## Technologies Used

### Frontend

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): State management library for managing application state.
- [React Router](https://reactrouter.com/): Routing library for React applications.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
- [Axios](https://axios-http.com/): Promise-based HTTP client for making requests to the backend API.
- ...

### Backend

- [Node.js](https://nodejs.org/): JavaScript runtime environment for server-side development.
- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/): NoSQL database for storing data.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Library for hashing passwords.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Library for creating and verifying JSON web tokens.
- ...

### Deployment

- [Vercel](https://image-uploader-frontend-gamma.vercel.app/): Platform for deploying frontend applications.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed locally or accessible via a cloud service.

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`

### Configuration

1. Set up environment variables:
   - Frontend: Create a `.env` file in the `frontend` directory and define necessary variables (e.g., API URL).
   - Backend: Create a `.env` file in the `backend` directory and define necessary variables (e.g., MongoDB connection string, JWT secret).

### Running the Application

1. Start the frontend:

   - Navigate to the `frontend` directory: `cd frontend`
   - Navigate to the `src/redux/store.js` file.
   - Update the `server` variable with the URL of your backend server.
   - Run `npm start`

2. Start the backend:

   - Navigate to the `backend` directory: `cd backend`
   - Run `npm run dev`

3. Access the application in your browser: `http://localhost:3000`
