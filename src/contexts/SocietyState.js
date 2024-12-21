import societyContext from "./SocietyContext";
import React from "react";
import Modal from "react-bootstrap/Modal";

function SocietyState(props) {
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const handleClose = () => setShow(false);

  let [societies, setSocieties] = React.useState([]); // State to manage societies
  let [singleSociety, setSingleSociety] = React.useState({}); // State for single society
  let host = "http://localhost:3001";

  async function getAll() {
    try {
      let response = await fetch(`${host}/api/society/getAll`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      let json = await response.json();
      setSocieties(json);
    } catch (error) {
      setMessage("Error fetching societies");
      setVariant("Error");
      setShow(true);
    }
  }

  async function getSociety(id) {
    try {
      let response = await fetch(`${host}/api/society/getSociety/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      let json = await response.json();
      setSingleSociety(json);
    } catch (error) {
      setMessage("Error fetching society details");
      setVariant("Error");
      setShow(true);
    }
  }

  async function getSocietyByCategory(category) {
    try {
      let response = await fetch(`${host}/api/society/getAll/${category}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      let json = await response.json();
      setSocieties(json);
    } catch (error) {
      setMessage("Error fetching societies by category");
      setVariant("Error");
      setShow(true);
    }
  }

  async function deleteSociety(id) {
    try {
      let response = await fetch(`${host}/api/society/deleteSociety/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      let json = await response.json();
      let { success } = json;
      if (success) {
        setMessage("Society Deleted Successfully");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
        getAll(); // Re-fetch the societies
      } else {
        setVariant("Error");
        setMessage("Error Deleting Society");
        setShow(true);
      }
    } catch (error) {
      setMessage("Error Deleting Society");
      setVariant("Error");
      setShow(true);
    }
  }

  async function updateSociety(id, name, category, tagline, imgURL) {
    try {
      let response = await fetch(`${host}/api/society/updateSociety/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          tagline,
          imgURL,
        }),
      });
      let data = await response.json();
      let { success } = data;
      if (success) {
        setMessage("Society Updated Successfully");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
        getAll(); // Re-fetch the societies
      } else {
        setVariant("Error");
        setMessage("Error Updating Society");
        setShow(true);
      }
    } catch (error) {
      setMessage("Error Updating Society");
      setVariant("Error");
      setShow(true);
    }
  }

  async function addSociety(name, category, tagline, imgURL) {
    try {
      let response = await fetch(`${host}/api/society/createSociety`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          tagline,
          imgURL,
        }),
      });
      let data = await response.json();
      if (data.success) {
        setMessage("Society Added Successfully");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
        getAll(); // Re-fetch the societies
      } else {
        setMessage("Error Adding Society");
        setVariant("Error");
        setShow(true);
      }
    } catch (error) {
      setMessage("Error Adding Society");
      setVariant("Error");
      setShow(true);
    }
  }

  return (
    <>
      <societyContext.Provider
        value={{
          societies,
          getAll,
          getSocietyByCategory,
          singleSociety,
          getSociety,
          addSociety,
          deleteSociety,
          updateSociety,
        }}
      >
        {props.children}
      </societyContext.Provider>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{variant}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </>
  );
}

export default SocietyState;
