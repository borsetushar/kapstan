import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const EventHistoryCard = () => {
  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', padding: '20px' }}>
      <Typography variant="h6" gutterBottom sx={{textAlign:'start'}}>
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
            <TableRow>
              <TableCell>Deploy</TableCell>
              <TableCell>1.2.1</TableCell>
             <TableCell>
                <Button startIcon={<CheckCircleOutlineIcon />} sx={{ bgcolor: 'transparent', textTransform: 'none' }}>Success</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Deploy</TableCell>
              <TableCell>1.2.1</TableCell>
             <TableCell>
                <Button startIcon={<CheckCircleOutlineIcon />} sx={{ bgcolor: 'transparent', textTransform: 'none' }}>Success</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Uninstall</TableCell>
              <TableCell>1.2.0</TableCell>
              <TableCell>
                <Button startIcon={<CheckCircleOutlineIcon />} sx={{ bgcolor: 'transparent', textTransform: 'none' }}>Success</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Deploy</TableCell>
              <TableCell> 1.2.0</TableCell>
              <TableCell>
                <Button startIcon={<CheckCircleOutlineIcon />} sx={{ bgcolor: 'transparent', textTransform: 'none' }}>Success</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EventHistoryCard;
