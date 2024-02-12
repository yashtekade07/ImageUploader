import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      {' '}
      <Link to='/login'>
        <button colorScheme='yellow'>Login</button>
      </Link>
      <p>OR</p>
      <Link to='/register'>
        <button colorScheme='yellow'>Sign Up</button>
      </Link>
    </div>
  );
};

export default Home;
