import {useContext} from 'react';
import {RideContext} from '../context/ridesContext'
const Rides = () => {
    const rides = useContext(RideContext)
  return (
    <div className='containers'>
      <div className='rides'>
        {rides.map((item,i)=>{
          return( <div key={i} className='ride'>
            <span>{item.name}</span>
        </div>)
        })}
       
      </div>
    </div>
  );
}

export default Rides;
