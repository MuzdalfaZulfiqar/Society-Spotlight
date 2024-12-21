import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import eventContext from "../contexts/EventContext"; // Assuming you have EventContext
import NewEventCard from "./NewEventCard"; // Assuming you'll create this component to show event info

function ManageEvents() {
  const navigate = useNavigate();
  const context = useContext(eventContext);
  const { events, getAllEvents } = context;

  useEffect(() => {
    getAllEvents(); // Fetch the events when the component mounts
  }, []);

  function handleEventView(id) {
    navigate(`/event/${id}`); // Navigate to the individual event view page
  }

  // Mapping through events to display them
  const mappedEvents = events.map((event) => (
    <NewEventCard
      key={event._id}
      id={event._id}
      title={event.title}
      imgURL={event.imgURL}
      description={event.description}
      date={event.date}
      location={event.location}
      onViewEvent={handleEventView}
    />
  ));

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className="col-md-7 container add" style={{ marginTop: "40px" }}>
          Manage Events
        </div>
        <div className="container">
          {mappedEvents.length > 0 ? mappedEvents : <p>No events available.</p>}
        </div>
      </div>
    </>
  );
}

export default ManageEvents;
