import React, { useState } from 'react';

// Form Input Component
function FormInput({ id, name, type = "text", label, required = false }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input type={type} className="form-control" id={id} name={name} required={required} />
    </div>
  );
}

// Form Textarea Component
function FormTextarea({ id, name, label }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea className="form-control" id={id} name={name}></textarea>
    </div>
  );
}

// Form Checkbox Component
function FormCheckbox({ id, name, label, required = false }) {
  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id={id} name={name} required={required} />
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-light py-3 mt-5">
      <div className="container text-center">
        <p>&copy; 2023 Journemo. All rights reserved.</p>
        <p id="contact">
          Contact Us: <a href="mailto:info@journemo.com"><span className="material-icons"></span>info@journemo.com</a>
        </p>
      </div>
    </footer>
  );
}

// Main AddEvent Component
function AddEvent() {
  const [events, setEvents] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEvent = {};

    formData.forEach((value, key) => {
      newEvent[key] = value;
    });
    setEvents([...events, newEvent]);
    console.log(events);
    event.target.reset();
  };

  return (
    <div>
      <main className="container mt-4 bg-sky">
        <h1>Add a New Event!</h1>
        <form onSubmit={handleSubmit}>
          <FormInput id="eventName" name="eventName" label="Event Name:" required />
          <FormInput id="eventDay" name="eventDay" type="day" label="Event Day:" />
          <FormInput id="eventTime" name="eventTime" type="time" label="Event Time:" />
          <FormInput id="location" name="location" label="Location:" />
          <FormTextarea id="description" name="description" label="Description:" />
          <FormCheckbox id="itinerary" name="itinerary" label="Is It An Itinerary?" required />
          <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default AddEvent;

