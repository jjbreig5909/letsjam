import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  // Mock data for UI demonstration
  const mockPlaylists = [
    { id: 1, name: 'Weekend Vibes', songs: 12, duration: '45 min' },
    { id: 2, name: 'Workout Mix', songs: 8, duration: '32 min' },
    { id: 3, name: 'Chill Evening', songs: 15, duration: '58 min' }
  ];

  return (
    <div className="home-page">
      <header className="app-header">
        <h1 className="app-title">LetsJam</h1>
        <div className="user-avatar">
          <Link to="/profile">U</Link>
        </div>
      </header>

      <main className="home-content">
        <section className="playlists-section">
          <h2 className="section-title">My Playlists</h2>
          
          <Link to="/create-playlist" className="create-playlist-card">
            <div className="create-icon">+</div>
            <div className="create-text">
              <h3>Create New</h3>
              <p>Start a new playlist</p>
            </div>
          </Link>

          <div className="playlists-grid">
            {mockPlaylists.map(playlist => (
              <Link to={`/playlist/${playlist.id}`} key={playlist.id} className="playlist-card">
                <div className="playlist-image"></div>
                <div className="playlist-info">
                  <h3>{playlist.name}</h3>
                  <p>{playlist.songs} songs • {playlist.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="collaborative-section">
          <h2 className="section-title">Collaborative Playlists</h2>
          <div className="playlists-grid">
            <Link to="/playlist/4" className="playlist-card">
              <div className="playlist-image collab"></div>
              <div className="playlist-info">
                <h3>Road Trip Mix</h3>
                <p>Created by Sarah • 18 songs</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <Link to="/" className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/search" className="nav-item">
          <span className="nav-icon">🔍</span>
          <span className="nav-text">Search</span>
        </Link>
        <Link to="/notifications" className="nav-item">
          <span className="nav-icon">🔔</span>
          <span className="nav-text">Activity</span>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage; 