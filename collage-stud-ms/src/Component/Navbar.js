import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AdminDashboard from './AdminDashboard';

const Navbar = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const handleLoginClick = () => {
    
    handleLogin();
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BROKER APP
        </Typography>
        {isLoggedIn ? (
          <><AdminDashboard />
          <Button color="inherit" component={Link} to="/" onClick={handleLogoutClick}>
            Logout
          </Button></>
        ) : (
          <><Button color="inherit" component={Link} to="/admin" onClick={handleLoginClick}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/Login">
                Sign in
              </Button></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
