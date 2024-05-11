import { Grid } from '@mui/material'
import React from 'react'
import ServiceInfoCard1 from '../ServiceInfo1/ServideInfoCard1'
import SystemAndEvent from '../System&Event/SystemAndEvent'

const Overview1 = () => {
  return (
    <Grid container spacing={2} style={{padding:'2%'}}>
    <Grid item xs={12}>
      <ServiceInfoCard1 />
    </Grid>
    <Grid item xs={12}>
      <SystemAndEvent />
    </Grid>
  </Grid>
  )
}

export default Overview1