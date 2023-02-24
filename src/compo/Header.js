import React from 'react';
import {AiOutlineSearch  } from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import Logo from './logo.png';
const Header = () => {
  return (
    <div className="header-main">
    
     <div className='menu-container' ><AiOutlineMenuUnfold style={{width:"100%"}}/></div>
     <div className='menu-container-long' >
        <a href = "#">Home</a>
        <a href = "#">Rides</a>
        <a href = "#">Services</a>
        <a href = "#">Contact</a>
        
     </div>

     < div className='logo-container'>
       <img src ={Logo} alt= '' />
     </div>
     <div className='search-container' >
        <AiOutlineSearch/>
        <input type='search'/>
     </div>
    </div>
  );
}

export default Header;
