import React, { useState, useContext } from 'react';
import eventContext from "../contexts/EventContext"; // Assuming you have EventContext
import UpdateEvent from './UpdateEvent'; // Create an UpdateEvent component similar to UpdateSociety

const NewEventCard = ({ id, imgURL, title, description, date, location }) => {
  const context = useContext(eventContext);
  const { deleteEvent } = context;

  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          color: "black"
        }}
      >
        <div>Event Title: {title}</div>
        <div>Description: {description}</div>
        <div>Date: {date}</div>
        <div>Location: {location}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {/* View Profile Button */}
          <div className="cardEventButtonDiv">
            <button
              className="cardEventButton"
              style={{ cursor: "pointer", width: "170px" }}
              onClick={() => {
                // Navigate to the event profile page
                // You can replace this with your desired function or link
              }}
            >
              View Details
            </button>
          </div>

          {/* Delete Event Button */}
          <div
            className="iconsButton"
            onClick={() => {
              console.log(id);
              deleteEvent(id);
            }}
          >
            <i
              className="fa fa-trash"
              aria-hidden="true"
              style={{ color: "black", cursor: "pointer" }}
            ></i>
          </div>

          {/* Edit Event Button */}
          <div
            style={{ cursor: "pointer" }}
            className="iconsButton"
            onClick={() => {
              setShow(true);
            }}
          >
            <i className="fas fa-edit" style={{ color: "black", cursor: "pointer" }}></i>
          </div>
        </div>
      </div>

      {show && (
        <UpdateEvent
          show={show}
          id={id}
          title={title}
          description={description}
          imgURL={imgURL}
          date={date}
          location={location}
        />
      )}
    </>
  );
};

export default NewEventCard;
