import {useState,useContext} from 'react';
import {RideContext} from '../context/ridesContext'
const Rides = () => {
    const rides = useContext(RideContext)
    console.log(rides)
  return (
    <div className='containers'>
      <div className='rides'>
        {rides.map((item,i)=>{
          return( <div className='ride'>
            <span>{item.name}</span>
        </div>)
        })}
       
      </div>
    </div>
  );
}

export default Rides;
