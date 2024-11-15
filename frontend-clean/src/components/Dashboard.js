import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Spinner from './Spinner'; 

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  const deleteWorkout = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this workout?');
    if (!confirmDelete) return;

    fetch(`http://localhost:3001/workouts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setWorkouts(workouts.filter((workout) => workout.id !== id));
      })
      .catch((error) => console.error('Error deleting workout:', error));
  };

  return (
    <div className="dashboard-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>My Workouts</h2>
          {workouts.length > 0 ? (
            <ul className="workout-list">
              {workouts.map((workout) => (
                <li key={workout.id} className="workout-item">
                  <h3>{workout.name}</h3>
                  <p>Type: {workout.type}</p>
                  <p>Duration: {workout.duration} mins</p>
                  <div className="workout-actions">
                    <Link to={`/workout/${workout.id}`} className="details-link">
                      View Details
                    </Link>
                    <button
                      className="delete-button"
                      onClick={() => deleteWorkout(workout.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${workout.id}`} className="edit-link">
                      Edit
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No workouts added yet.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
