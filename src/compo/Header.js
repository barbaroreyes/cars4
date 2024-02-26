import {useState}from 'react';

import {Link} from 'react-router-dom'
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Search from './Search/Search';

const Header = () => {
  const [open ,setOpen] = useState(false)
  return (
    <div className="header-main">
    
    <Nav/>
   
   
    
    </div>
  );
}

export default Header;
