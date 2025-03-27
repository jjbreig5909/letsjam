import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  // Mock data - replace with actual data from Firebase
  const [user] = useState({
    displayName: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    profilePicture: null, // Will show default avatar with 'J'
  });

  const [musicServices] = useState({
    spotify: { connected: false },
    appleMusic: { connected: false },
  });

  const [playlists] = useState({
    created: [
      {
        id: 1,
        name: 'Summer Vibes',
        members: 5,
        songs: 45,
        lastUpdated: '2024-03-27',
      },
    ],
    memberOf: [
      {
        id: 2,
        name: 'Workout Mix',
        members: 3,
        songs: 30,
        lastUpdated: '2024-03-26',
      },
    ],
  });

  const handleConnectService = (service) => {
    // TODO: Implement service connection
    console.log(`Connecting to ${service}`);
  };

  const handleDisconnectService = (service) => {
    // TODO: Implement service disconnection
    console.log(`Disconnecting from ${service}`);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-picture">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt={user.displayName} />
          ) : (
            <div className="default-avatar">{user.displayName[0]}</div>
          )}
        </div>
        <div className="profile-info">
          <h1>{user.displayName}</h1>
          <p className="username">@{user.username}</p>
        </div>
      </div>

      <section className="profile-section">
        <h2>Connected Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Spotify</h3>
            <p className={musicServices.spotify.connected ? 'connected' : 'disconnected'}>
              {musicServices.spotify.connected ? 'Connected' : 'Not Connected'}
            </p>
            {musicServices.spotify.connected ? (
              <button onClick={() => handleDisconnectService('spotify')}>Disconnect</button>
            ) : (
              <button onClick={() => handleConnectService('spotify')}>Connect</button>
            )}
          </div>
          <div className="service-card">
            <h3>Apple Music</h3>
            <p className={musicServices.appleMusic.connected ? 'connected' : 'disconnected'}>
              {musicServices.appleMusic.connected ? 'Connected' : 'Not Connected'}
            </p>
            {musicServices.appleMusic.connected ? (
              <button onClick={() => handleDisconnectService('appleMusic')}>Disconnect</button>
            ) : (
              <button onClick={() => handleConnectService('appleMusic')}>Connect</button>
            )}
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Your LetsJams</h2>
        <div className="playlists-container">
          <div className="playlists-section">
            <h3>Created by You</h3>
            {playlists.created.map(playlist => (
              <div key={playlist.id} className="playlist-card">
                <h4>{playlist.name}</h4>
                <div className="playlist-stats">
                  <span>{playlist.members} members</span>
                  <span>{playlist.songs} songs</span>
                  <span>Updated {new Date(playlist.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="playlists-section">
            <h3>Member Of</h3>
            {playlists.memberOf.map(playlist => (
              <div key={playlist.id} className="playlist-card">
                <h4>{playlist.name}</h4>
                <div className="playlist-stats">
                  <span>{playlist.members} members</span>
                  <span>{playlist.songs} songs</span>
                  <span>Updated {new Date(playlist.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Account Settings</h2>
        <div className="settings-grid">
          <div className="setting-item">
            <label>Display Name</label>
            <input type="text" defaultValue={user.displayName} />
          </div>
          <div className="setting-item">
            <label>Email</label>
            <input type="email" defaultValue={user.email} />
          </div>
          <div className="setting-item">
            <label>Password</label>
            <button className="secondary-button">Change Password</button>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Preferences</h2>
        <div className="preferences-grid">
          <div className="preference-item">
            <label>Email Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="preference-item">
            <label>Push Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage; 