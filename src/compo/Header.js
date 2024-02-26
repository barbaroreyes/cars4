import {useState}from 'react';

import {Link} from 'react-router-dom'
import Logo from './Logo/Logo';
import  Navbar from './Nav/Nav';
import Search from './Search/Search';

const Header = () => {
  
  return (
    <div className="header-main">
    
    <Navbar/>
    <Search/>
   
   <h3>Login</h3>
    
    </div>
  );
}

export default Header;
