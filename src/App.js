import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Dashboard from '../src/components/Dashboard';
import AddWorkout from '../src/components/AddWorkout';
import WorkoutDetails from '../src/components/WorkioutDetails';
import './App.css';
import EditWorkout from '../src/components/EditWorkout';

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
