import React from 'react';
import { IoIosMenu } from "react-icons/io";
import './nav.css'

const Nav = () => {
  return (
    <div className='navigation'>
      <IoIosMenu fontSize={45} />
      <div className='nav-log'>
       <a>Home</a>
      </div>
    </div>
  );
}

export default Nav;
