import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SystemMetricscard3 from '../SystemMetricsCard3/SystemMetricsCard3';
import EventHistory3 from '../EventHistory3/EventHistory3';


const SystemAndEvent3 = () => {
  return (

    <Grid container spacing={2} >
      <Grid item xs={6} >
        <SystemMetricscard3/>
      </Grid>
      <Grid item xs={6}>
        <EventHistory3 />
      </Grid>
    </Grid>
  );
};

export default SystemAndEvent3;
