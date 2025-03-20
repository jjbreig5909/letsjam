# LetsJam PWA

A Progressive Web App for creating collaborative music playlists across streaming services.

![LetsJam Logo](public/icons/icon-192x192.png)

## "Listen. Together."

LetsJam is a collaborative playlist app that connects people through music, regardless of which streaming service they use. Create playlists with friends on Spotify, Apple Music, and more!

## Features

- **Cross-Platform Collaboration**: Create and edit playlists with friends across Spotify and Apple Music
- **Real-time Updates**: See changes as they happen
- **Role-based Permissions**: Control who can modify your playlists
- **Song Matching**: Find equivalent songs across different services
- **PWA Support**: Install on any device and use offline
- **Responsive Design**: Works on mobile, tablet, and desktop

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm (v6 or newer) or yarn
- Firebase account
- Spotify Developer account
- Apple Developer account (for Apple Music API)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/letsjam-pwa.git
   cd letsjam-pwa
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your API keys
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

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

### Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password and Google)
3. Create a Firestore Database
4. Set up Firebase Hosting
5. Install Firebase CLI
   ```bash
   npm install -g firebase-tools
   ```
6. Login to Firebase and initialize the project
   ```bash
   firebase login
   firebase init
   ```

## Project Structure

```
letsjam-pwa/
├── public/               # Static files
├── src/
│   ├── api/              # API integrations (Spotify, Apple Music, Firebase)
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable UI components
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # App pages/screens
│   ├── services/         # Business logic
│   ├── styles/           # CSS styles
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Root component
│   ├── index.js          # Entry point
│   ├── routes.jsx        # Application routing
│   └── serviceWorker.js  # PWA service worker
├── .env                  # Environment variables (gitignored)
└── package.json          # Dependencies and scripts
```

## Development Workflow

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push changes to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## Deployment

Deploy to Firebase Hosting:

```bash
# Build the production version
npm run build
# or
yarn build

# Deploy to Firebase
firebase deploy --only hosting
```

## PWA Features

- **Offline Support**: Cache app shell and essential data
- **Installable**: Add to home screen on mobile and desktop
- **Push Notifications**: Get real-time updates
- **Background Sync**: Changes sync when coming online

## Technical Stack

- **Frontend**: React
- **UI Framework**: Chakra UI + Tailwind CSS
- **State Management**: React Context API + React Query
- **Routing**: React Router
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **API Integration**: Spotify Web API, Apple MusicKit JS
- **PWA Tools**: Service Workers, Workbox

## Documentation

For more detailed documentation, see the following files:
- [Project Planning Document](letsjam-planning-document.md)
- [Technical Stack Details](technical-stack.md)
- [Project Structure Recommendations](project-structure-recommendation.md)
- [PWA Setup Guide](pwa-setup-guide.md)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Apple MusicKit JS](https://developer.apple.com/documentation/musickitjs)
- [Firebase](https://firebase.google.com/)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/) 