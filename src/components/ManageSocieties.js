import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import societyContext from "../contexts/SocietyContext";
import ManageSocietyCard from "./NewSocietyCard"; // Assuming you'll create this component to show society info


function ManageSocieties() {
  const navigate = useNavigate();
  const context = useContext(societyContext);
  const { societies, getAll } = context;

  useEffect(() => {
    getAll(); // Fetch the societies when the component mounts
  }, []);

  function handleSocietyView(id) {
    navigate(`/society`); // Navigate to the individual society view page
  }

  // Mapping through societies to display them
  const mappedSocieties = societies.map((society) => (
    <ManageSocietyCard
      key={society._id}
      id={society._id}
      name={society.name}
      imgURL={society.imgURL}
      category={society.category}
      tagline={society.tagline}
      onViewSociety={handleSocietyView}
    />
  ));

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className="col-md-7 container add" style={{ marginTop: "40px" }}>
          Manage Societies
        </div>
        <div className="container">
          {mappedSocieties.length > 0 ? mappedSocieties : <p>No societies available.</p>}
        </div>
      </div>
    </>
  );
}

export default ManageSocieties;
