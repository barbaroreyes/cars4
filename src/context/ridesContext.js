import {createContext,useState} from 'react';
import {rides} from '../ridesData'
const RideContext = createContext()

const RideProvider = ({children}) => {
    const [ride , setRide] = useState(rides)
  return (
    <RideContext.Provider value={ride}>
         {children}
    </RideContext.Provider>
  )
}

export{RideContext,RideProvider}
