import React, { useState, useContext, useEffect } from 'react';
import eventContext from '../contexts/EventContext';  // Import the context
import EventCard from './EventCard';  // Import the EventCard component
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

const AllEvents = () => {
  const navigate = useNavigate();
  const { events, getAllEvents } = useContext(eventContext);  // Access events from context
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  function handleEventView(id) {
    navigate(`/getEvent/${id}`); // Navigate to the individual event view page
  }


  // Fetch events on component mount
  useEffect(() => {
    getAllEvents();
  }, []);

  console.log(events)

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Next page handler
  const nextPage = () => {
    if (currentPage < Math.ceil(events.length / eventsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page handler
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="text-center text-white py-5" style={{ backgroundColor: '#1D1B5D' }}>
                <div className="container">
                    <h1>Events</h1>
                </div>
            </section>
      <section className="py-5">
      
        <div className="container">

          <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {events.map((event) => (
              <EventCard
                key={event._id}
                id = {event._id}
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                onViewEvent={handleEventView}
              />
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="d-flex justify-content-between">
            <button
              className="btn"
              style={{ backgroundColor: '#1D1B5D', color: 'white' }}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <i className="fas fa-arrow-left"></i> Prev
            </button>

            <button
              className="btn"
              style={{ backgroundColor: '#1D1B5D', color: 'white' }}
              onClick={nextPage}
              disabled={currentPage === Math.ceil(events.length / eventsPerPage)}
            >
              Next <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllEvents;
