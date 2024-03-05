import React from 'react';
import './form.css'
const Form = () => {
  return (
    <form>
        
          <h1>Book Instantly</h1>
        <input type="text" name="name" placeholder="Name"/>
       <input type="text" name="last" placeholder="LastName"/>
       <input type="email" name="email" placeholder="Email"/>
       <input type="phone" name="phone" placeholder="Phone"/>
       <input type="address" name="address" placeholder="Address PickUp"/>  
      <input type="address" name="address" placeholder="Address Drope Off"/> 
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
          <button type="submit"  class="btn btn-primary"name="submit">Book</button>
          </div>
          
    </form>
  );
}

export default Form;
