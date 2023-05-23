import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { Stack } from '@mui/material';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    // You can perform further actions with the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={{ flexDirection: 'column', maxWidth:"20" }} padding={20}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <Button mx={{ marginTop: '30px' }} type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Stack>
    </form>
  );
};

export default Register;
