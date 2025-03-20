import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PlaylistDetailPage from './pages/PlaylistDetailPage';
import CollaboratorsPage from './pages/CollaboratorsPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
        <Route path="/playlist/:id/collaborators" element={<CollaboratorsPage />} />
        <Route path="/create-playlist" element={<CreatePlaylistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
