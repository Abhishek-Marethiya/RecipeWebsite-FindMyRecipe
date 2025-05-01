import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

function Banner() {
    
  const {currentUser}=useContext(AuthContext);
    
    const [isBannerHide,setIsBannerHide]=useState(false);
  return (
    <>
    {
        !isBannerHide && ( <div className="banner">
            <div className="banner-content">
            {
              currentUser? <p>Welcome {currentUser.name}</p> : <p>Our Recipes, Your Inbox.<Link style={{color:'black',textDecoration: 'none',textTransform:'capitalize'}} to='/signup'> SignUp</Link></p>
             }
              </div> 
             <button className="banner-btn" onClick={()=>setIsBannerHide(true)}>
             <RxCross2 />
             </button>
          </div>)
    }
   </>
  )
}

export default Banner