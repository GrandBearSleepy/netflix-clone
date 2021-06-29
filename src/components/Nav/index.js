import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Nav = () => {

  const [show, setShow] = useState(false);
  const history = useHistory()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className="nav-contents">
        <img
          onClick={()=>history.push('/')}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="nav-logo"
        />

        <img
          onClick={() => history.push('/profile')}
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
          className="nav-avatar"
        />
      </div>
    </div>
  )
}

export default Nav
