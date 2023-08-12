import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import DayList from './DayList';

function Planner(props) {
  const { destination, startDate, endDate, budget } = props.tripData || {};
  const [planDeleted, setPlanDeleted] = useState(false);

  {/* delete entire plan */}
  const deletePlan = () => {
    setPlanDeleted(true);
  };

  {/* Input.js - duration */}
  const [duration, setDuration] = useState(3);
  const [dayNumbers, setDayNumbers] = useState(Array.from({ length: duration }, (_, index) => index + 1));

  useEffect(() => {
    if (startDate && endDate) {
      const startDateCal = new Date(startDate);
      const endDateCal = new Date(endDate);
      const timeDifference = endDateCal - startDateCal;
      const inputDuration = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    
      setDuration(inputDuration);
      setDayNumbers(Array.from({ length: inputDuration }, (_, index) => index + 1));
    }
  }, [startDate, endDate]);
  
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
    { id: 'completed', name: 'Completed Itinerary', description: 'Completed itinerary description.', location: 'Some location' },
    { id: 'needs_attention', name: 'Itinerary Needs Attention', description: '', location: '' },
  ];
  const updatedItineraries = itinerariesForDay3.map((itinerary) => {
    const isCompleted = itinerary.description || itinerary.location;
    const description = isCompleted ? itinerary.description : "You haven't planned this itinerary yet!";
    return {
      ...itinerary,
      id: isCompleted ? 'completed' : 'needs_attention',
      description: description,
    };
  });

  return (
    <div>
      {/* Navigation bar */}

      <main>
        <div className="containerIndex">
          {/* Side bar */}
          <div className="sidebar">
            <div className="flex-item">
              <img src="img/menu.png" alt="menu_icon" id="menu" />
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
            { planDeleted ? (
                <div className="plan-deleted-message">
                    The plan has been deleted.
                </div>
            ) : (
                <>
                    <Link to="/addevent" className="add-event">
                        <span>Add Event</span>
                    </Link>
                    {dayNumbers.map((dayNumber, index) => (
                        <DayList 
                            key={dayNumber} 
                            dayNumber={dayNumber} 
                            flexevents={eventsForDay3} 
                            flexitineraries={updatedItineraries} 
                            dailyBudget={dailyBudgets[index]}
                            setDailyBudget={(newDailyBudget) => handleDailyBudgetChange(index, newDailyBudget)}
                            remainingBudget={remainingBudget}
                        />
                    ))}
                </>
            )}
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
