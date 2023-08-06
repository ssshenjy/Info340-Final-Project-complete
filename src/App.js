import React from 'react';
import { Nav } from './Nav';
import { Routes, Route } from 'react-router-dom';


import IntroductionComponent from './Introduction'
import InputComponent from './Input';
import PlannerComponent from './Planner';
// import AddEventComponent from './AddEvent';

function App(props) {
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
        <Route path="/input" element={<InputComponent />} />
        <Route path="/planner" element={<PlannerComponent />} />
        {/*<Route path="/add" element={<AddEventComponent />} />*/}
      </Routes>
    </div>
  );
}

export default App;
