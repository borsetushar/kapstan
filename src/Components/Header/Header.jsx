import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, MenuItem, Menu, Box } from '@mui/material';
import { BiChevronDown } from 'react-icons/bi';
import Application from '../../Applications/Tic-tac-toe/Application/Application';
import Application2 from '../../Applications/Sudoku/Application2/Application2';
import Application3 from '../../Applications/chess/Application3/Application3';

const Header = () => {
    const [newsAnchorEl, setNewsAnchorEl] = useState(null);
    const [johnDoeAnchorEl, setJohnDoeAnchorEl] = useState(null);
    const [selectedApp, setSelectedApp] = useState(() => {
        const storedApp = localStorage.getItem('selectedApp');
        return storedApp || 'tic-tac-toe'; // Default to tic-tac-toe if no value found in local storage
    });

    const handleNewsClick = (event) => {
        setNewsAnchorEl(event.currentTarget);
    };

    const handleNewsClose = () => {
        setNewsAnchorEl(null);
    };

    const handleJohnDoeClick = (event) => {
        setJohnDoeAnchorEl(event.currentTarget);
    };

    const handleJohnDoeClose = () => {
        setJohnDoeAnchorEl(null);
    };

    const handleAppSelect = (appName) => {
        setSelectedApp(appName);
        localStorage.setItem('selectedApp', appName); // Store the selected application in local storage
        handleNewsClose(); // Close the menu after selecting an application
    };

    return (
        <Box sx={{ flexGrow: 1, padding: '1%' }}>
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <div>
                        <div style={{ color: 'black', marginRight: '34px' }}>Applications</div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ mr: 2, cursor: 'pointer', color: 'black' }}
                            onClick={handleNewsClick}
                        >
                            {selectedApp} <BiChevronDown />
                        </Typography>
                        <Menu
                            anchorEl={newsAnchorEl}
                            open={Boolean(newsAnchorEl)}
                            onClose={handleNewsClose}
                        >
                            <MenuItem onClick={() => handleAppSelect('tic-tac-toe')}>Tic-tac-toe</MenuItem>
                            <MenuItem onClick={() => handleAppSelect('sudoku')}>Sudoku</MenuItem>
                            <MenuItem onClick={() => handleAppSelect('chess')}>Chess</MenuItem>
                        </Menu>
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    <Avatar sx={{ bgcolor: '#FF5733', marginLeft: 2 }}><Typography sx={{ color: 'white' }}>JD</Typography></Avatar>
                    <Typography variant="body1" sx={{ padding: '1%', color: 'black', cursor: 'pointer' }} onClick={handleJohnDoeClick}>
                        John Doe <BiChevronDown />
                    </Typography>
                    <Menu
                        anchorEl={johnDoeAnchorEl}
                        open={Boolean(johnDoeAnchorEl)}
                        onClose={handleJohnDoeClose}
                    >
                        <MenuItem>Account</MenuItem>
                        <MenuItem>Log Out</MenuItem>
                        <MenuItem>Setting</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Conditionally render the selected application */}
            {selectedApp === 'tic-tac-toe' && <Application />}
            {selectedApp === 'sudoku' && <Application2 />}
            {selectedApp === 'chess' && <Application3 />}
        </Box>
    );
};

export default Header;
