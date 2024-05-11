import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa'; // Importing icons from react-icons/fa
import eventHistorydata1 from './eventHistorydata1'; // Importing eventData from external file

const EventHistory1 = () => {

  // Function to format time difference into human-readable format
  const formatTimeDifference = (timestamp) => {
    const currentTime = new Date().getTime();
    const eventTime = new Date(timestamp * 1000).getTime(); // Convert timestamp to milliseconds
    const timeDifference = currentTime - eventTime;
    const minuteDifference = Math.floor(timeDifference / (1000 * 60));
    const hourDifference = Math.floor(minuteDifference / 60);
    if (hourDifference > 0) {
      return `${hourDifference} hour${hourDifference > 1 ? 's' : ''} ago`;
    } else {
      return `${minuteDifference} minute${minuteDifference > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', padding: '20px', backgroundColor:'white' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'start' }}>
        Event History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventHistorydata1.map((eventItem, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                    <div>{eventItem.event}</div>
                    <small>({formatTimeDifference(eventItem.timestamp)})</small>
                  </div>
                </TableCell>
                <TableCell>{eventItem.version}</TableCell>
                <TableCell>
                  {/* Displaying buttons based on status */}
                  {eventItem.status === 'Success' && (
                    <Button startIcon={<FaCheckCircle />} sx={{ bgcolor: 'transparent', textTransform: 'none' }}>{eventItem.status}</Button>
                  )}
                  {eventItem.status === 'Failed' && (
                    <Button startIcon={<FaTimesCircle />} color="error" sx={{ bgcolor: 'transparent', textTransform: 'none' }}>{eventItem.status}</Button>
                  )}
                  {eventItem.status === 'In Progress' && (
                    <Button startIcon={<FaHourglassHalf />} color="warning" sx={{ bgcolor: 'transparent', textTransform: 'none' }}>{eventItem.status}</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EventHistory1;
