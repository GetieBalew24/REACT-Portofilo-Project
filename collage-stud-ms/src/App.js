import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './Component/Navbar';
import GuestHomePage from './Component/GuestHomePage';
import AdminDashboard from './Component/AdminDashboard';

const theme = createTheme();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}  handleLogin={handleLogin}/>
        <Routes>
          {isLoggedIn ? (
          <Route path="/admin" Component={AdminDashboard }  exact />
          ):(
          <Route path="/" Component={GuestHomePage} exact /> 
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
