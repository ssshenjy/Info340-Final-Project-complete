import React from 'react';
import { Navigation } from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { initializeApp } from "firebase/app";


import Introduction from './components/Introduction';
import Input from './components/Input';
import Planner from './components/Planner';
import AddEvent from './components/AddEvent';
import LogIn from './components/LogIn';  
import SignUp from './components/SignUp';

function App(props) {
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
  });

  const [plans, setPlans] = useState([]);

  const addPlan = (newPlan) => {
    setPlans([...plans, newPlan]);
  };

  const [events, setEvents] = useState([]);

  const addEvent = (Date, EventName, Location, Description, Itinerary) => {
    const newEvent = {
      CurrentDate: Date,
      EventName: EventName,
      Location: Location,
      Description: Description,
      Itinerary: Itinerary
    }

    setEvents([...events, newEvent]);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyCF3W2sL5iKty6MxkBQ1_C-UXeyp6I1qW0",
    authDomain: "info340-travel-planner.firebaseapp.com",
    projectId: "info340-travel-planner",
    storageBucket: "info340-travel-planner.appspot.com",
    messagingSenderId: "368458909257",
    appId: "1:368458909257:web:8d6936f1dd724ec801e198",
    measurementId: "G-YEHYKWKQ9E"
  };

  initializeApp(firebaseConfig);

  

  return (
    <div>
      <Navigation />

      {/* Define your routes using the Routes component */}
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/input" element={<Input setTripData={setTripData} addPlan={addPlan}/>} />
        {plans.length > 0 ? (
          <Route path="/planner/:destination" element={<Planner tripData={tripData} plans={plans} events={events} />} />
        ) : (
          <Route path="/planner" element={<Planner tripData={tripData} plans={plans} events={events} />} />
        )}
        <Route path="/addevent" element={<AddEvent addEvent={addEvent} destination={tripData.destination} tripData={{startDate: tripData.startDate, endDate: tripData.endDate}}/>} />
      </Routes>
      <footer className="bg-light py-3 mt-5">
        <div className="container text-center">
          <p>Data from <a href="https://www.kaggle.com/datasets/sergejnuss/united-states-cities-database">https://www.kaggle.com/datasets/sergejnuss/united-states-cities-database</a></p>
          <p>&copy; 2023 Journemo. All rights reserved.</p>
          <p id="contact">
            Contact Us: <a href="mailto:info@journemo.com"><span className="material-icons"></span>info@journemo.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;