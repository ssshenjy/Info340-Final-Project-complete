import React from 'react';
import { useParams, Link} from 'react-router-dom';

function Planner(props) {
    const { destination } = useParams();

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
                <span>Plan1</span>
              </a>
            </div>
            {destination && (
              <div className="flex-item">
                <a href="#" aria-label="New Plan">
                  <img src="img/travel-bag.png" alt="plan_icon" />
                  <span>{destination}</span>
                </a>
              </div>
            )}
            <div className="flex-item">
              <Link to="/input">
                <img src="img/add.png" alt="add_icon" />
                <span>Add New Plan</span>
              </Link>
            </div>
          </div>

          {/* Main page */}
          <div className="mainbar">
            <a href="addevent.html" alt="addevent_icon" className="add-event">
              Add Event
            </a>
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
                <div className="flex-default">
                  <h4>Notes</h4>
                  <p>Click to add notes</p>
                </div>
                <div className="flex-default">
                  <h4>Budget</h4>
                  <p>Daily Cost: $300</p>
                  <p>Remaining Budget: $700</p>
                </div>
                <div className="flex-itinerary" id="completed">
                  <img src="../public/img/delete.png" alt="delete_icon" className="delete-icon" />
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
                <div className="flex-default">
                  <h4>Notes</h4>
                  <p>Click to add notes</p>
                </div>
                <div className="flex-default">
                  <h4>Budget</h4>
                  <p>Daily Cost: $0</p>
                  <p>Remaining Budget: $700</p>
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
            <div className="flex-day">
              <h4>Day 3</h4>
              <div className="flex-items">
                <div className="flex-default">
                  <h4>Notes</h4>
                  <p>Click to add notes</p>
                </div>
                <div className="flex-default">
                  <h4>Budget</h4>
                  <p>Daily Cost: $0</p>
                  <p>Remaining Budget: $700</p>
                </div>
              </div>
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
