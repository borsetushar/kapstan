import { Grid } from '@mui/material'
import React from 'react'
import ServiceInfo3 from '../ServiceInfo3/ServiceInfo3.jsx';
import SystemAndEvent3 from '../System&Event/SystemAndEvent3';


const Overview3 = () => {
  return (
    <Grid container spacing={2} style={{padding:'2%'}}>
    <Grid item xs={12}>
      <ServiceInfo3 />
    </Grid>
    <Grid item xs={12}>
      <SystemAndEvent3 />
    </Grid>
  </Grid>
  )
}

export default Overview3;