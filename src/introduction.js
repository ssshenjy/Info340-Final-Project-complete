// import { Button } from 'react-bootstrap';
// import _ from 'lodash';
// import { useParams } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

function Introduction(props) {
  return (
    <div>
      {/* Navigation bar */}


      {/* Hero section */}
      <header className="hero-image">
        <h2 className="display-4 text-shadow">The easiest way to plan your travels</h2> {/* Changed from h1 to h2 */}
        <p className="lead text-shadow">All your travel plans, all in one place.</p> {/* Add shadow to the text */}
        <Link to="/input" className="btn btn-outline-light btn-lg">Get started for free</Link>
      </header>

      {/* Main Content */}
      <main className="container mt-4">
        {/* Features Section */}
        <section className="features-section" id="features">
          <h3 className="text-center mb-5">Why Journemo?</h3> {/* Changed from h2 to h3 */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Interactive Itinerary</h4> {/* Changed from h5 to h4 */}
                  <p className="card-text">Create, manage and visualize your itinerary in a dynamic calendar view. Cover all the important details for each day of your travel.</p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Add Events and Notes</h5>
                  <p className="card-text">Add important events and notes to your itinerary. Attach contact information, addresses and other relevant data to each event.</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Budget Tracking</h5>
                  <p className="card-text">Set your travel budget and enter the estimated costs for each event in your schedule. Keep track of your expenses and make sure you stay within your budget.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="row mt-5">
          <div className="col-lg-12 text-center">
            <h2>Ready to start your adventure?</h2>
            <a href="#signup" className="btn btn-primary btn-lg">Sign Up for free</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 mt-5">
        <div className="container text-center">
          <p>&copy; 2023 Journemo. All rights reserved.</p>
        </div>
      </footer>

      {/* Bootstrap Bundle with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-fnMzBIW/AVKdW1ZKh5vBvtO4jB1JZmp3hSYLs5QDfMhUu6IG5gZKpy4ij4b3R9dg" crossorigin="anonymous"></script>
    </div>
  );
}

export default Introduction;
