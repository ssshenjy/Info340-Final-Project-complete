import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Input(props) {
    const [destination, setDestination] = useState('');

    const handleDestinationChange = (e) => {
      setDestination(e.target.value);
    };
  
  return (
    <div>
      {/* Navigation bar */}

      <main className="container mt-4 bg-image">
        {/* Page title */}
        <h1>Start a New Trip</h1>

        {/* The container including all the chunks that users will input values */}
        <form>
          {/* Input1: Destination */}
          <div className="mb-3">
            <label htmlFor="destination" className="form-label">Destination:</label>
            <input type="text" className="form-control" id="destination" name="destination" placeholder="Enter your destination" value={destination} onChange={handleDestinationChange}/>
          </div>
          

          <div className="row">
            {/* Input2: Start Day */}
            <div className="col-md-6 mb-3">
              <label htmlFor="start-date" className="form-label">Start date:</label>
              <input type="date" className="form-control" id="start-date" name="start-date" />
            </div>

            {/* Input3: End Day */}
            <div className="col-md-6 mb-3">
              <label htmlFor="end-date" className="form-label">End date:</label>
              <input type="date" className="form-control" id="end-date" name="end-date" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="budget" className="form-label">Budget:</label>
            <input type="number" className="form-control" id="budget" name="budget" min="0" />
          </div>

          {/* Button to submit the input values */}
          <Link to='/planner' className="btn btn-primary">Start the trip</Link>
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

export default Input;
