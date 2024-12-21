import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import React, { useState } from 'react';
import AddSociety from './AddSociety'; // Updated to handle societies
import ManageSocieties from './ManageSocieties'; // A new component to manage societies

function AdminDashboard() {
  const [showAdd, setShowAdd] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [showAdmin, setShowAdmin] = useState(true);

  function handleAddItem() {
    setShowManage(false);
    setShowAdd(true);
    setShowAdmin(false);
  }

  function handleManageItem() {
    setShowAdd(false);
    setShowManage(true);
    setShowAdmin(false);
  }

  return (
    <div className="sidebar-container">
      <Sidebar backgroundColor={"#1D1B5D"} width={"20vw"}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: 'black',
                color: 'white',
              },
            },
          }}
        >
          <div className="sidebarTitle">Society Manager</div>
          <MenuItem onClick={handleAddItem} className="menuItem">
            Add Society
          </MenuItem>
          <MenuItem onClick={handleManageItem} className="menuItem">
            Manage Societies
          </MenuItem>
        </Menu>
      </Sidebar>
      <div style={{ width: "80vw", height: "100vh", overflowY: "scroll" }}>
        {showAdmin && <ManageSocieties />} {/* Display the manage societies component */}
        {showAdd && <AddSociety />} {/* Display the add society form */}
        {showManage && <ManageSocieties />} {/* Manage societies component again */}
      </div>
    </div>
  );
}

export default AdminDashboard;
