import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      setSignedUp(true); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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

        <button type="submit">Sign Up</button>
      </form>
      
      {error && <p>{error}</p>}

      {signedUp ? (
        <p>Successfully signed up! Redirecting to <Link to="/LogIn">Log In</Link>...</p>
      ) : (
        <p>Already have an account? <Link to="/LogIn">Log In</Link></p>
      )}
    </div>
  );
};

export default SignUp;
