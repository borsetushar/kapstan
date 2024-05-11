import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Drawer, Button, TextField } from '@mui/material';
import { IoAddOutline } from "react-icons/io5";
import { LiaUploadSolid } from "react-icons/lia";
import { FaTrash } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';

const UploadDrawer = ({ open, onClose, onAddFile }) => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleAddFile = () => {
    onAddFile(files);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 696, height: 900, padding: '20px' }}>
        <Box {...getRootProps()} sx={{ border: '2px dashed #aaa', padding: '20px', backgroundColor: isDragActive ? '#eee' : '#fff' }}>
          <input {...getInputProps()} />
          <Box sx={{ backgroundColor: '#f0f0f0', padding: '20px', marginBottom: '20px', textAlign: 'center' }}>
            <LiaUploadSolid size={50} />
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              Click or drag a file here to upload
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Upload a .env file
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '12px' }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleAddFile} variant="contained" color="primary">Add</Button>
        </Box>
      </Box>
    </Drawer>
  );
};

const AddVariablesDrawer = ({ open, onClose, onAddVariables }) => {
  const [variableRows, setVariableRows] = useState([{ name: '', value: '' }]);

  const handleAddRow = () => {
    setVariableRows([...variableRows, { name: '', value: '' }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...variableRows];
    updatedRows.splice(index, 1);
    setVariableRows(updatedRows);
  };

  const handleNameChange = (event, index) => {
    const updatedRows = [...variableRows];
    updatedRows[index].name = event.target.value;
    setVariableRows(updatedRows);
  };

  const handleValueChange = (event, index) => {
    const updatedRows = [...variableRows];
    updatedRows[index].value = event.target.value;
    setVariableRows(updatedRows);
  };

  const handleAddVariables = () => {
    onAddVariables(variableRows);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 696, padding: '20px' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'start', marginBottom: '20px' }}>
          Add Environment Variables
        </Typography>
        {variableRows.map((row, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <Typography>Name:</Typography>
            <TextField value={row.name} onChange={(event) => handleNameChange(event, index)} size='small' />
            <Typography>Value:</Typography>
            <TextField value={row.value} onChange={(event) => handleValueChange(event, index)} size='small' />
            <IconButton onClick={() => handleDeleteRow(index)} aria-label="delete">
              <FaTrash />
            </IconButton>
          </Box>
        ))}
        <Button onClick={handleAddRow} variant="outlined" sx={{ marginBottom: '20px' }}>Add Row</Button>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ marginRight: '10px' }}>Cancel</Button>
          <Button onClick={handleAddVariables} variant="contained" color="primary">Add</Button>
        </Box>
      </Box>
    </Drawer>
  );
};

const EnvironmentVariables = () => {
  const [uploadDrawerOpen, setUploadDrawerOpen] = useState(false);
  const [addVariablesDrawerOpen, setAddVariablesDrawerOpen] = useState(false);
  const [environmentVariables, setEnvironmentVariables] = useState(() => {
    const storedVariables = localStorage.getItem('environmentVariables');
    return storedVariables ? JSON.parse(storedVariables) : [];
  });

  const handleAddFile = (files) => {
    setEnvironmentVariables(files);
    localStorage.setItem('environmentVariables', JSON.stringify(files));
    setUploadDrawerOpen(false);
  };

  const handleAddVariables = (variables) => {
    setEnvironmentVariables(variables);
    localStorage.setItem('environmentVariables', JSON.stringify(variables));
    setAddVariablesDrawerOpen(false);
  };

  return (
    <div style={{padding:'2%'}}>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', padding: '20px', height: '363px',backgroundColor:'white'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ textAlign: 'start' }}>
            Environment Variables
          </Typography>
          <Box>
            <IconButton color="primary" aria-label="add" onClick={() => setUploadDrawerOpen(true)}>
              <LiaUploadSolid size={30} />
            </IconButton>
            <IconButton color="primary" aria-label="add" onClick={() => setAddVariablesDrawerOpen(true)}>
              <IoAddOutline size={30} />
            </IconButton>
          </Box>
        </Box>

        {/* Show the upload drawer */}
        <UploadDrawer open={uploadDrawerOpen} onClose={() => setUploadDrawerOpen(false)} onAddFile={handleAddFile} />

        {/* Show the add variables drawer */}
        <AddVariablesDrawer open={addVariablesDrawerOpen} onClose={() => setAddVariablesDrawerOpen(false)} onAddVariables={handleAddVariables} />

        <Box sx={{ textAlign: 'start' }}>
          {environmentVariables.length === 0 ? (
            <Typography variant="body1">
              No Environment variables created
            </Typography>
          ) : (
            environmentVariables.map((variable, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={variable.name}
                  onChange={(e) => {
                    const updatedVariables = [...environmentVariables];
                    updatedVariables[index].name = e.target.value;
                    setEnvironmentVariables(updatedVariables);
                    localStorage.setItem('environmentVariables', JSON.stringify(updatedVariables));
                  }}
                />
                <Typography variant="body1" sx={{ marginX: '10px' }}>:</Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  value={variable.value}
                  onChange={(e) => {
                    const updatedVariables = [...environmentVariables];
                    updatedVariables[index].value = e.target.value;
                    setEnvironmentVariables(updatedVariables);
                    localStorage.setItem('environmentVariables', JSON.stringify(updatedVariables));
                  }}
                />
                <IconButton onClick={() => {
                  const updatedVariables = [...environmentVariables];
                  updatedVariables.splice(index, 1);
                  setEnvironmentVariables(updatedVariables);
                  localStorage.setItem('environmentVariables', JSON.stringify(updatedVariables));
                }} aria-label="delete">
                  <FaTrash />
                </IconButton>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </div>
  );
};

export default EnvironmentVariables;
