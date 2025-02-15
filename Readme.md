# BrainBlitz

BrainBlitz is a quiz application that allows users to test their knowledge across various topics.

## Features

- User authentication and authorization
- Role-based access control (Admin and User roles)
- Quiz creation and management
- Quiz history tracking
- Interactive quiz interface

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brain-blitz.git
   cd brain-blitz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/brainblitz
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start MongoDB service

5. Run the application:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /users/profile` - Get user profile
- `GET /admin/dashboard` - Admin dashboard (requires admin role)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

#   B r a i n - B l i t z 
 
 
