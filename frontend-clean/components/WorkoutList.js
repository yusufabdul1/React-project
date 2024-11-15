import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      {workouts.map((workout) => (
        <div key={workout.id} className="workout">
          <h4>{workout.name}</h4>
          <p>Type: {workout.type}</p>
          <p>Duration: {workout.duration} mins</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
