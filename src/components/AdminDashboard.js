import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import React, { useState } from "react";
import AddSociety from "./AddSociety"; // Updated to handle societies
import ManageSocieties from "./ManageSocieties"; // A new component to manage societies
import AddEvent from "./AddEvent"; // Component to add events
import ManageEvents from "./ManageEvents"; // Component to manage events

function AdminDashboard() {
  const [showAddSociety, setShowAddSociety] = useState(false);
  const [showManageSociety, setShowManageSociety] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showManageEvent, setShowManageEvent] = useState(false);
  const [showAdmin, setShowAdmin] = useState(true);

  // Handle Society Views
  function handleAddSocietyItem() {
    setShowAddEvent(false);
    setShowManageEvent(false);
    setShowManageSociety(false);
    setShowAddSociety(true);
    setShowAdmin(false);
  }

  function handleManageSocietyItem() {
    setShowAddEvent(false);
    setShowManageEvent(false);
    setShowAddSociety(false);
    setShowManageSociety(true);
    setShowAdmin(false);
  }

  // Handle Event Views
  function handleAddEventItem() {
    setShowAddSociety(false);
    setShowManageSociety(false);
    setShowManageEvent(false);
    setShowAddEvent(true);
    setShowAdmin(false);
  }

  function handleManageEventItem() {
    setShowAddSociety(false);
    setShowManageSociety(false);
    setShowAddEvent(false);
    setShowManageEvent(true);
    setShowAdmin(false);
  }

  return (
    <div className="sidebar-container">
      <Sidebar backgroundColor={"#1D1B5D"} width={"20vw"}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "black",
                color: "white",
              },
            },
          }}
        >
          <div className="sidebarTitle">Society & Event Manager</div>
          
          {/* Societies Menu */}
          <MenuItem onClick={handleAddSocietyItem} className="menuItem">
            Add Society
          </MenuItem>
          <MenuItem onClick={handleManageSocietyItem} className="menuItem">
            Manage Societies
          </MenuItem>
          
          {/* Events Menu */}
          <MenuItem onClick={handleAddEventItem} className="menuItem">
            Add Event
          </MenuItem>
          <MenuItem onClick={handleManageEventItem} className="menuItem">
            Manage Events
          </MenuItem>
        </Menu>
      </Sidebar>
      
      <div style={{ width: "80vw", height: "100vh", overflowY: "scroll" }}>
        {showAdmin && (
          <div>
            <h2>Welcome to the Dashboard</h2>
            <p>Select an option from the sidebar.</p>
          </div>
        )}

        {/* Render Society Components */}
        {showAddSociety && <AddSociety />}
        {showManageSociety && <ManageSocieties />}

        {/* Render Event Components */}
        {showAddEvent && <AddEvent />}
        {showManageEvent && <ManageEvents />}
      </div>
    </div>
  );
}

export default AdminDashboard;
