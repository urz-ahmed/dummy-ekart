import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart';
const ProtectedRoute = ({ element, isAuthenticated }) => (
  isAuthenticated ? element : <Navigate to="/login" />
);

const App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = newToken => {
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={<Home handleLogout={handleLogout}/>}
              isAuthenticated={!!token}
            />
          }
        />
        <Route
          path="/login"
          element={
            token ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute
              element={<Cart />}
              isAuthenticated={!!token}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
