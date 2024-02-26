import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './search.css'

const Search = () => {
  return (
    <div className="search">
        <input type='text' placeholder='Search a category'/>
      <IoIosSearch fontSize={15} />
    </div>
  );
}

export default Search;
