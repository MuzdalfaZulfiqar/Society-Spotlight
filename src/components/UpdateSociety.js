import React, { useState, useContext } from "react";
import societyContext from "../contexts/SocietyContext";
import Modal from "react-bootstrap/Modal";

function UpdateSociety(props) {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const context = useContext(societyContext);
  const { updateSociety } = context;

  const [formData, setFormData] = useState({
    name: props.name,
    tagline: props.tagline,
    imgURL: props.imgURL,
  });

  const [file, setFile] = useState(null); // State for the uploaded file

  // Handle input changes
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Handle file input change
  function handleFileChange(event) {
    setFile(event.target.files[0]); // Store the selected file
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("tagline", formData.tagline);
    if (file) {
      formDataToSend.append("image", file); // Append the selected file to FormData
    }

    updateSociety(props.id, formDataToSend); // Send FormData to backend
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Society</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-2" onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <label htmlFor="name">Society Name</label>
              <input
                style={{ border: "1px solid black" }}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter society name"
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group my-2">
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                className="form-control"
                id="tagline"
                placeholder="Enter tagline"
                value={formData.tagline}
                name="tagline"
                onChange={handleChange}
              />
            </div>

            <div className="form-group my-2">
              <label htmlFor="image">Society Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange} // Handling file input change
              />
            </div>

            <button style={{ margin: "20px" }} type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateSociety;
