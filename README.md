# Fitness Tracker Dashboard 🏋️‍♂️
Project Overview

The Fitness Tracker Dashboard is a single-page React application designed to help users manage and track their workout routines efficiently. With a focus on a user-friendly and polished interface, the dashboard allows users to add, view, edit, and delete workout entries. The application leverages React Router for navigation, JSON Server as a mock backend, and follows best coding practices to ensure a smooth and intuitive user experience.

# Features ✨

1. Dynamic Dashboard: View a list of all your workouts with details like type and duration.
2. Add New Workouts: Fill in a form to add new workout sessions to your tracker.
3. Edit Existing Workouts: Update details of your workouts to keep your routine up-to-date.
4. Delete Workouts: Remove workouts you no longer want to track.
5. Navigation Bar: Easily navigate between different sections (Dashboard, Add Workout, etc.).
6. Loading Spinner: Provides a visual cue while data is being fetched from the server.
7. Responsive Design: Works seamlessly on both desktop and mobile devices.

# Technologies Used 🛠️

1. React: For building the user interface and components.
2. React Router: For handling client-side routing.
3. CSS: For styling the application and ensuring a polished look.
4. JSON Server: To simulate a backend RESTful API.
5. JavaScript (ES6): For dynamic and interactive features.

# How to Run the Project 🚀
Prerequisites

1. Node.js and npm installed
2. JSON Server

Setup instructions

1. Clone the repository
2. Install dependencies
3. Start JSON Server
4. Run the React App
5. Open your browser and visit: http://localhost:3000

# API Endpoints 🌐

The application uses a JSON Server to simulate a backend. Below are the API endpoints used:

1. GET /workouts: Fetch all workouts
2. POST /workouts: Add a new workout
3. PUT /workouts/: Update an existing workout
4. DELETE /workouts/: Delete a workout

Example Data Structure:

{
  "id": 1,
  "name": "Morning Run",
  "type": "Cardio",
  "duration": 30,
  "description": "A quick morning run to start the day."
}

# Key Components 🧩

1. Dashboard
Displays a list of workouts fetched from the server.
Includes options to edit, delete, or view details of each workout.
Shows a loading spinner while fetching data.

2. AddWorkout
A form to add new workout entries.
Includes form validation for required fields.
Clears the form after successful submission.

3. EditWorkout
Allows users to edit details of an existing workout.
Auto-fills form fields with the selected workout's data.

4. WorkoutDetails
Displays detailed information for a specific workout.
Includes a back button to return to the dashboard.

5. Navbar
Provides easy navigation between the Dashboard, Add Workout, and other sections.

# Screenshots 📸

DASHBOARD
![alt text](<images/Screenshot (188).png>)

ADD WORKOUT
![alt text](<images/Screenshot (189).png>)

EDIT WORKOUT
![alt text](<images/Screenshot (190).png>)

# Conclusion 🎉

The Fitness Tracker Dashboard is a comprehensive, feature-rich application that demonstrates the power of React for building single-page applications. The project adheres to best practices, with clean code, modular components, and a polished user interface. Whether you're looking to track your workouts or just exploring React, this project showcases how a fitness dashboard can be efficiently built using modern web technologies.