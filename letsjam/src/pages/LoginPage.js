import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPages.css';

const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="logo-section">
          <div className="auth-logo-circle">
            <h1 className="auth-logo-text">LJ</h1>
          </div>
          <h2 className="auth-tagline">Listen. Together.</h2>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password"
            />
          </div>

          <button className="auth-button">Log In</button>
          
          <div className="auth-links">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 