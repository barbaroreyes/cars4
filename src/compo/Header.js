import {useState}from 'react';
import {AiOutlineSearch  } from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import Logo from './logo.png';
const Header = () => {
  const [open ,setOpen] = useState(false)
  return (
    <div className="header-main">
    
     <div className='menu-container' onClick={()=> console.log("hello")}><AiOutlineMenuUnfold style={{width:"35px",fontSize:"30px"}}/>
     </div>
     <div className='menu-container-long' >
        <a href = "#">Home</a>
        <a href = "#">Rides</a>
        <a href = "#">Services</a>
        <a href = "#">Contact</a>
        
     </div>

     < div className='logo-container'>
     
     
     </div>
     
     <div className='search-container' >
     login
     
        
     </div>
     
    </div>
  );
}

export default Header;
