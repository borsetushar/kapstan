import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Typography } from '@mui/material';

const SystemMetricsCard = () => {
  const [selectedOption, setSelectedOption] = useState('CPU');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const getChartData = () => {
    if (selectedOption === 'CPU') {
      return [{
        name: 'CPU Usage',
        data: [15, 20 , 19, 20, 23]
      }];
    } else if (selectedOption === 'Memory') {
      return [
        {
          name: 'Series 1',
          data: [15, 20 , 19, 20, 23],
          color: 'green' // Set color for Series 1
        },
        {
          name: 'Series 2',
          data: [19, 24 , 23, 24, 26],
          color: 'pink' // Set color for Series 2
        },
        {
          name: 'Series 3',
          data: [23, 28, 27, 28, 30],
          color: 'purple' // Set color for Series 3
        },
        {
          name: 'Series 4',
          data: [46, 48, 50, 50, 53],
          color: 'blue' // Set color for Series 4
        },
        {
          name: 'Series 5',
          data: [68, 69, 70, 70, 72],
          color: 'orange' // Set color for Series 5
        }
      ];
    }
  };

  const options = {
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      }
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['10:00am', '10:15am', '10:30am', '10:45am', '11:00am'],
      tickPositions: [0, 1, 2, 3, 4], // Display only specific time points
    },
    yAxis: {
        title: {
          text: 'Value'
        },
        tickPositions: [0, 10, 20, 30, 40, 50, 60, 70, 80], // Custom tick positions
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [
          {
            from: 0,
            to: 10,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
              text: '',
              style: {
                color: '#606060'
              }
            }
          },
          {
            from: 10,
            to: 40,
            color: 'rgba(0, 0, 0, 0)',
            label: {
              text: '',
              style: {
                color: '#606060'
              }
            }
          },
          {
            from: 40,
            to: 100,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
              text: '',
              style: {
                color: '#606060'
              }
            }
          }
        ]
      },
      
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        
      }
    },
    series: getChartData(),
  };

  return (
    <div>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', padding: '20px',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" gutterBottom sx={{textAlign:'start'}}>
          System Metrics
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
          <Typography
            variant="body1"
            onClick={() => handleOptionChange('CPU')}
            sx={{
              cursor: 'pointer',
              borderBottom: selectedOption === 'CPU' ? '2px solid black' : 'none'
            }}
          >
            CPU
          </Typography>
          <Typography
            variant="body1"
            onClick={() => handleOptionChange('Memory')}
            sx={{
              cursor: 'pointer',
              borderBottom: selectedOption === 'Memory' ? '2px solid black' : 'none'
            }}
          >
            Memory
          </Typography>
        </Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </div>
  );
};

export default SystemMetricsCard;
