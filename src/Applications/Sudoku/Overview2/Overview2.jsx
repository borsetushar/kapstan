import { Grid } from '@mui/material'
import React from 'react'
import ServiceInfo2 from '../ServiceInfo2/ServiceInfo2.jsx';
import SystemAndEvent2 from '../System&Event/SystemAndEvent2.jsx';

const Overview2 = () => {
  return (
    <Grid container spacing={2} style={{padding:'2%'}}>
    <Grid item xs={12}>
      <ServiceInfo2 />
    </Grid>
    <Grid item xs={12}>
      <SystemAndEvent2 />
    </Grid>
  </Grid>
  )
}

export default Overview2;