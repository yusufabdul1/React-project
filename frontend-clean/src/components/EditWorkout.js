import React, { useState } from 'react';
import './AddWorkout.css';

function AddWorkout({ addNewWorkout }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    intensity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newWorkout) => {
        addNewWorkout(newWorkout);
        setFormData({ name: '', type: '', duration: '', intensity: '' });
      })
      .catch((error) => console.error('Error adding workout:', error));
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h2>Add a New Workout</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Workout Name"
        required
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type (e.g., Cardio, Strength)"
        required
      />
      <input
        type="number"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration (mins)"
        required
      />
      <input
        type="text"
        name="intensity"
        value={formData.intensity}
        onChange={handleChange}
        placeholder="Intensity (Low, Medium, High)"
        required
      />
      <button type="submit">Edit Workout</button>
    </form>
  );
}

export default AddWorkout;
