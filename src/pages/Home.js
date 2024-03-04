import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Corona from '../home.png';
import Corona1 from '../home1.png';


const Home = () => {

    return (
    <div className='home-container'>
         
   
      
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/>
      

        <p>Get a ride in minutes.Or become a driver and earn money on your schedule.</p>
       </div>
       <h3>Services</h3>
     <div className="services">
      
     <div className='home_image_container one'>
        <img src={Corona1} alt='pic'/>
        </div>
        <div className='home_image_container one'>
        <img src={Corona1} alt='pic'/>
        </div>
        <div className='home_image_container one'>
        <img src={Corona1} alt='pic'/>
        </div>
      
     </div>
     <span>Popping Your Rides</span>
   
     <Link to='/form' className='btn btn-primary'>Book now</Link>
    </div>
  );
}

export default Home;
