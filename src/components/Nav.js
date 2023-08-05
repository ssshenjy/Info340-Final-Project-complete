import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/introduction" className="navbar-brand">Journemo: Your Travel Planner</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li><NavLink to="/start" className="nav-link">Start</NavLink></li>
                        <li><NavLink to="/add" className="nav-link">Add</NavLink></li>
                        <li><NavLink to="/plan" className="nav-link">Plan</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}