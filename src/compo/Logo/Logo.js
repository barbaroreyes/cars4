import React from 'react';
import logo from '../../logo_menu.png'
import './logo.css'
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div className='logo_container'>
      
      
      <Link to='/'>
        
      <img src = {logo} alt ='' />
      
      </Link>
    </div>
  );
}

export default Logo;
