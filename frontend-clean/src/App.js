import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../../frontend-clean/src/components/Navbar';
import Dashboard from '../../frontend-clean/src/components/Dashboard';
import AddWorkout from '../../frontend-clean/src/components/AddWorkout';
import WorkoutDetails from '../../frontend-clean/src/components/WorkoutDetails';
import './App.css';
import EditWorkout from '../../frontend-clean/src/components/EditWorkout';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addNewWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddWorkout addNewWorkout={addNewWorkout} />} />
          <Route path="/workout/:id" element={<WorkoutDetails />} />
          <Route path="/edit/:id" element={<EditWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

console.log("it is working")