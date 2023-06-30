import React from 'react';
import { Container, Typography } from '@mui/material';

const GuestHomePage = ({ isLoggedIn, handleLogin }) => {
  return (
    <Container>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Welcome to the Guest Home Page
      </Typography>
    </Container>
  );
};

export default GuestHomePage;
