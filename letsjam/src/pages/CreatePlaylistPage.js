import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreatePlaylistPage.css';

const CreatePlaylistPage = () => {
  return (
    <div className="create-playlist-page">
      <header className="playlist-header">
        <Link to="/" className="back-button">
          ←
        </Link>
        <h1 className="header-title">Create Playlist</h1>
        <div className="header-actions">
          {/* Save button will be enabled when form is valid */}
          <button className="save-button" disabled>Save</button>
        </div>
      </header>

      <div className="create-form-container">
        <div className="playlist-image-upload">
          <div className="upload-placeholder">
            <span className="upload-icon">+</span>
            <span className="upload-text">Add Cover</span>
          </div>
        </div>

        <div className="playlist-form">
          <div className="form-group">
            <label htmlFor="playlist-name">Playlist Name</label>
            <input 
              type="text" 
              id="playlist-name" 
              placeholder="Enter a name for your playlist"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="playlist-description">Description (optional)</label>
            <textarea 
              id="playlist-description" 
              placeholder="Add an optional description for your playlist"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-toggle">
            <label htmlFor="is-collaborative">Collaborative Playlist</label>
            <label className="switch">
              <input type="checkbox" id="is-collaborative" />
              <span className="slider round"></span>
            </label>
          </div>
          
          <div className="form-toggle">
            <label htmlFor="is-public">Public</label>
            <label className="switch">
              <input type="checkbox" id="is-public" checked readOnly />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="tracks-section">
          <h3>Add Songs</h3>
          <p className="no-songs-message">
            No songs added yet. You can add songs after creating the playlist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistPage; 