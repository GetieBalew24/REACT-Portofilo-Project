import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const GuestHomePage = ({ isLoggedIn, handleLogin }) => {
  return (
    <Container>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Welcome to the Guest Home Page
      </Typography>
      {!isLoggedIn && (
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      )}
    </Container>
  );
};

export default GuestHomePage;
