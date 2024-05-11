import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Avatar, Box, Button } from '@mui/material';
import { FaChartLine, FaDatabase, FaExclamationTriangle, FaHistory,FaCheck  } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";



const Navbar = () => {

    const NavItem = ({ icon, text }) => {
        return (
          <Typography
            variant="body1"
            sx={{ padding: '1%', color: 'black', cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '20px' }}
          >
            {icon}
            <span style={{ marginLeft: '5px' }}>{text}</span>
          </Typography>
        );
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
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
                    border: '2px solid #4CAF50', // Green color for the outline
                    borderRadius: '10px', // Round shape
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
            <NavItem icon={<FaChartLine />} text="Overview" />
            <NavItem icon={<FaDatabase />} text="Environment Variables" />
            <NavItem icon={<FaExclamationTriangle />} text="Alerts" />
            <NavItem icon={<FaHistory />} text="Event History" />
          </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar