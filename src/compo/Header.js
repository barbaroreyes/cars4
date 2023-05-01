import {useState}from 'react';
import {AiOutlineSearch  } from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Logo from './logo.png';

const Header = () => {
  const [open ,setOpen] = useState(false)
  return (
    <div className="header-main">
    
     <div className='menu-container' onClick={()=> console.log("hello")}><AiOutlineMenuUnfold style={{width:"35px",fontSize:"30px"}}/>
     <Link to = "/">Home</Link>
        <Link to = "/rides">Rides</Link>
        <Link to = "/services">Services</Link>
        <Link to = "/contact">Contact</Link>
     </div>
       
     <div className='menu-container-long' >
     <Link to = "/">Home</Link>
        <Link to = "/rides">Rides</Link>
        <Link to = "/services">Services</Link>
        <Link to = "/contact">Contact</Link>
        
     </div>

     <div className='logo-container'></div>
     
     <div className='search-container'>search</div>
     
    </div>
  );
}

export default Header;
