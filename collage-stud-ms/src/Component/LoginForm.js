import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';

// Child component
const LoginForm = ({ isLoggedIn, handleLogin, handleLogout}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation here
    if (username === 'admin' && password === 'password') {
      handleLogin(true);
    } else {
      handleLogin(false);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {isLoggedIn ? (
        <AdminDashboard handleLogout={handleLogout}/>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};
export default LoginForm;