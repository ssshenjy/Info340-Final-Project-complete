import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Get the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth(); 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the user data in Firebase Realtime Database
      const db = getDatabase();
      const userRef = ref(db, `users/${user.uid}`);
      await firebaseSet(userRef, {
        email: user.email
      });

      console.log("User registered and data saved successfully!");

      // Redirect to the introduction page
      navigate('/introduction');

    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;