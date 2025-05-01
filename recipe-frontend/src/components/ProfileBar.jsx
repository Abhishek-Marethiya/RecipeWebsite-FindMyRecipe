import React, { useContext } from 'react'
import { MdFavorite } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function ProfileBar() {
   const {isLogin,logout}=useContext(AuthContext);
   const navigate=useNavigate();
  return (
    <>
         <div className="favorite" onClick={()=>navigate('/favorites')}>
            <span className="fav-icon"><MdFavorite /></span>
            <span className="favorite-name">Favorites</span>
             </div>
        
            <div className="myrecipes" onClick={()=>navigate('/myrecipes')}>
            <span className="myrecipes-icon"><MdOutlineCreateNewFolder /></span>
            <span className="myrecipes-name">MyRecipes</span>
             </div>

             <div className="line"></div>
           <div className="logout">
            <span className="logout-icon" onClick={()=>{logout();navigate('/')}} ><IoLogOut /></span>
            <span className="logout-name">Logout</span>
            </div>
        
    </>
  )
}

export default ProfileBar