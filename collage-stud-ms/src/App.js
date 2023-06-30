import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './Component/Navbar';
import GuestHomePage from './Component/GuestHomePage';
import AdminDashboard from './Component/AdminDashboard';
import LoginForm from './Component/LoginForm';
import { AdminHome } from './Component/AdminHome';
import { About } from './Component/About';
import { ContactUs } from './Component/ContactUs';

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
          <><Route path="/admin" Component={AdminDashboard && AdminHome}  exact />
          <Route path='/adminhome' Component={AdminHome} exact />
          <Route path='/about' Component={About} exact />
          <Route path='/contact' Component={ContactUs} exact />
          </>
          ):(
          <>
          <Route path="/" Component={GuestHomePage} exact />
          <Route path='/login' Component={LoginForm} exact />
          </>

          )}
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
