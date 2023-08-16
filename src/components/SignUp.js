import React from 'react';

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Email: <input type="email" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;