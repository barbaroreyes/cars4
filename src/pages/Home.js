import React from 'react';
import {useNavigate} from 'react-router-dom';
import Picture from '../portada.jpg'
import Corona from '../corona.png'
const Home = () => {
  const navigate = useNavigate()
    return (
    <div className='home-container'>
      <div className='home-container-image1'>
        <img src ={Corona} alt="pictur"/>
      </div>
      <div className='home-container-image'>
        <img src ={Picture} alt="pictur"/>
      </div>
      <button className='btn' onClick={()=> navigate('/login')}>Login</button>
    </div>
  );
}

export default Home;
