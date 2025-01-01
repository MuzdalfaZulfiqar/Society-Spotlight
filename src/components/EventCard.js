import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const EventCard = ({ id, image, title, description, date, location , onViewEvent}) => {
  return (
    <div className="col">
      <div className="card" style={{ width: '100%', height: '500px' }}>
        {/* Image Section (40% Height) */}
        <div style={{ height: '40%', overflow: 'hidden' }}>
          <img 
            src={`http://localhost:3001/${image}`} // Hardcoded backend API URL
            className="card-img-top" 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Content Section (60% Height) */}
        <div className="card-body" style={{ height: '60%' }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">Event Date: {new Date(date).toLocaleDateString()}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Location: {location}</small>
          </p>
          {/* Use Link for navigation */}

          <button
               
                style={{ cursor: "pointer", backgroundColor: "#1D1B5B", color: "white", width: "190px" }}
                onClick={() => {
                    onViewEvent(id);
                }}
              >
                View Details
              </button>

          
        </div>
      </div>
    </div>
  );
};

export default EventCard;
