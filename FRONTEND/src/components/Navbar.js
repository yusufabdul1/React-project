import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Fitness Dashboard</h2>
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/add">Add Workout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
