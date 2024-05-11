import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { FaChevronUp,FaChevronDown } from 'react-icons/fa';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ServiceInfoCard = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseClick = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Box 
        sx={{ border: '1px solid #ccc', marginBottom: '20px',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            {/* First Row: Service Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <Typography variant="h6" sx={{ flexGrow: 1, marginRight: '87%' }}>Service Info</Typography>
                                <IconButton onClick={handleCollapseClick}>
                {collapsed ? <FaChevronDown /> : <FaChevronUp />}
                </IconButton>

            </Box>

            {/* Render second and third row if not collapsed */}
            {!collapsed && (
                <>
                    {/* Second Row: Current Version and Desired Version */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', padding: '30px' }}>
                        {/* Current Version */}
                        <Box>
                            <Typography variant="body1">Current Version</Typography>
                            {/* Yes icon and "In Sync" text */}
                            <Typography variant="body2" sx={{ textAlign: 'start' }}> <CheckCircleOutlineIcon sx={{ color: 'green' }} /> In Sync</Typography>
                        </Box>
                        {/* Desired Version */}
                        <Box sx={{ marginLeft: '20px' }}>
                            <Typography variant="body1">Desired Version</Typography>
                            {/* Desired version number */}
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>1.2.1</Typography>
                        </Box>
                    </Box>

                    {/* Third Row: Deploy Button and Last Updated */}
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '30px' }}>
                        <Button variant="contained" size="medium" sx={{ marginRight: 'auto', backgroundColor: '#37146B' }}>Deploy</Button>
                        <Typography variant="body2">Last Updated 5 hours ago.</Typography>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ServiceInfoCard;
