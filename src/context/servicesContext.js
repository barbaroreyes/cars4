import {createContext,useState} from 'react';
import {services} from '../ridesData';

const ServiceContext = createContext()

const ServiceProvider = ({children}) => {
    const [service , setService] = useState(services)
  return (
    <ServiceContext.Provider value={service}>
         {children}
    </ServiceContext.Provider>
  )
}

export{ServiceContext,ServiceProvider}
