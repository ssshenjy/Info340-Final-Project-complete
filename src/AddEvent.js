import React from 'react';

function AddEventForm() {
  return (
    <div>
        <main className="container mt-4">
        <form>
            <div className="mb-3">
            <label htmlFor="eventName" className="form-label">Event Name:</label>
            <input type="text" className="form-control" id="eventName" name="eventName" required />
            </div>

            <div className="mb-3">
            <label htmlFor="eventDate" className="form-label">Event Date:</label>
            <input type="date" className="form-control" id="eventDate" name="eventDate" required />
            </div>

            <div className="mb-3">
            <label htmlFor="eventTime" className="form-label">Event Time:</label>
            <input type="time" className="form-control" id="eventTime" name="eventTime" />
            </div>

            <div className="mb-3">
            <label htmlFor="location" className="form-label">Location:</label>
            <input type="text" className="form-control" id="location" name="location" />
            </div>

            <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea className="form-control" id="description" name="description"></textarea>
            </div>

            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="itinerary" name="itinerary" required />
            <label className="form-check-label" htmlFor="itinerary">Is It An Itinerary?</label>
            </div>

            <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
        </main>

        <footer className="bg-light py-3 mt-5">
            <div className="container text-center">
            <p>&copy; 2023 Journemo. All rights reserved.</p>
            <p id="contact">
                Contact Us: <a href="mailto:info@journemo.com"><span className="material-icons"></span>info@journemo.com</a>
            </p>
            </div>
        </footer>
    </div>
  );
}

export default AddEventForm;


