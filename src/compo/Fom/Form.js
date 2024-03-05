import {useState}  from 'react';
import './form.css'
const Form = () => {
  const initialState= {
    name :"",
    last : "",
    email:"",
    phone:"",
    addressPickUp:"",
    addressDropeOff:"",



  }
  const [book , setBook] = useState(initialState);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };

  console.log("book",book)
  return (
    <form>
        
      <h1>Book Instantly</h1>
      <input type="text" name="name" placeholder="Name"  onChange={handleChange}/>
      <input type="text" name="last" placeholder="LastName" onChange={handleChange}/>
      <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
       <input type="number" name="phone" placeholder="Phone" onChange={handleChange}/>
       <input type="address" name="addressPickUp" placeholder="Address PickUp"  onChange={handleChange}/>  
      <input type="address" name="addressDropeOff" placeholder="Address Drope Off" onChange={handleChange}/> 
      <div class="select">
      <label for="cars">Passagers:</label>
    <select name="passagers" id="passagers">
      <option value="volvo">1-4</option>
      <option value="saab">4-6</option>
    </select>
    <label for="cars">Type:</label>
    <select name="cars" id="cars">
      <option value="xt5">Sedan</option>
      <option value="C6">SUV</option>
      <option value="C6">SUV Luxury</option>

    </select>
      </div>
     
          <div className = "btn-container" >
          <button type="submit"  className ="btn btn-primary"name="submit">Book</button>
          </div>
          
    </form>
  );
}

export default Form;
