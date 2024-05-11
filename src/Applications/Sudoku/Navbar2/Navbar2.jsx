import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import { FaChartLine, FaDatabase, FaExclamationTriangle, FaHistory } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import Overview2 from '../Overview2/Overview2';
import EnvironmentVariables2 from '../EnviromentVariables2/EnvironmentVariables2';
import EventHistory2 from '../EventHistory2/EventHistory2';

const Navbar2 = () => {
  const [activeComponent, setActiveComponent] = useState(() => {
    const storedComponent = localStorage.getItem('activeComponent2');
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
          localStorage.setItem('activeComponent2', component);
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
        return <Overview2 />;
      case 'environment':
        return <EnvironmentVariables2 />;
      case 'history':
        return <EventHistory2 />;
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
          Sudoku
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
        <Box sx={{ display: 'flex',marginLeft:'39px' }}>
            <NavItem icon={<FaChartLine />} text="Overview" component="overview" />
            <NavItem icon={<FaDatabase />} text="Environment Variables" component="environment" />
            <NavItem icon={<FaExclamationTriangle />} text="Alerts" />
            <NavItem icon={<FaHistory />} text="Event History" component="history"/>
          </Box>
      </AppBar>
      {renderActiveComponent()}
    </Box>
  )
}

export default Navbar2;
