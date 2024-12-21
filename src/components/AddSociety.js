import React, { useState, useContext } from "react";
import societyContext from "../contexts/SocietyContext";

function AddSociety() {
  const context = useContext(societyContext);
  const { societies, addSociety } = context;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    tagline: "",
    imgURL: "",
  });

  // Handle change for form data
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Handle submit for the form
  function handleSubmit(event) {
    event.preventDefault();
    addSociety(formData.name, formData.category, formData.tagline, formData.imgURL);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="col-md-7 container add" style={{ marginTop: "40px" }}>
        Add a Society
      </div>
      <div className="my-5">
        <form className="col-md-7 container mt-2" onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="name">Society Name</label>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              className="form-control inputBorder"
              id="name"
              placeholder="Enter society name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="category"
              placeholder="Enter category"
              value={formData.category}
              name="category"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="tagline"
              placeholder="Enter tagline"
              value={formData.tagline}
              name="tagline"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="imgURL">Image URL</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="imgURL"
              placeholder="Enter image URL"
              value={formData.imgURL}
              name="imgURL"
              onChange={handleChange}
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

export default AddSociety;
