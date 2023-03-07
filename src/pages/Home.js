import React from 'react';
import Picture from '../portada.jpg'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-container-text'><h1>Reyes Luxury Cars</h1></div>
      <div className='home-container-image'>
        <img src ={Picture} alt="pictur"/>
      </div>
    </div>
  );
}

export default Home;
