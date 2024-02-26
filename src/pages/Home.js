import React from 'react';
import {useNavigate} from 'react-router-dom';
import Corona from '../logo1.png';

const Home = () => {
  const navigate = useNavigate()
    return (
    <div className='home-container'>
      <div className='home-container-image1'>
        <img src ={Corona} alt="pictur"/>
        
      </div>
      <divclas>
        <h1>Categories</h1>
        <div>
          <div>
            <h4>categoriaNmae1</h4>
            <img src='' alt ='pict'/>
            <p>lorem203</p>
            </div>
        </div>
        </divclas>
      <button className='btn' 
      onClick={()=> 
      navigate('/form')}>
      Booking Now
      </button>
      <span>Popping Your Rides</span>
    </div>
  );
}

export default Home;
