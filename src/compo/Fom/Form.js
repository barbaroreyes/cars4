import React from 'react';
import './form.css'
const Form = () => {
  return (
    <form>

       
        <input type="text" name="name" placeholder="Name"/>
      
       <input type="text" name="last" placeholder="LastName"/>
       
       <input type="email" name="email" placeholder="Email"/>
       <input type="phone" name="phone" placeholder="Phone"/>


          <input type="address" name="address" placeholder="Address PickUp"/>  
          <input type="address" name="address" placeholder="Address Drope Off"/> 
          <input type="date" name="address" placeholder="Address PickUp"/> 
    </form>
  );
}

export default Form;
