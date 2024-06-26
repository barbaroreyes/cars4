import {useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './form.css'


const initial ={
  name: '',
  email: '',
  pickupLocation: '',
  pickupDate: '',
  time: '',
  dropoffLocation: '',
  passagers: '',
  rideType: '',
  price:"",
  distance:""

}
 
const Form = () => {
   const navigation = useNavigate()
  const [formData, setFormData] = useState(initial);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to backend
    try {
        const response = await axios.post('https://3i264o30id.execute-api.us-east-1.amazonaws.com/Prod/bookings', formData);
       
        setFormData(initial)
        navigation('/');
        console.log('Booking created:', response.data);

    } catch (error) {
        console.error('Error creating booking:', error);
    }

    console.log(formData);
};

return (
    <div>
        <h2>Book a Ride</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="pickupLocation"
                placeholder="Pickup Location"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
            />
             <label>Date</label>
             <input
                type="date"
                name="pickupDate"
                placeholder="Dropoff Location"
                value={formData.pickupDate}
                onChange={handleChange}
                required
            />
             <label>Hour</label>
             <input
                type="time"
                name="time"
                placeholder="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="dropoffLocation"
                placeholder="Dropoff Location"
                value={formData.dropoffLocation}
                onChange={handleChange}
                required
            />
    
          <label>How Many Passagers?</label>
            <select 
            name='passagers'
            onChange={handleChange}se
            value={formData.passagers}
            >
              <option value= "1-4">1-4</option>
                <option value= "4-6">4-6</option>
                <option value= "6-10">6-10</option>
                <option value= "10-15">10-15</option>
                <option value= "more_then_15">15+</option>
                </select>
           

            <label>select your booking type</label>
            <select 
            name='rideType'
            onChange={handleChange}se
            value={formData.rideType}
            >
              <option value= "luxury">Luxury</option>
                <option value= "luxury_44">Luxury44</option>
                <option value="luxury_46">Luxury46</option>
                <option value="luxury_small_limo">Luxury  Small Limo</option>
                <option value="luxury_big_limo">Luxury Big Limo</option>
                </select>

            <button 
            type="submit"
            calassName="btn btn-primary"
            >
            Booking Now
            </button>
        </form>
    </div>
);
}

export default Form;
