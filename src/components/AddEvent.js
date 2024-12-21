import React, { useState, useContext } from "react";
import eventContext from "../contexts/EventContext"; // Assuming you have EventContext

function AddEvent() {
  const context = useContext(eventContext);
  const { addEvent } = context;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const [file, setFile] = useState(null); // To store the uploaded file

  // Handle change for form data
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value, // Update the correct field based on name
    }));
  }

  // Handle file input
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFile(file); // Save the file itself
    }
  }

//   // Handle submit for the form
// Handle submit for the form
// async function handleSubmit(event) {
//     event.preventDefault();
  
//     // Create a FormData object to send multipart/form-data request
//     const eventData = new FormData();
//     eventData.append("title", formData.title);
//     eventData.append("description", formData.description);
  
//     // Format the date before appending it
//     // The date comes from the input of type="date", which returns a string in YYYY-MM-DD format
//     const formattedDate = new Date(formData.date); // This creates a valid Date object
//     if (formattedDate.getTime()) {
//         eventData.append("date", formattedDate.toISOString()); // Use toISOString() to ensure it's in ISO format
//     } else {
//         console.error("Invalid date:", formData.date);
//         return; // Exit the function if the date is invalid
//     }
  
//     eventData.append("location", formData.location);
//     if (file) {
//       eventData.append("image", file); // Append the file to FormData
//     }
  
//     // Debug log to check if the FormData is correctly populated
//     for (let pair of eventData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }
  
//     try {
//       // Send eventData to the backend using FormData
//       await addEvent(formData.title, formData.description, formattedDate, formData.location, file); // Assuming addEvent is updated to handle FormData
//     } catch (error) {
//       console.error("Error adding event:", error);
//     }
//   }


async function handleSubmit(event) {
    event.preventDefault();
  
    // Format the date before appending it
    const formattedDate = new Date(formData.date);
    if (!formattedDate.getTime()) {
      console.error("Invalid date:", formData.date);
      return;
    }
  
    // Pass the form data and file to addEvent function
    await addEvent(formData.title, formData.description, formattedDate, formData.location, file);
  }
  
  



  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="col-md-7 container add" style={{ marginTop: "40px" }}>
        Add an Event
      </div>
      <div className="my-5">
        <form className="col-md-7 container mt-2" onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="title">Event Title</label>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              className="form-control inputBorder"
              id="title"
              placeholder="Enter event title"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              className="form-control inputBorder"
              id="date"
              value={formData.date}
              name="date"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="location">Event Location</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="location"
              placeholder="Enter event location"
              value={formData.location}
              name="location"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="description">Event Description</label>
            <textarea
              className="form-control inputBorder"
              id="description"
              placeholder="Enter event description"
              value={formData.description}
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="imgURL">Event Image</label>
            <input
              type="file"
              className="form-control inputBorder"
              id="imgURL"
              name="imgURL"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <button
            style={{ margin: "20px" }}
            type="submit"
            className="submitButton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
