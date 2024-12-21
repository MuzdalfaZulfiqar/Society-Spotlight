import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import to access URL params
import EventContext from '../contexts/EventContext';
import { useContext } from 'react';

const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

// const context = useContext(eventContext);
//   const { addEvent, getEvent } = context;
//   console.log(id)

  // Fetch event details from the server using the event ID
  useEffect(() => {
    fetch(`http://localhost:3001/api/event/getEvent/${id}`) // Call the backend to get event details
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.log(error));

  }, [id]);

  if (!event) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }

  return (
    <div className="container py-5 col-md-8 d-flex">
      <div className="row">
        {/* Image Section */}
        <div className="col-12">
          <img 
            src={`http://localhost:3001/${event.image}`} 
            alt={event.title} 
            className="img-fluid"
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
          />
        </div>

        {/* Event Details Section */}
        <div className="col-12">
          <h2 className="my-4">{event.title}</h2>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Location:</strong> <span style={{ color: '#1D1B5D' }}>{event.location}</span></p>
          <p><strong>Event Date:</strong> <span style={{ fontStyle: 'italic', color: '#FF6347' }}>{new Date(event.date).toLocaleDateString()}</span></p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
