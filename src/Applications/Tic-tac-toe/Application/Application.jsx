import React from 'react';
import { Grid } from '@mui/material';
import Navbar1 from '../Navbar1/Navbar1';
import ServiceInfoCard1 from '../ServiceInfo1/ServideInfoCard1';
import SystemAndEvent from '../System&Event/SystemAndEvent';

const Application = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Navbar1 />
      </Grid>
    </Grid>
  );
}

export default Application;
