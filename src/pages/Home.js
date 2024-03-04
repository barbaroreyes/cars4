import React from 'react';
import {useNavigate} from 'react-router-dom';
import Corona from '../home1.png';

const Home = () => {

    return (
    <div className='home-container'>
      
    
       <div className='home_image_container'>
        <img src={Corona} alt='pic'/>
       </div>
       <span>Welcome To</span><span>Reyes Luxury Cars</span>
    <button className='btn btn-primary'>Book now</button>
      <span>Popping Your Rides</span>
    </div>
  );
}

export default Home;
