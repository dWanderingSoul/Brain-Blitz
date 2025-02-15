# BrainBlitz

BrainBlitz is a quiz application that allows users to test their knowledge across various topics.

## Features

- **User Authentication:**
    - Email/password-based registration and login
- **User Authorization:**
    - Role-based access control (Admin, User)
    - Admins can create, edit, and delete quizzes
    - Users can take quizzes and view their results
- **Quiz Creation & Management:**
    - Create multiple-choice, true/false, and fill-in-the-blank questions
    - Set difficulty levels (easy, medium, hard)
    - Set time limits for quizzes
    - Add images/media to questions
- **Quiz History Tracking:**
    - Track user scores, attempts, and time taken for each quiz
    - Provide detailed performance reports
- **Interactive Quiz Interface:**
    - User-friendly and intuitive interface
    - Progress bar and timer during the quiz
    - Immediate feedback on answers

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/dWanderingSoul/brain-blitz.git](https://github.com/dWanderingSoul/brain-blitz.git)
   cd brain-blitz
Install dependencies:

Bash

npm install
Create a .env file in the root directory with the following variables:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/brainblitz
JWT_SECRET=your_jwt_secret_key 
Start the MongoDB service.

Run the application:

Bash

npm start
Getting Started
Run the application: Execute npm start in your terminal.
Access the application: Open your web browser and navigate to http://localhost:3000.
API Endpoints
POST /auth/register - Register a new user
POST /auth/login - Login user
GET /users/profile - Get user profile
GET /admin/dashboard - Admin dashboard (requires admin role)
Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT
Testing: [Jest] 
Linting:  [ESLint]
Contributing
Fork the repository.
Create a new branch for your feature/fix: git checkout -b feature/your-feature
Make your changes and commit them: git commit -m "Your commit message"
Push your changes to your fork: git push origin feature/your-feature   
Create a pull request on the original repository.   
Code Style:

Follow consistent code style and formatting.
Use meaningful variable and function names.
Write clean and well-documented code.
License
MIT

Note: This is a sample README file, and you may need to adjust it based on the specific features and technologies used in your BrainBlitz application.


Sources and related content
