import React from 'react';
import {Link} from  'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import './nav.css'

const Nav = () => {
  return (
    <div className='navigation'>
      <div className='short'>
      <IoIosMenu fontSize={45} color=' #1a237e'/>
        </div>
     
      <div className='nav-log'>
       <Link to='/'>Services</Link>
       <Link to='/'>Fleet</Link>
       <Link to='/'>Events</Link>
       <Link to='/'>Reserve</Link>
       <Link to='/book_now'>Book Instantly</Link>
      </div>
    </div>
  );
}

export default Nav;
