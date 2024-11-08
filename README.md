# User Management API

This project is a RESTful API created with **Node.js** and **Express** to manage users in a MySQL database. It is designed to perform CRUD operations (Create, Read, Update, Delete), providing an efficient and scalable way to manipulate user data.

## Project Description

The API connects to a MySQL database, allowing for the storage and management of user information through a set of organized and secure endpoints. This system is ideal for web applications that require user management or profile administration.

### Features

- **Full CRUD Operations**: The API allows for creating, reading, updating, and deleting user records.
- **MySQL Integration**: Uses MySQL as the database management system, handling connections and queries efficiently.
- **Modularity**: Organized into controllers and routes, which makes it easier to extend and maintain.
- **Error Handling**: Detailed error responses to enhance user experience and assist in debugging.
- **JSON Format**: Interaction with the API is done through standardized JSON format, making it easy to handle.

## Endpoints

Each operation provided by the API is documented in the corresponding endpoints:

### 1. Get All Users
   - **Route**: `/users`
   - **Method**: `GET`
   - **Description**: Returns a list of all registered users.

### 2. Get User by ID
   - **Route**: `/users/:id`
   - **Method**: `GET`
   - **Description**: Retrieves data for a specific user based on the provided ID.

### 3. Create a New User
   - **Route**: `/users`
   - **Method**: `POST`
   - **Description**: Adds a new user to the database.
   - **Input Data**:
     ```json
     {
       "name": "User's name",
       "edad": 25,
       "profesion": "Profession",
       "curso": "Course"
     }
     ```

### 4. Update a User
   - **Route**: `/users/:id`
   - **Method**: `PUT`
   - **Description**: Updates information for a specific user.
   - **Input Data**:
     ```json
     {
       "name": "New name",
       "edad": 26,
       "profesion": "New profession",
       "curso": "New course"
     }
     ```

### 5. Delete a User
   - **Route**: `/users/:id`
   - **Method**: `DELETE`
   - **Description**: Deletes a user from the database based on their ID.

## Project Structure

The file structure is organized to achieve clear and maintainable code:

```plaintext
your_repository/
├── controllers/
│   └── userController.js    # Controllers to handle the logic of each endpoint
├── routes/
│   └── apiRoutes.js         # API route definitions
├── db.js                    # MySQL connection configuration
├── .env                     # Environment variables (secure configuration)
├── .gitignore               # Files and folders ignored by Git
├── package.json             # Node.js dependencies and scripts
└── server.js                # Main file that initializes the Express server
