import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/CollaboratorsPage.css';

const CollaboratorsPage = () => {
  const { id } = useParams();
  
  // Mock data for UI demonstration
  const playlist = {
    id: id,
    name: 'Weekend Vibes',
    collaborators: [
      { id: 1, name: 'You', email: 'you@example.com', owner: true },
      { id: 2, name: 'Alex Johnson', email: 'alex@example.com', owner: false },
      { id: 3, name: 'Taylor Davis', email: 'taylor@example.com', owner: false }
    ]
  };

  return (
    <div className="collaborators-page">
      <header className="collab-header">
        <Link to={`/playlist/${id}`} className="back-button">
          ←
        </Link>
        <h1 className="header-title">Manage Collaborators</h1>
        <div className="header-actions">
          {/* Placeholder for future action buttons */}
        </div>
      </header>

      <div className="playlist-info-bar">
        <div className="playlist-thumb"></div>
        <div className="playlist-mini-info">
          <h2>{playlist.name}</h2>
          <p>{playlist.collaborators.length} collaborators</p>
        </div>
      </div>

      <div className="collab-container">
        <div className="invite-section">
          <h3>Invite Link</h3>
          <div className="invite-link-container">
            <input 
              type="text" 
              value="https://letsjam.com/join/xyz123" 
              readOnly 
              className="invite-link-input"
            />
            <button className="copy-link-button">Copy</button>
          </div>
          <p className="link-expires">Link expires in 7 days</p>
        </div>

        <div className="collaborators-list">
          <h3>Collaborators</h3>
          
          {playlist.collaborators.map(collaborator => (
            <div className="collaborator-item" key={collaborator.id}>
              <div className="collaborator-avatar">
                {collaborator.name.charAt(0)}
              </div>
              <div className="collaborator-info">
                <h4>{collaborator.name} {collaborator.owner && <span className="owner-badge">Owner</span>}</h4>
                <p>{collaborator.email}</p>
              </div>
              {!collaborator.owner && (
                <button className="remove-button">Remove</button>
              )}
            </div>
          ))}
        </div>

        <div className="permissions-section">
          <h3>Permissions</h3>
          
          <div className="permission-option">
            <label className="switch">
              <input type="checkbox" checked readOnly />
              <span className="slider round"></span>
            </label>
            <div className="permission-text">
              <h4>Allow adding songs</h4>
              <p>Collaborators can add new songs to the playlist</p>
            </div>
          </div>
          
          <div className="permission-option">
            <label className="switch">
              <input type="checkbox" readOnly />
              <span className="slider round"></span>
            </label>
            <div className="permission-text">
              <h4>Allow removing songs</h4>
              <p>Collaborators can remove songs from the playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorsPage; 