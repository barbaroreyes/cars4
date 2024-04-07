import {useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './form.css'


const Form = () => {
  const initialState= {
    name :"",
    email:"",
    pickupLocation:"",
    dropoffLocation:"",
    passagers:"",
    rideType:"",
    distance:"",
    price : "",



  }
  const navigation = useNavigate()
  const [newBooking , setBooking] = useState(initialState);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  const  handleClick = (e) => {
    e.preventDefault();
  
   
   console.log("hello",newBooking)
  }

  console.log("booking",newBooking)
  return (
    <form>
        
      <h1>Book Instantly</h1>
      <input type="text" 
      name="name" 
      placeholder="Name" 
       onChange={handleChange}
       />
      
      <input type="email" 
      name="email" 
      placeholder="Email" 
      onChange={handleChange}
      />
       
       <input type="address"
        name="pickupLocation" 
        placeholder="Pick Up Location" 
         onChange={handleChange}/>  
      <input type="address"
       name="dropoffLocation"
        placeholder="Drop-Off Location"
         onChange={handleChange}
         /> 
      <div class="select">
      <label for="cars">Passagers:</label>
    <select name="passagers"
     id="passagers" 
     onChange={handleChange}>
      <option value="1-4">1-4</option>
      <option value="4-6">4-6</option>
    </select>
    <label for="cars">Type:</label>
    <select name="rideType" id="type"
     onChange={handleChange}>
      <option value="sedan">Sedan</option>
      <option value="suv">SUV</option>
      <option value="suv_lux">SUV Luxury</option>

    </select>
      </div>
     
          <div className = "btn-container" >
          <button type="submit" 
           className ="btn btn-primary"
           name="submit"
           onClick={handleClick}
           >Book</button>
          </div>
          
    </form>
  );
}

export default Form;
