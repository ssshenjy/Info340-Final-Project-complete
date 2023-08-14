import { React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// Main AddEvent Component
function AddEvent(props) {
  const [currentDate, setCurrentDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isLinkEnabled, setIsLinkEnabled] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [itinerary, setItinerary] = useState(false);
  const navigate = useNavigate()

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const itineraryChange = (e) => {
    setItinerary(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentDate && eventName && location && description) {
      props.addEvent(currentDate, eventName, location, description, itinerary);
      if (isLinkEnabled) {
        navigate(`/planner/${props.destination}`);
      }
      setIsLinkEnabled(false);
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  useEffect(() => {
    if (currentDate && eventName && location && description) {
      setIsLinkEnabled(true);
    } else {
      setIsLinkEnabled(false);
    }
  }, [currentDate, eventName, location, description]);
 
  return (
    <div>
      <main className="container mt-4 bg-sky">
        <h1>Add a New Event!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentDate" className="form-label">Event Date:</label>
           

            <input type="date" className="form-control" id="current-date" name="current-date"  onChange={handleDateChange} required min={props.tripData.startDate} max={props.tripData.endDate}/>
          </div>

          <div className="mb-3">
            <label htmlFor="eventName" className="form-label">Event Name:</label>
            <textarea className="form-control" id="eventName" name="eventName" onChange={handleEventNameChange} required></textarea>
          </div>
        
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location:</label>
            <textarea className="form-control" id="location" name="location" onChange={handleLocationChange} required></textarea>
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea className="form-control" id="description" name="description" onChange={handleDescriptionChange} required></textarea>
          </div>
          
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="itinerary" name="itinerary" onChange={itineraryChange} />
            <label className="form-check-label" htmlFor="itinerary">Is It An Itinerary?</label>
          </div>

          {showErrorMessage && <p style={{ color: 'red' }}>Please fill out all the blanks.</p>}
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Add Event
            </button>
          {/* )} */}
        </form>
        
      </main>
    </div>
  );
}

export default AddEvent;