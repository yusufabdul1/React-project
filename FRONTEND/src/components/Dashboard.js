import React, { useEffect, useState } from 'react';
import WorkoutList from './WorkoutList';
import axios from 'axios';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/workouts')
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="dashboard">
      <h3>Your Workout Logs</h3>
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default Dashboard;
