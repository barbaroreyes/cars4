import {createContext,useState , useEffect} from 'react';
import axios from 'axios';

const RideContext = createContext()

const RideProvider = ({children}) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://3i264o30id.execute-api.us-east-1.amazonaws.com/Prod/bookings');
        setBookings(response.data);
        console.log(response.data, "bookings"); // Log response.data instead of bookings
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <RideContext.Provider value={bookings}>
         {children}
    </RideContext.Provider>
  )
}

export{RideContext,RideProvider}
