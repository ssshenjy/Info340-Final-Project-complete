import React, { useState } from 'react';


function FormCheckbox({ id, name, label, required = false }) {
  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id={id} name={name} required={required} />
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  );
}

function AddEvent({ selectedDay, onAddEvent }) {
    const [inputDayNumber, setInputDayNumber] = useState('');
    const [inputEventName, setInputEventName] = useState('');
    const [inputEventDescription, setInputEventDescription] = useState('');
    const [inputEventLocation, setInputEventLocation] = useState('');

    const handleAddInputEvent = (event) => {
        event.preventDefault();

        if (inputEventName.trim() === '' || inputEventDescription.trim() === '') {
            return; 
        }

        const eventToAdd = { 
          name: inputEventName, 
          description: inputEventDescription,
          location: inputEventLocation
        };

        // Call the onAddEvent function to add the event to the selected day
        onAddEvent(Number(inputDayNumber), eventToAdd);

        // Clear input fields
        setInputDayNumber('');
        setInputEventName('');
        setInputEventDescription('');
    };

    return (
      <div>
        <main className="container mt-4 bg-sky">
        <div className="input-event-form">
            <h3>Add Event Directly to Day</h3>
            <form onSubmit={handleAddInputEvent}>
                <div className="mb-3">
                    <label htmlFor="inputDayNumber" className="form-label">Day Number: (Enter a Number)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputDayNumber"
                        value={inputDayNumber}
                        onChange={(event) => setInputDayNumber(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEventName" className="form-label">Event Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEventName"
                        value={inputEventName}
                        onChange={(event) => setInputEventName(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEventLocation" className="form-label">Event Location:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEventLocation"
                        value={inputEventLocation}
                        onChange={(event) => setInputEventLocation(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEventDescription" className="form-label">Event Description:</label>
                    <textarea
                        className="form-control"
                        id="inputEventDescription"
                        value={inputEventDescription}
                        onChange={(event) => setInputEventDescription(event.target.value)}
                        required
                    ></textarea>
                </div>
                <FormCheckbox id="itinerary" name="itinerary" label="Is It An Itinerary?" />
                <button type="submit" className="btn btn-primary">Add Event</button>
            </form>
        </div>
        </main>
      </div>
    );
}
export default AddEvent;
