import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/PlaylistDetailPage.css';

const PlaylistDetailPage = () => {
  const { id } = useParams();
  
  // Mock data for UI demonstration
  const playlist = {
    id: id,
    name: 'Weekend Vibes',
    creator: 'You',
    songs: 12,
    duration: '45 min',
    collaborators: 2,
    tracks: [
      { id: 1, title: 'Summertime Magic', artist: 'Childish Gambino', duration: '3:32' },
      { id: 2, title: 'Feel Good Inc', artist: 'Gorillaz', duration: '3:41' },
      { id: 3, title: 'Redbone', artist: 'Childish Gambino', duration: '5:27' },
      { id: 4, title: 'Get Lucky', artist: 'Daft Punk, Pharrell Williams', duration: '4:08' },
      { id: 5, title: 'Uptown Funk', artist: 'Mark Ronson, Bruno Mars', duration: '4:30' },
      { id: 6, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' }
    ]
  };

  return (
    <div className="playlist-detail-page">
      <header className="playlist-header">
        <Link to="/" className="back-button">
          ←
        </Link>
        <h1 className="header-title">Playlist</h1>
        <div className="header-actions">
          <Link to={`/playlist/${id}/edit`} className="edit-button">
            Edit
          </Link>
        </div>
      </header>

      <div className="playlist-banner">
        <div className="playlist-image-large"></div>
        <div className="playlist-info-large">
          <h1 className="playlist-title">{playlist.name}</h1>
          <p className="playlist-meta">
            Created by {playlist.creator} • {playlist.songs} songs • {playlist.duration}
          </p>
          <div className="playlist-actions">
            <button className="play-button">Play</button>
            <Link to={`/playlist/${id}/collaborators`} className="collaborators-button">
              Collaborators ({playlist.collaborators})
            </Link>
          </div>
        </div>
      </div>

      <div className="tracks-container">
        <div className="tracks-header">
          <span className="track-number">#</span>
          <span className="track-title">Title</span>
          <span className="track-duration">Duration</span>
        </div>
        
        <div className="tracks-list">
          {playlist.tracks.map((track, index) => (
            <div className="track-item" key={track.id}>
              <span className="track-number">{index + 1}</span>
              <div className="track-info">
                <div className="track-title">{track.title}</div>
                <div className="track-artist">{track.artist}</div>
              </div>
              <span className="track-duration">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>

      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
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

export default PlaylistDetailPage; 