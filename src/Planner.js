import React, { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import DayList from './DayList';

function Planner(props) {
  const { destination, startDate, endDate, budget } = props.tripData || {};

  {/* Input.js - duration */}
  const [duration, setDuration] = useState(3);
  const [dayNumbers, setDayNumbers] = useState(Array.from({ length: duration }, (_, index) => index + 1));

  if (startDate && endDate) {
    const startDateCal = new Date(startDate);
    const endDateCal = new Date(endDate);
    const timeDifference = endDateCal - startDateCal;
    const inputDuration = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    
    setDuration(inputDuration);
    setDayNumbers(Array.from({ length: inputDuration }, (_, index) => index + 1));
  }
  
  {/* Input.js - budget*/}
  const initialBudget = budget; {/*const { initialBudget } = useParams();*/}
  const [remainingBudget, setRemainingBudget] = useState(initialBudget);
  const [dailyBudgets, setDailyBudgets] = useState(Array(duration).fill(0));

  const handleDailyBudgetChange = (dayIndex, newDailyBudget) => {
    const updatedDailyBudgets = [...dailyBudgets];
    updatedDailyBudgets[dayIndex] = newDailyBudget;
    setDailyBudgets(updatedDailyBudgets);

    const updatedRemainingBudget = initialBudget - updatedDailyBudgets.reduce((total, budget) => total + budget, 0);
    setRemainingBudget(updatedRemainingBudget);
  };

  const eventsForDay3 = [
    { name: "Event 1", description: "Description for Event 1" },
    { name: "Event 2", description: "Description for Event 2" },
  ];
  const itinerariesForDay3 = [
    { id: 'completed', name: 'Completed Itinerary', description: 'Completed itinerary description.' },
    { id: 'needs_attention', name: 'Lodging', description: 'You haven\'t planned this itinerary yet!' },
  ];
  return (
    <div>
      {/* Navigation bar */}

      <main>
        <div className="containerIndex">
          {/* Side bar */}
          <div className="sidebar">
            <div className="flex-item">
              <img src="public/img/menu.png" alt="menu_icon" id="menu" />
              <h2>Choose Plan</h2>
            </div>
            <div className="flex-item">
              <a href="#">
                <img src="img/travel-bag.png" alt="plan_icon" />
                <span>{destination ? destination : 'Start your First Plan'}</span>
              </a>
            </div>
            <div className="flex-item">
              <Link to="/input">
                <img src="img/add.png" alt="add_icon" />
                <span>Add New Plan</span>
              </Link>
            </div>
          </div>

          {/* Main page */}
          <div className="mainbar">
            <Link to="/addevent" className="add-event">
              <span>Add Event</span>
            </Link>

            {/* Plan Title */}
            <div className="plan_header">
              <h2 className="plan_name">{destination}</h2>
              <img src="img/delete.png" alt="delete_icon" className="delete-icon" />
            </div>
            {/* Day 1 */}
            <div className="flex-day">
              {/* what users will see if an itinerary is added but not filled in */}
              <h3>Day 1</h3>
              <div className="flex-items">
                <div className="flex-defaults">
                    <div className="flex-notes">
                    <h4>Notes</h4>
                    <p>Click to add notes</p>
                    </div>
                    <div className="flex-budget">
                    <h4>Budget</h4>
                    <p>Daily Cost: $0</p>
                    <p>Remaining Budget: $700</p>
                    </div>
                </div>
                <div className="flex-itinerary" id="completed">
                  <img src="img/delete.png" alt="delete_icon" className="delete-icon" />
                  <h4>Flight</h4>
                  <p>Flight Information</p>
                </div>
                <div className="flex-itinerary" id="needs_attention">
                  <img src="img/delete.png" alt="delete_icon" className="delete-icon" />
                  <h4>Lodging</h4>
                  <p>You haven't planned this itinerary yet!</p>
                </div>
                <div className="flex-event">
                  <img src="img/delete.png" alt="delete_icon" className="delete-icon" />
                  <h4>Event: Pike Place Market</h4>
                  <p>Seattle's original farmers market and the center of locally sourced, artisan, and specialty foods.</p>
                </div>
              </div>
            </div>
            {/* Day 2 */}
            {/* what users will see if events are added */}
            <div className="flex-day">
              <h3>Day 2</h3>
              <div className="flex-items">
                <div className="flex-defaults">
                        <div className="flex-notes">
                        <h4>Notes</h4>
                        <p>Click to add notes</p>
                        </div>
                        <div className="flex-budget">
                        <h4>Budget</h4>
                        <p>Daily Cost: $0</p>
                        <p>Remaining Budget: $700</p>
                        </div>
                    </div>
                <div className="flex-event" id="test">
                  <img src="img/delete.png" alt="delete_icon" className="delete-icon" />
                  <h4>Event: Pike Place Market</h4>
                  <p>Seattle's original farmers market and the center of locally sourced, artisan, and specialty foods.</p>
                </div>
              </div>
            </div>
            {/* Day 3 */}
            {/* what users will see in default */}
            {dayNumbers.map((dayNumber, index) => (
              <DayList 
              key={dayNumber} 
              dayNumber={dayNumber} 
              flexevents={eventsForDay3} 
              flexitineraries={itinerariesForDay3} 
              dailyBudget={dailyBudgets[index]}
              setDailyBudget={(newDailyBudget) => handleDailyBudgetChange(index, newDailyBudget)}

              remainingBudget={remainingBudget}/>
            ))}
            <div className="remaining-budget">
              <p>Remaining Budget: ${remainingBudget}</p>
            </div>



          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 Journemo. All rights reserved.</p>
        <p>
          Contact Us: <a href="mailto:info@journemo.com"><span className="material-icons"></span>info@journemo.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Planner;
