import React from 'react';
import { Nav } from './Nav';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


import IntroductionComponent from './Introduction'
import InputComponent from './Input';
import PlannerComponent from './Planner';
// import AddEventComponent from './AddEvent';

function App(props) {
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
});

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Nav />
        </div>
      </nav>

      {/* Define your routes using the Routes component */}
      <Routes>
        <Route path="/" element={<IntroductionComponent />} />
        <Route path="/introduction" element={<IntroductionComponent />} />
        <Route path="/input" element={<InputComponent setTripData={setTripData}/>} />
        <Route path="/planner" element={<PlannerComponent tripData={tripData}/>} />
        {/*<Route path="/add" element={<AddEventComponent />} />*/}
      </Routes>
    </div>
  );
}

export default App;
