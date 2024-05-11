import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import { FaChartLine, FaDatabase, FaExclamationTriangle, FaHistory } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import Overview1 from '../Overview1/Overview1';
import EnvironmentVariables from '../EnvironmentVariables/EnvironmentVariables';
import EventHistory1 from '../EventHistory1/EventHistory1';

const Navbar1 = () => {
  // Load active component state from local storage or use 'overview' as default
  const [activeComponent, setActiveComponent] = useState(() => {
    const storedComponent = localStorage.getItem('activeComponent');
    return storedComponent || 'overview';
  });

  const NavItem = ({ icon, text, component }) => {
    const isActive = component === activeComponent;

    return (
      <Typography
        variant="body1"
        sx={{
          padding: '1%',
          color: isActive ? 'black' : 'gray',
          fontWeight: isActive ? 'bold' : 'normal',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          marginRight: '20px'
        }}
        onClick={() => {
          setActiveComponent(component);
          localStorage.setItem('activeComponent', component); // Update local storage
        }}
      >
        {icon}
        <span style={{ marginLeft: '5px' }}>{text}</span>
      </Typography>
    );
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'overview':
        return <Overview1 />;
      case 'environment':
        return <EnvironmentVariables />;
      case 'history':
        return <EventHistory1 />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h5" component="div" sx={{ mr: 2, cursor: 'pointer', color: 'black',fontWeight:'bold' }}>
          tic-tac-toe
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <div>
            <Typography variant="body1" sx={{padding:'1%',color:'black', cursor: 'pointer'}}>
             <Button
                variant="outlined"
                sx={{
                    color: ' #4CAF50',
                    border: '2px solid #4CAF50',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                }}
             >
                <GoDotFill style={{marginBottom:'2px', marginRight:'3px'}} />
                <span style={{ backgroundColor: 'transparent', marginRight:'9px' }}>Deployed</span>
            </Button>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', marginLeft: '39px' }}>
        <NavItem icon={<FaChartLine />} text="Overview" component="overview" />
        <NavItem icon={<FaDatabase />} text="Environment Variables" component="environment" />
        <NavItem icon={<FaExclamationTriangle />} text="Alerts" />
        <NavItem icon={<FaHistory />} text="Event History" component="history" />
      </Box>
      {renderActiveComponent()}
    </Box>
  );
};

export default Navbar1;
