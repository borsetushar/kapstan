import React from 'react';
import Box from '@mui/material/Box';
import EventHistory1 from '../EventHistory1/EventHistory1';
import SystemMetricscard1 from '../SystemMetricsCard1/SystemMetricscard1';
import Grid from '@mui/material/Grid';

const SystemAndEvent = () => {
  return (

    <Grid container spacing={2} >
      <Grid item xs={6} >
        <SystemMetricscard1/>
      </Grid>
      <Grid item xs={6}>
        <EventHistory1 />
      </Grid>
    </Grid>
  );
};

export default SystemAndEvent;
