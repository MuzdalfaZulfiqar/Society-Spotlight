import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    });


    const [show, setShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [variant, setVariant] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //   const [responseMessage, setResponseMessage] = useState(""); // For showing feedback

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch("http://localhost:3001/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            //   if (response.ok) {
            //     setResponseMessage("Your message has been sent successfully!");
            //     setFormData({ fullname: "", email: "", phone: "", message: "" }); // Clear form
            //   } else {
            //     setResponseMessage(data.error || "An error occurred. Please try again.");
            //   }
            // } catch (error) {
            //   console.error("Error submitting form:", error);
            //   setResponseMessage("An error occurred. Please try again later.");
            // }


            if (response.ok) {
                setVariant("Success");
                setModalMessage("Your message has been submitted successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setVariant("Error");
                setModalMessage(data.error || "Failed to submit your message.");
            }
        } catch (error) {
            setVariant("Error");
            setModalMessage("An error occurred while submitting your message.");
        }
        handleShow();
    };

    return (

        <section className="" style={{ backgroundColor: "white", color: "black" }}>


       {/* Why Contact Us Section */}
<div className="why-contact-us text-center mb-5" style={{ backgroundColor: '#1D1B5D', padding:"27px" }}>
  <h2 className="mb-4 text-white  display-6">Why Contact Us?</h2>
  <div className="row justify-content-center">
    <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
      <div className="icon-container bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '24px' }}>
        🤝
      </div>
      <h5 className="text-white">Collaborate with Us</h5>
      <p className="text-white">Partner with top societies like GDG, IEEE, and more for mutual growth.</p>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
      <div className="icon-container bg-success text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '24px' }}>
        🌟
      </div>
      <h5 className="text-white">Join the Spotlight</h5>
      <p className="text-white">Showcase your society and let others see your contributions.</p>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
      <div className="icon-container bg-warning text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '24px' }}>
        ❓
      </div>
      <h5 className="text-white">Get Support</h5>
      <p className="text-white">Have any issues or suggestions? We're here to help you.</p>
    </div>
  </div>
</div>

            <div className="container">
                <h4 className="mb-4 display-6 text-center">Reach out to Us</h4>
                <p className="text-secondary mb-5 text-center">
                    The best way to contact us is to use our contact form below. Please fill out all of the required fields, and we will get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                        <div className="col-12">
                            <label htmlFor="fullname" className="form-label">
                                Full Name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="email" className="form-label">
                                Email <span className="text-danger">*</span>
                            </label>
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
                        <div className="col-12 col-md-6">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">
                                Message <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <div className="d-grid justify-content-center">
                                <button
                                    className="btn btn-primary btn-lg"
                                    type="submit"
                                    style={{
                                        width: "200px",
                                        height: "50px",
                                        backgroundColor: "#1D1B5D",
                                        borderColor: "#1D1B5D",
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* {responseMessage && (
          <div className="mt-4 text-center">
            <p>{responseMessage}</p>
          </div>
        )} */}
            </div>


            {<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{variant}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
            </Modal>}
        </section>
    );
};

export default Contact;
