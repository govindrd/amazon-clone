import React, { useState } from 'react';
import './Login.css';
import amazon_in from './assets/images/Logo/amazon_in.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/'); // v6 navigation
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        if (authUser) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={amazon_in} alt="Amazon Logo" />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login_signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to Flipkart’s Terms of Use and acknowledge
          our Privacy Policy.
        </p>

        <button
          onClick={register}
          className="login_RegisterButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
