import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <nav>
      <ul type="none" className='navbar'>
        <li>
          <button onClick={goToHome}>Home</button>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
