import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { ApiContext } from '../context/ApiContext';
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';

function SearchBar() {
 const{setQuerySelector}=useContext(ApiContext);
  const [text,setText]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.length==0){
      toast.error("Search field cannot be empty! 🍳");
       return;
    }
    console.log(text);
    
    setQuerySelector(text);
  }

  return (
    <div className="searchbar">
        <input type="text" 
             value={text}
              onChange={(e)=>{setText(e.target.value)}}
              placeholder='I Want To Make...'
        />
         <button className="search-icon" onClick={handleSubmit} > <div className="search-icon"><FaSearch /></div></button>

    </div>
  )
}

export default SearchBar