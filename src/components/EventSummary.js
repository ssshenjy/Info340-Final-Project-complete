import { React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function EventSummary(props) {
    return (
        <div>
            <main class="container mt-4  bg-sky">
                <div class="jumbotron">
                    <h1 class="display-4">Event Details</h1>
                </div>
                <div class="card">
                    <div class="card-body mb-3">
                        <h2 class="card-title">Event Number: 123</h2>
                        <h3 class="card-subtitle mb-2 text-muted">Event Name: Example Event</h3>
                        <p class="card-text">Location: Sample Location</p>
                        <p class="card-text">Description: This is a sample event description.</p>
                        <p class="card-text">This is not an itinerary event.</p>
                        <a href="/Planner" class="btn btn-primary">Back to Planner</a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EventSummary;