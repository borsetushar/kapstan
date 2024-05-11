import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SystemMetricscard2 from '../SystemMetricsCard2/SystemMetricsCard2';
import EventHistory2 from '../EventHistory2/EventHistory2';

const SystemAndEvent2 = () => {
  return (

    <Grid container spacing={2} >
      <Grid item xs={6} >
        <SystemMetricscard2/>
      </Grid>
      <Grid item xs={6}>
        <EventHistory2 />
      </Grid>
    </Grid>
  );
};

export default SystemAndEvent2;
