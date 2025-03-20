# LetsJam PWA - Setup Guide

This guide provides step-by-step instructions for setting up the LetsJam Progressive Web App project.

## Prerequisites

- Node.js (v14 or newer)
- npm (v6 or newer) or yarn
- Firebase account
- Spotify Developer account
- Apple Developer account (for Apple Music API)

## Initial Project Setup

### 1. Create React App with PWA Template

```bash
# Using npm
npx create-react-app letsjam-pwa --template cra-template-pwa

# Or using yarn
yarn create react-app letsjam-pwa --template cra-template-pwa

# Navigate to project folder
cd letsjam-pwa
```

### 2. Add Essential Dependencies

```bash
# Using npm
npm install react-router-dom firebase react-query @chakra-ui/react @emotion/react @emotion/styled framer-motion tailwindcss postcss autoprefixer axios formik yup localforage

# Or using yarn
yarn add react-router-dom firebase react-query @chakra-ui/react @emotion/react @emotion/styled framer-motion tailwindcss postcss autoprefixer axios formik yup localforage
```

### 3. Add Development Dependencies

```bash
# Using npm
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event prettier eslint-config-prettier eslint-plugin-prettier

# Or using yarn
yarn add --dev @testing-library/react @testing-library/jest-dom @testing-library/user-event prettier eslint-config-prettier eslint-plugin-prettier
```

### 4. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

Update the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1E40AF',
        background: '#F9FAFB',
        text: {
          dark: '#1F2937',
          light: '#6B7280',
        },
        accent: '#DBEAFE',
      },
    },
  },
  plugins: [],
}
```

Create a `src/styles/global.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles here */
body {
  @apply bg-background text-text-dark;
}
```

Update `src/index.js` to import the global CSS:

```javascript
import './styles/global.css';
```

### 5. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project for "LetsJam"
3. Set up Authentication (Email/Password and Google)
4. Create Firestore Database
5. Set up Firebase Hosting

Install Firebase CLI:

```bash
npm install -g firebase-tools
```

Initialize Firebase in your project:

```bash
firebase login
firebase init
```

During initialization, select:
- Firestore
- Authentication
- Hosting
- Storage
- Functions (optional)

Create a Firebase configuration file (`src/api/firebase.js`):

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
```

### 6. Set Up Environment Variables

Create `.env` file:

```
# Firebase
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Spotify
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/auth/spotify/callback

# Apple Music
REACT_APP_APPLE_DEVELOPER_TOKEN=your_apple_developer_token
```

Create `.env.example` as a template, removing the actual values.

### 7. Set Up Service Worker

Review and update the default service worker configuration in `src/serviceWorkerRegistration.js` to handle:
- Caching strategies
- Offline support
- Background sync

### 8. Set Up Routing

Create a `src/routes.jsx` file:

```jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Import pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ConnectServices from './pages/auth/ConnectServices';
import Welcome from './pages/auth/Welcome';
import Dashboard from './pages/home/Dashboard';
import Explore from './pages/home/Explore';
import CreatePlaylist from './pages/playlist/Create';
import PlaylistDetail from './pages/playlist/Detail';
import SongSearch from './pages/playlist/SongSearch';
import ManageCollaborators from './pages/collaboration/ManageCollaborators';
import AddCollaborator from './pages/collaboration/AddCollaborator';
import EditCollaborator from './pages/collaboration/EditCollaborator';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/connect-services" element={
        <ProtectedRoute>
          <ConnectServices />
        </ProtectedRoute>
      } />
      <Route path="/welcome" element={
        <ProtectedRoute>
          <Welcome />
        </ProtectedRoute>
      } />
      
      {/* Main app routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/explore" element={
        <ProtectedRoute>
          <Explore />
        </ProtectedRoute>
      } />
      
      {/* Playlist routes */}
      <Route path="/playlist/create" element={
        <ProtectedRoute>
          <CreatePlaylist />
        </ProtectedRoute>
      } />
      <Route path="/playlist/:id" element={
        <ProtectedRoute>
          <PlaylistDetail />
        </ProtectedRoute>
      } />
      <Route path="/playlist/:id/search" element={
        <ProtectedRoute>
          <SongSearch />
        </ProtectedRoute>
      } />
      
      {/* Collaboration routes */}
      <Route path="/playlist/:id/collaborators" element={
        <ProtectedRoute>
          <ManageCollaborators />
        </ProtectedRoute>
      } />
      <Route path="/playlist/:id/collaborators/add" element={
        <ProtectedRoute>
          <AddCollaborator />
        </ProtectedRoute>
      } />
      <Route path="/playlist/:id/collaborators/:userId" element={
        <ProtectedRoute>
          <EditCollaborator />
        </ProtectedRoute>
      } />
      
      {/* Auth callbacks */}
      <Route path="/auth/spotify/callback" element={<div>Processing Spotify login...</div>} />
      <Route path="/auth/apple/callback" element={<div>Processing Apple Music login...</div>} />
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
```

### 9. Update App.js

Update `src/App.jsx`:

```jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import { PlayerProvider } from './context/PlayerContext';
import AppRoutes from './routes';

// Create a query client for React Query
const queryClient = new QueryClient();

// Extend the Chakra UI theme
const theme = extendTheme({
  colors: {
    primary: {
      500: '#3B82F6', // Primary blue
    },
    secondary: {
      500: '#1E40AF', // Secondary blue
    },
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <PlayerProvider>
            <Router>
              <AppRoutes />
            </Router>
          </PlayerProvider>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
```

### 10. Update Web App Manifest

Edit `public/manifest.json`:

```json
{
  "short_name": "LetsJam",
  "name": "LetsJam - Listen. Together.",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "icons/icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "icons/icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#3B82F6",
  "background_color": "#F9FAFB",
  "orientation": "portrait",
  "categories": ["music", "social", "entertainment"],
  "description": "Create and share music playlists with friends across different streaming platforms."
}
```

## Setting Up Core Features

### 1. Authentication Context

Create `src/context/AuthContext.jsx`:

```jsx
import React, { createContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../api/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get additional user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          const userData = userDoc.data();
          
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            ...userData
          });
        } catch (err) {
          console.error('Error getting user data:', err);
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
          });
        }
      } else {
        setUser(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signUp = async (email, password, username) => {
    try {
      setError(null);
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        username,
        email,
        connectedServices: {
          spotify: false,
          appleMusic: false
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      return firebaseUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const connectService = async (service, connected = true) => {
    if (!user) return;
    
    try {
      await setDoc(doc(db, 'users', user.uid), {
        connectedServices: {
          ...user.connectedServices,
          [service]: connected
        },
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      setUser(prev => ({
        ...prev,
        connectedServices: {
          ...prev.connectedServices,
          [service]: connected
        }
      }));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    connectService
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

### 2. Custom Authentication Hook

Create `src/hooks/useAuth.js`:

```javascript
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
```

### 3. Create Basic API Services

Create `src/api/spotify.js`:

```javascript
// Basic Spotify Web API integration
// Will need to expand based on specific requirements
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

export const getAuthUrl = () => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-modify-private'
  ];

  return 'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' + encodeURIComponent(CLIENT_ID) +
    '&scope=' + encodeURIComponent(scopes.join(' ')) +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);
};

// This is a basic example - in a real app, you'd want to use a library like spotify-web-api-js
export const searchTracks = async (query, token) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=20`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    return data.tracks.items;
  } catch (error) {
    console.error('Error searching Spotify tracks:', error);
    throw error;
  }
};

// Add more Spotify API functions as needed
```

Create `src/api/appleMusic.js`:

```javascript
// This is a placeholder for Apple Music API integration
// For actual implementation, you'll need MusicKit JS

export const initializeAppleMusic = () => {
  return new Promise((resolve, reject) => {
    document.addEventListener('musickitloaded', () => {
      // Configure MusicKit JS
      try {
        const token = process.env.REACT_APP_APPLE_DEVELOPER_TOKEN;
        window.MusicKit.configure({
          developerToken: token,
          app: {
            name: 'LetsJam',
            build: '1.0.0'
          }
        });
        resolve(window.MusicKit.getInstance());
      } catch (error) {
        reject(error);
      }
    });
    
    // Load MusicKit JS
    const script = document.createElement('script');
    script.src = 'https://js-cdn.music.apple.com/musickit/v1/musickit.js';
    document.body.appendChild(script);
  });
};

export const getAuthStatus = async (musicKit) => {
  return musicKit.isAuthorized;
};

export const authorize = async (musicKit) => {
  try {
    await musicKit.authorize();
    return true;
  } catch (error) {
    console.error('Error authorizing Apple Music:', error);
    return false;
  }
};

// Add more Apple Music API functions as needed
```

## Next Steps

After completing the initial setup, you can:

1. Implement the UI components for the authentication screens
2. Create the playlist management functionality
3. Implement the collaboration features
4. Add music service integration
5. Enhance the PWA capabilities

Remember to test on different devices and browsers to ensure the PWA functions correctly across various platforms.

## Deployment

To deploy the PWA to Firebase Hosting:

```bash
npm run build
firebase deploy --only hosting
```

## Additional Resources

- [Create React App PWA Template](https://create-react-app.dev/docs/making-a-progressive-web-app/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [MusicKit JS Documentation](https://developer.apple.com/documentation/musickitjs) 