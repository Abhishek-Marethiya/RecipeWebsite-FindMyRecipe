import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
       
      <div className="footer-content">
      <div className="logo" onClick={()=>navigate('/')}>
      <span>Find</span>My<span>Recipe</span>
     </div>
     <p>© 2025 Find my Recipe. All Rights Reserved.<br/>
        A Raptive Partner Site.</p>
      </div>
      <div className="footer-socials" style={{margin:"2rem auto"}}>
       <i><FaInstagram /></i>
       <i><FaFacebookF /></i>
       <i><FaXTwitter /></i>
       <i><FaYoutube /></i>
      </div>
    </div>
  )
}

export default Footer