import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Introduction from './components/Introduction';
import Input from './components/Input';
import Planner from './components/Planner';
import AddEvent from './components/AddEvent';
import SignInPage from './components/SignInPage';


function App(props) {
  const db = getDatabase(); // Initialize Firebase Realtime Database
  

  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
  });

  const [plans, setPlans] = useState([]);
  const [user, setUser] = useState(null);

  const auth = getAuth(); // Initialize Firebase Auth

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Check if the user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser); // Set the user state
      } else {
        // User is not logged in
        setUser(null); // Set user to null
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

// Adding a new plan
const addPlan = (newPlan) => {
  const planRef = ref(db, 'users/' + user.uid + '/plans'); // Assuming 'user' is the authenticated user
  const newPlanRef = firebasePush(planRef); // Generate a unique plan ID
  firebaseSet(newPlanRef, newPlan);
};

// Fetching user plans
useEffect(() => {
  if (user) {
    const userPlansRef = ref(db, 'users/' + user.uid + '/plans');
    onValue(userPlansRef, (snapshot) => {
      const plansData = snapshot.val();
      if (plansData) {
        const plansArray = Object.values(plansData);
        setPlans(plansArray);
      }
    });
  }
}, [user]);


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


  useEffect(() => {
    // Check if the user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
      } else {
        // User is not logged in
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  

  return (
    <div>
      <Navigation />

      {/* Define your routes using the Routes component */}
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/" element={<Introduction />} />
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