import React from 'react';
import { Grid } from '@mui/material';
import Navbar2 from '../Navbar2/Navbar2';

const Application2 = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Navbar2 />
      </Grid>
    </Grid>
  );
}

export default Application2;
