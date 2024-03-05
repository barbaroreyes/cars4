import React from 'react';
import {Link} from 'react-router-dom'
import Corona from '../../home.webp';

import './home.css'


const Home = () => {

    return (
    <div className='home-container'>
         
   
      
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/></div>
        <div className='welcome'>
        <span>Welcome</span>
      
       
       </div>
       <p>Get a ride in minutes Or become a driver.</p>
       <div className = " btn-container">
     <Link to='/form' className='btn btn-primary'>Book Instantly</Link>
     <Link to='/signIn' className='btn btn-primary'>Sign In </Link>
     
     </div>
     <span>Popping Your Rides</span>

     <div></div>
    </div>
  );
}

export default Home;
