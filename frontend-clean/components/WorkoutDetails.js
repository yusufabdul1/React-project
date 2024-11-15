import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './WorkoutDetails.css';

function WorkoutDetails() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/workouts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching workout details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading workout details...</p>;
  if (!workout) return <p>Workout not found.</p>;

  return (
    <div className="workout-details">
      <h2>{workout.name}</h2>
      <p><strong>Type:</strong> {workout.type}</p>
      <p><strong>Duration:</strong> {workout.duration} mins</p>
      <p><strong>Intensity:</strong> {workout.intensity}</p>
      <Link to="/dashboard" className="back-button">Back to Dashboard</Link>
    </div>
  );
}

export default WorkoutDetails;
