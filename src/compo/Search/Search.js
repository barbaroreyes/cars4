import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './search.css'

const Search = () => {
  return (
    <div className="search">
        <input type='text' placeholder='Type a service'/>
      <IoIosSearch  fontSize={18}/>
    </div>
  );
}

export default Search;
