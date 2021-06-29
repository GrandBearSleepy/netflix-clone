import React from 'react';
import './styles.css';

import Nav from '../../components/Nav';

const ProfileScreen = () => {
  return (
    <div profile-screen>
      <Nav />
      <div className="profile-container">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img 
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
