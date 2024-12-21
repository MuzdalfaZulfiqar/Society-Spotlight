import React, { useState, useContext } from 'react';
import eventContext from "../contexts/EventContext"; // Make sure to import the event context
import Modal from 'react-bootstrap/Modal';

function UpdateEvent(props) {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const context = useContext(eventContext); // Use event context
  const { updateEvent } = context;

  const [formData, setFormData] = useState({
    title: props.title,
    description: props.description,
    date: props.date,
    time: props.time,
    location: props.location,
    image: props.image, // Assuming 'image' is the existing image URL
  });

  // Handle input changes
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    const { title, description, date, time, location, image } = formData;
    
    // Update the event using the context function
    updateEvent(props.id, title, description, date, time, location, image);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-2" onSubmit={handleSubmit}>
            {/* Title */}
            <div className="form-group my-2">
              <label htmlFor="title">Event Title</label>
              <input
                style={{ border: '1px solid black' }}
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter event title"
                value={formData.title}
                name="title"
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="form-group my-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter event description"
                value={formData.description}
                name="description"
                onChange={handleChange}
              />
            </div>

            {/* Date */}
            <div className="form-group my-2">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formData.date}
                name="date"
                onChange={handleChange}
              />
            </div>

            {/* Time */}
            <div className="form-group my-2">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                value={formData.time}
                name="time"
                onChange={handleChange}
              />
            </div>

            {/* Location */}
            <div className="form-group my-2">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter event location"
                value={formData.location}
                name="location"
                onChange={handleChange}
              />
            </div>

            {/* Image URL */}
            <div className="form-group my-2">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Enter image URL"
                value={formData.image}
                name="image"
                onChange={handleChange}
              />
            </div>

            <button style={{ margin: '20px' }} type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateEvent;
