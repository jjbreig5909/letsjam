import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../firebase/auth';
import '../styles/AuthPages.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await login(formData.email, formData.password);
      // Login successful
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      let errorMessage = 'An error occurred during login';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address';
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <button 
            className="auth-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          
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