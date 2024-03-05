import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Corona from '../../home1.png';
import Corona1 from '../../ride.png';
import './home.css'


const Home = () => {

    return (
    <div className='home-container'>
         
   
      
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/></div>
        <div className='welcome'>
        <span>Welcome to</span>
       <span>Reyes Luxury Cars</span>
       </div>
       <div className = " btn-container">
     <Link to='/form' className='btn btn-primary'>Book now</Link>
     <Link to='/form' className='btn btn-primary'>Sign In </Link>
     <Link to='/form' className='btn btn-primary'>Sign Up</Link>
     </div>
      
       <p>Get a ride in minutes Or become a driver.</p>
       
    
     
   
     
     <span>Popping Your Rides</span>
    </div>
  );
}

export default Home;
