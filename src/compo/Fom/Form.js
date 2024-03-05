import {useState}  from 'react';
import {useNavigate} from 'react-router-dom'
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
  const [book , setBook] = useState(initialState);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  const  handleClick = (e) => {
    e.preventDefault();

    setBook(initialState);
    console.log("Ride Booked")
    navigation('/')

  }

  console.log("book",book)
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
        placeholder="Address PickUp" 
         onChange={handleChange}/>  
      <input type="address"
       name="addressDropeOff"
        placeholder="Address Drope Off"
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
      <option value="xt5">Sedan</option>
      <option value="SUV">SUV</option>
      <option value="SUV LUX">SUV Luxury</option>

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
