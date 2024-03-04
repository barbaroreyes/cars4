import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Corona from '../home1.png';

const Home = () => {

    return (
    <div className='home-container'>
      
      <span>Hello Thanks for comming </span>
      
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/>
        <p>Get a ride in minutes.Or become a driver and earn money on your schedule.</p>
       </div>
      
     <span>Popping Your Rides</span>
   
     <Link to='/form' className='btn btn-primary'>Book now</Link>
    </div>
  );
}

export default Home;
