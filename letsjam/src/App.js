import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Import pages
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PlaylistDetailPage from './pages/PlaylistDetailPage';
import CollaboratorsPage from './pages/CollaboratorsPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import ProfilePage from './pages/ProfilePage';

// Import components
import ProtectedRoute from './components/ProtectedRoute';

// Auth route wrapper to redirect authenticated users away from auth pages
const AuthRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (user) {
    return <Navigate to="/home" replace />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      
      {/* Auth routes - redirect to home if already logged in */}
      <Route 
        path="/login" 
        element={
          <AuthRoute>
            <LoginPage />
          </AuthRoute>
        } 
      />
      <Route 
        path="/register" 
        element={
          <AuthRoute>
            <RegisterPage />
          </AuthRoute>
        } 
      />
      
      {/* Protected routes - redirect to login if not authenticated */}
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/playlist/:id" 
        element={
          <ProtectedRoute>
            <PlaylistDetailPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/playlist/:id/collaborators" 
        element={
          <ProtectedRoute>
            <CollaboratorsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/create-playlist" 
        element={
          <ProtectedRoute>
            <CreatePlaylistPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
