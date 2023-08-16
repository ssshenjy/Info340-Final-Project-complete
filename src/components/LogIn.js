import React from 'react';

function LogIn() {
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <label>Email: <input type="email" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;