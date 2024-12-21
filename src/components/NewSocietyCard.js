import React, { useState, useContext } from 'react';
import societyContext from "../contexts/SocietyContext";
import UpdateSociety from './UpdateSociety';
import { Link } from 'react-router-dom';

const NewSocietyCard = ({ id, imgURL, name, tagline }) => {
  const context = useContext(societyContext);
  const { deleteSociety } = context;

  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between ",
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          color:"black"
        }}
      >
        <div>Name : {name}</div>
        <div>Tagline : {tagline}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {/* <div className="cardSocietyButtonDiv">
            <button
              className="cardSocietyButton"
              style={{ cursor: "pointer" , width:"170px"}}
              onClick={() => {
                // Navigate to the society profile page
                // You can replace this with your desired function or link
               
                
              }}
            >
              View Profile
            </button>
          </div> */}
          <div
            className="iconsButton"
            onClick={() => {
              console.log(id);
              deleteSociety(id);
            }}
          >
            <i
              className="fa fa-trash"
              aria-hidden="true"
              style={{ color: "black", cursor: "pointer" }}
            ></i>
          </div>

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
        <UpdateSociety
          show={show}
          id={id}
          name={name}
          tagline={tagline}
          imgURL={imgURL}
        />
      )}
    </>
  );
};

export default NewSocietyCard;
