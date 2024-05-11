import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { FaLink, FaMoneyBill, FaShieldAlt, FaUserCog, FaFileAlt } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';
import { PiCircleDashed } from 'react-icons/pi';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Sidebar = ({ onCollapse }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onCollapse(!collapsed); // Call onCollapse function with the new collapsed state
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflowY: 'hidden' }}> {/* Add overflowY: 'hidden' to prevent vertical scrolling */}
      <Drawer
        variant="permanent"
        sx={{
          width: collapsed ? '90px' : '220px',
          flexShrink: 0,
          backgroundColor: '#37146B', // Background color
          transition: 'width 0.3s ease', // Add transition effect
          '& .MuiDrawer-paper': {
            width: collapsed ? '90px' : '220px',
            backgroundColor: '#37146B', // Background color
            transition: 'width 0.3s ease', // Add transition effect
            boxSizing: 'border-box',
            color: 'white', // Text color
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'hidden', // Prevent vertical scrollbar on Drawer
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // White color with opacity
          },
        }}
      >
        <List>
          {/* Sidebar Menu */}
          <div className="px-3 flex-grow-1">
            {/* Menu Items */}
            <List>
              {/* Kapstan Section */}
              <ListItem button onClick={toggleSidebar} sx={{ justifyContent: 'flex-start' }}>
                <ListItemIcon>
                  <PiCircleDashed style={{ color: 'white', marginLeft:'-10px' }} size={40} />
                </ListItemIcon>
                <ListItemText primary="Kapstan" primaryTypographyProps={{ style: { color: 'white', marginLeft: '10px' } }} />
              </ListItem>

              {/* Application Menu Section */}
              <hr className=" my-2 border-white" />
              <ListItem button sx={{ justifyContent: 'flex-start' }}>
                <ListItemIcon>
                  <AiOutlineAppstore style={{ color: 'white' }} size={20} />
                </ListItemIcon>
                <ListItemText primary="Application" primaryTypographyProps={{ style: { color: 'white', marginLeft: '10px' } }} />
              </ListItem>

              {/* Divider */}
              <hr className="my-2 border-white" />
              <ListItem button>
                <ListItemIcon>
                  <FaLink style={{ color: 'white' }} size={20}/>
                </ListItemIcon>
                <ListItemText primary="Connections" primaryTypographyProps={{ style: { color: 'white' } }} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FaMoneyBill style={{ color: 'white' }} size={20}/>
                </ListItemIcon>
                <ListItemText primary="Cost" primaryTypographyProps={{ style: { color: 'white' } }} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FaShieldAlt style={{ color: 'white' }} size={20}/>
                </ListItemIcon>
                <ListItemText primary="Security" primaryTypographyProps={{ style: { color: 'white' } }} />
              </ListItem>
            </List>
          </div>

          {/* Divider */}
          <hr className="my-2 border-white" />

          {/* Admin and Docs */}
        </List>
        <div className="px-3">
          <List sx={{ marginTop: '180px' }}>
            <ListItem button>
              <ListItemIcon>
                <FaUserCog style={{ color: 'white' }} size={20}/>
              </ListItemIcon>
              <ListItemText primary="Admin" primaryTypographyProps={{ style: { color: 'white' } }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaFileAlt style={{ color: 'white' }} size={20}/>
              </ListItemIcon>
              <ListItemText primary="Docs" primaryTypographyProps={{ style: { color: 'white' } }} />
            </ListItem>
          </List>
        </div>
        <hr className="my-2 border-white" />
        {/* Arrow to Collapse Sidebar */}
        <div className="mt-auto px-3">
          <IconButton onClick={toggleSidebar} >
            {collapsed ? <MdKeyboardDoubleArrowRight size={20} style={{ color: 'white' }} /> : <MdKeyboardDoubleArrowLeft size={20} style={{ color: 'white' }} />}
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
