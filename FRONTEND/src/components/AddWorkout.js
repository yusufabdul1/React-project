import React, { useState } from 'react';
import axios from 'axios';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { name, type, duration };
    
    axios.post('http://localhost:5000/workouts', newWorkout)
      .then((response) => {
        console.log('Workout Added:', response.data);
        setName('');
        setType('');
        setDuration('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-workout-form">
      <h3>Add New Workout</h3>
      <input type="text" placeholder="Workout Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Workout Type" value={type} onChange={(e) => setType(e.target.value)} required />
      <input type="number" placeholder="Duration (mins)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default AddWorkout;
