import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const AdminSidebar = ({ onMenuItemClick }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sidebar style={{ backgroundColor: '#1D1B5D' }} collapsed={collapsed}>
            <Menu iconShape="circle">
                <MenuItem onClick={() => setCollapsed(!collapsed)} style={{ color: 'white' }}>
                    Toggle Sidebar
                </MenuItem>
                <SubMenu title="Societies" style={{ color: 'white' }}>
                    <MenuItem onClick={() => onMenuItemClick('addSociety')}>Add Society</MenuItem>
                    <MenuItem onClick={() => onMenuItemClick('deleteSociety')}>Delete Society</MenuItem>
                    <MenuItem onClick={() => onMenuItemClick('updateSociety')}>Update Society</MenuItem>
                    <MenuItem onClick={() => onMenuItemClick('readSocieties')}>Read Societies</MenuItem>
                </SubMenu>
                <SubMenu title="Events" style={{ color: 'white' }}>
                    <MenuItem onClick={() => onMenuItemClick('addEvent')}>Add Event</MenuItem>
                    <MenuItem onClick={() => onMenuItemClick('deleteEvent')}>Delete Event</MenuItem>
                    <MenuItem onClick={() => onMenuItemClick('updateEvent')}>Update Event</MenuItem>
                    <MenuItem onClick={() => onMenuItemClick('readEvents')}>Read Events</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
};

export default AdminSidebar;
