import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const JoinNowForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    societyName: "",
    message: "",
    semester: "",
    department: ""
  });

  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");

  let navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function submitJoinRequest() {
    try {
      let response = await fetch("http://localhost:3001/api/joinRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      let data = await response.json(); // Expecting JSON response from the server
      if (response.ok) {
        setMessage(data.message || "Join request submitted successfully!");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
          navigate("/"); // Redirect after a successful form submission
        }, 1000);
      } else {
        setMessage(data.message || "Error submitting the form.");
        setVariant("Error");
        setShow(true);
      }
    } catch (error) {
      console.log(error);
      setMessage("There was an error submitting your request.");
      setVariant("Error");
      setShow(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitJoinRequest();
  }

  return (
    <>
    <Navbar/>
     <section className="text-center text-white py-5" style={{ backgroundColor: '#1D1B5D' }}>
                <div className="container">
                    <h1>Join Us</h1>
                </div>
            </section>
      <div className="container mt-5 mb-5">
     
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Predefined Society Names */}
          <div className="form-group mb-3">
            <label htmlFor="societyName">Society Name</label>
            <select
              className="form-control"
              id="societyName"
              name="societyName"
              value={formData.societyName}
              onChange={handleChange}
              required
            >
              <option value="">Select Society</option>
              <option value="GDG CUI">GDG CUI</option>
              <option value="IEEE">IEEE</option>
              <option value="Robotics Society">Robotics Society</option>
              <option value="AI Club">AI Club</option>
              {/* Add more society options as needed */}
            </select>
          </div>

          {/* Predefined Semesters */}
          <div className="form-group mb-3">
            <label htmlFor="semester">Semester</label>
            <select
              className="form-control"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="3rd">3rd Semester</option>
              <option value="4th">4th Semester</option>
              <option value="5th">5th Semester</option>
              <option value="6th">6th Semester</option>
              <option value="7th">7th Semester</option>
              <option value="8th">8th Semester</option>
            </select>
          </div>

          {/* Predefined Departments */}
          <div className="form-group mb-3">
            <label htmlFor="department">Department</label>
            <select
              className="form-control"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              {/* Add more department options as needed */}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn" style={{ backgroundColor: "#1D1B5B", color: "white" }}>
            Submit
          </button>
        </form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{variant}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
      <Footer/>
    </>
  );
};

export default JoinNowForm;
