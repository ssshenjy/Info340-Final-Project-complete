import React, { useState, useEffect } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
  createUserWithEmailAndPassword, // Import createUserWithEmailAndPassword for account creation
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

const firebaseUIConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      customParameters: {},
    },
    EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const SignInPage = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const userRef = ref(db, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            // Set user data in your state
            // For example: setEmail(userData.email);
          }
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, db]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password); // Create a new user account
      // You may want to handle additional setup or data creation for new users here
      await signInWithEmailAndPassword(auth, email, password); // Automatically sign in the newly created user
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>Login or Register</h2>
      {user ? (
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
          <form onSubmit={handleRegistration}>
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
            <button type="submit">Register</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      )}
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
};

export default SignInPage;
