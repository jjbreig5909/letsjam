import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect after 3 seconds for demo purposes
    const timer = setTimeout(() => {
      navigate('/login');
    }, 10);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo-circle">
          <h1 className="logo-text">LJ</h1>
        </div>
        <h1 className="app-name">LetsJam</h1>
        <p className="tagline">Listen. Together.</p>
      </div>
    </div>
  );
};

export default SplashScreen; 