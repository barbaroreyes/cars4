import React from 'react';
import Picture from '../portada.jpg'
import Corona from '../corona.png'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-container-image1'>
        <img src ={Corona} alt="pictur"/>
      </div>
      <div className='home-container-image'>
        <img src ={Picture} alt="pictur"/>
      </div>
    </div>
  );
}

export default Home;
