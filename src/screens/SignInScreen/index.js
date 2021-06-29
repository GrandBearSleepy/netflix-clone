import React, { useRef } from 'react';
import './styles.css';

import { auth } from '../../firebase';

const SignInScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value, passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
  }


  return (
    <div className="signin-screen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signin}
          type="submit">Sign In</button>
        <h4>
          <span className="new-text">
            New to Netflix?
          </span>&nbsp;
          <span className="signup-text" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen
