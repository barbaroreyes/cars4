import React from 'react';
import {useNavigate} from 'react-router-dom';
import Corona from '../portada.jpg';

const Home = () => {

    return (
    <div className='home-container'>
      
    
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/>
       </div>
  
      <span>Popping Your Rides</span>
    </div>
  );
}

export default Home;
