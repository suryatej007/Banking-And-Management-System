import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';

const Default = () => {
  return (
    <div style={{  alignItems: 'center', justifyContent: 'center', }}>
      <Navbar2 />
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to our Website</h1>
        <Link to="/Signin">
          <button>Login</button>
        </Link>
        <br />
        <Link to="/Signup">
          <button>Sign Up</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Default;
