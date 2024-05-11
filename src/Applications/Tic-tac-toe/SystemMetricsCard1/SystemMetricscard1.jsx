import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Typography } from '@mui/material';
import systemMetricsData from './systemMetricsdata1'; // Importing system metrics data from external file

const SystemMetricscard1 = () => {
  const [selectedOption, setSelectedOption] = useState('CPU');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const hours = date.getHours().toString().padStart(2, '0'); // Get hours (with leading zero if necessary)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes (with leading zero if necessary)
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds (with leading zero if necessary)
    return `${hours}:${minutes}:${seconds}`; // Format time as HH:MM:SS
  };

  const getChartData = () => {
    if (selectedOption === 'CPU') {
      return [{
        name: 'CPU Usage',
        data: systemMetricsData.map(item => parseFloat(item.memoryUtilization)) // Map memoryUtilization values for CPU data
      }];
    } else if (selectedOption === 'Memory') {
      return [
        {
          name: 'Series 1',
          data: systemMetricsData.map(item => parseFloat(item.memoryUtilization)), // Map memoryUtilization values for Series 1
          color: 'green' // Set color for Series 1
        },
        {
          name: 'Series 2',
          data: systemMetricsData.map(item => parseFloat(item.memoryUtilization) * 2), // Example: Map memoryUtilization values multiplied by 2 for Series 2
          color: 'pink' // Set color for Series 2
        },
        {
          name: 'Series 3',
          data: systemMetricsData.map(item => parseFloat(item.memoryUtilization) + 2), // Example: Map memoryUtilization values multiplied by 2 for Series 2
          color: 'black' // Set color for Series 2
        },
        {
          name: 'Series 4',
          data: systemMetricsData.map(item => parseFloat(item.memoryUtilization) * 3), // Example: Map memoryUtilization values multiplied by 2 for Series 2
          color: 'red' // Set color for Series 2
        },
        {
          name: 'Series 5',
          data: systemMetricsData.map(item => parseFloat(item.memoryUtilization) * 4), // Example: Map memoryUtilization values multiplied by 2 for Series 2
          color: 'yellow' // Set color for Series 2
        },
        // Add more series with different data mappings here
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
      categories: systemMetricsData.map(item => formatTimestamp(item.timestamp)), // Map formatted timestamps for x-axis categories
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
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',backgroundColor:'white' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'start' }}>
          System Metrics
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
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

export default SystemMetricscard1;
