import React from 'react';
import logo from '../../logo_menu.png'
import './logo.css'
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div className='logo_container'>
      
      <img src = {logo} alt ='' />
      <Link to='/'>Login</Link>
    </div>
  );
}

export default Logo;
