import {useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './form.css'


const Form = () => {
  const initialState= {
    name :"",
    last : "",
    email:"",
    phone:"",
    addressPickUp:"",
    addressDropeOff:"",
    passagers:"",
    type:"",



  }
  const navigation = useNavigate()
  const [newBooking , setBooking] = useState(initialState);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  const  handleClick = async (e) => {
    e.preventDefault();
  try {
     await axios.post("https://7l4tx89are.execute-api.us-east-1.amazonaws.com/Prod/createBooking",{
      name:newBooking,

     })
     setBooking(initialState);
     console.log("Ride Booked")
     navigation('/')
  } catch (error) {
    console.log(error)
  }
   

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
      <input type="text" 
      name="last" 
      placeholder="LastName"
       onChange={handleChange}
       />
      <input type="email" 
      name="email" 
      placeholder="Email" 
      onChange={handleChange}
      />
       <input type="number"
        name="phone"
         placeholder="Phone" 
         onChange={handleChange}
         />
       <input type="address"
        name="addressPickUp" 
        placeholder="Pick Up Location" 
         onChange={handleChange}/>  
      <input type="address"
       name="addressDropeOff"
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
    <select name="type" id="type"
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
