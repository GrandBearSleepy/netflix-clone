import React from 'react';
import './styles.css';

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="login-background">
        <img
          className="login-logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
      </div>
      <button className="signin-btn">Sign In</button>
      <div className="login-gradient" />
      <div className="login-body">
        <>
          <h1>Unlimited films, TV programs and more.</h1>
          <h2>Watch anywhere, Cancel any time!</h2>
          <h3>Ready to watch Netflix? Enter your email to create or restart your membership.</h3>
          <div className="login-inputForm">
            <form action="">
              <input 
              type="email"
              placeholder="Email address"
               />
               <button className="login-submit">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  )
}

export default LoginScreen
