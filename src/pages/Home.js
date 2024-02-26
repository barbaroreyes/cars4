import React from 'react';
import {useNavigate} from 'react-router-dom';
import Corona from '../logo1.png';

const Home = () => {

    return (
    <div className='home-container'>
      
    
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/>
       </div>
    <button className='btn btn-primary'>Book now</button>
      <span>Popping Your Rides</span>
    </div>
  );
}

export default Home;
