import {useContext} from 'react';
import {ServiceContext} from '../context/servicesContext'

const Services = () => {
    const services = useContext(ServiceContext)
    console.log(services)
  return (
    <div className='containers'>
        <div className='rides'>
            {services.map((item,i)=> {
            return (<div className='ride'>
                       <span>{item.name}</span>
                        </div>
       
                )
            })}
        
       
      </div>
    </div>
  );
}

export default Services;
