import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { serviceInfoData } from './serviceinfo3'; // Importing the service info data

const ServiceInfo3 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        const timestamp = parseInt(serviceInfoData.updatedAt);
        const lastUpdatedDate = new Date(timestamp * 1000);
        const now = new Date();

        const timeDifference = Math.abs(now - lastUpdatedDate);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        let timeAgo;
        if (daysDifference > 0) {
            timeAgo = daysDifference === 1 ? '1 day ago' : `${daysDifference} days ago`;
        } else if (hoursDifference > 0) {
            timeAgo = hoursDifference === 1 ? '1 hour ago' : `${hoursDifference} hours ago`;
        } else {
            const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            timeAgo = minutesDifference === 1 ? '1 minute ago' : `${minutesDifference} minutes ago`;
        }

        setLastUpdated(timeAgo);
    }, []);

    const handleCollapseClick = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Box
        sx={{
            border: '1px solid #ccc',
            marginBottom: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
            maxHeight: collapsed ? '70px' : '1000px', // Adjusted maxHeight value
        }}>
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
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{serviceInfoData.desiredVersion}</Typography>
                        </Box>
                    </Box>

                    {/* Third Row: Deploy Button and Last Updated */}
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '30px' }}>
                        <Button variant="contained" size="medium" sx={{ marginRight: 'auto', backgroundColor: '#37146B' }}>Deploy</Button>
                        <Typography variant="body2">Last Updated {lastUpdated}</Typography>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ServiceInfo3;
