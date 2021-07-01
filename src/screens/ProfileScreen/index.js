import React from 'react';
import './styles.css';

import { useSelector } from 'react-redux';
import {selectUser} from '../../features/user/userSlice';

import Nav from '../../components/Nav';
import Plans from '../../components/Plans'

import { auth } from '../../firebase';

const ProfileScreen = () => {

  const user = useSelector(selectUser)

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-container">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img 
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="" />
          <div className="profile-details">
            <h2 className="user-email">
               {user.email}
            </h2>
            <div className="user-plans">
              <h3>Plans</h3>
              <Plans />
              <button 
              onClick={() =>auth.signOut()}
              className="signout-btn">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
