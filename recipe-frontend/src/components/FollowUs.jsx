import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function FollowUs() {
  return (
    <div className='followus'>
      <h4>Follow us</h4>
       <div className="followus-socials">
             <i><FaInstagram /></i>
             <i><FaFacebookF /></i>
             <i><FaXTwitter /></i>
             <i><FaYoutube /></i>
            </div>
    </div>
  )
}

export default FollowUs