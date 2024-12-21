import eventContext from "./EventContext";
import React from "react";
import Modal from "react-bootstrap/Modal";

function EventState(props) {
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [events, setEvents] = React.useState([]);
  let [singleEvent, setSingleEvent] = React.useState({});
  let host = "http://localhost:3001";

  async function getAllEvents() {
    try {
      let response = await fetch(
        `${host}/api/event/getAllEvents`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      setEvents(json);
    } catch (error) {
      console.log(error);
    }
  }

  async function getEvent(id) {
    try {
      let response = await fetch(
        `${host}/api/event/getEvent/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      setSingleEvent(json);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteEvent(id) {
    try {
      let response = await fetch(
        `${host}/api/event/deleteEvent/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      let { success } = json;
      if (success) {
        setMessage("Deletion Successful");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      } else {
        setVariant("Error");
        setMessage("Invalid Credentials");
        setShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateEvent(id, title, description, date, location, image) {
    try {
      // Validate the input data
      if (!title || !description || !date || !location || !image) {
        setVariant("Error");
        setMessage("All fields are required.");
        setShow(true);
        return;
      }

      let response = await fetch(
        `${host}/api/event/updateEvent/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            date,
            location,
            image,
          }),
        }
      );
      let data = await response.json();
      let { success } = data;
      if (success) {
        setMessage("Update Successful");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      } else {
        setVariant("Error");
        setMessage("Invalid Credentials");
        setShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

//   async function addEvent(title, description, date, location, image) {
//     try {

  
//       // Ensure the date is in ISO format
//       const formattedDate = new Date(date).toISOString(); // This converts the date into ISO format
  
//       let response = await fetch(
//         `${host}/api/event/createEvent`,
//         {
//           method: "POST",
//           headers: {
//             "Content-type": "application/json",
//           },
//           body: JSON.stringify({
//             title,
//             description,
//             date: formattedDate, // Use the formatted date here
//             location,
//             image,
//           }),
//         }
//       );

//       let data = await response.json();
//       let { success } = data;
//       if (success) {
//         setMessage("Event Created Successfully");
//         setVariant("Success");
//         setShow(true);
//         setTimeout(() => {
//           setShow(false);
//         }, 1000);
//       } else {
//         setVariant("Error");
//         setMessage("Invalid Credentials");
//         setShow(true);
//       }
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  

async function addEvent(title, description, date, location, image) {
    try {
      // Create a FormData object to send multipart/form-data request
      const eventData = new FormData();
      eventData.append("title", title);
      eventData.append("description", description);
  
      // Format the date as ISO 8601
      const formattedDate = new Date(date).toISOString();
      eventData.append("date", formattedDate);
  
      eventData.append("location", location);
      
      if (image) {
        eventData.append("image", image); // Append the file to FormData
      }
  
      // Send the FormData to the backend
      let response = await fetch(`${host}/api/event/createEvent`, {
        method: "POST",
        body: eventData, // Send FormData directly
      });
  
      let data = await response.json();
      let { success } = data;
  
      if (success) {
        setMessage("Event Created Successfully");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      } else {
        setVariant("Error");
        setMessage("Invalid Credentials");
        setShow(true);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      <eventContext.Provider
        value={{
          events,
          getAllEvents,
          getEvent,
          addEvent,
          deleteEvent,
          updateEvent,
        }}
      >
        {props.children}
      </eventContext.Provider>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{variant}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </>
  );
}

export default EventState;
