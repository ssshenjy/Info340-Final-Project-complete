import React, { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, EmailAuthProvider, signInWithEmailAndPassword, 
    signOut, onAuthStateChanged } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

const firebaseUIConfig = {
  signInFlow: 'popup',
  signInOptions: [
    // Add the providers you want to use
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        // You can add custom parameters if needed
      },
    },
    EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const SignInPage = () => {
  const auth = getAuth(); // Initialize Firebase Auth
  const db = getDatabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    // Check if the user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Call the signOut function to log the user out
      setLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loggedIn ? (
        <div>
          <p>You are logged in</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      )}
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
};

export default SignInPage;
