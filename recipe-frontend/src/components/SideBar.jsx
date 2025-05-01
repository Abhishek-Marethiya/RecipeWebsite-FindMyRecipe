import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
function SideBar() {
  const{isLogin,logout}=useContext(AuthContext);

  return (
    <li>
        <Link className='sidebar-link' to="/">Home</Link>
        <Link className='sidebar-link' to="/about">About Us</Link>
        {/* Recipes me Recipe List rahegi */}
        <Link className='sidebar-link' to='/recipes'>Recipes</Link> 
        <Link className='sidebar-link' to='/favorites'>Favorites</Link>
        {
          isLogin && <Link className='sidebar-link' to='/addrecipe'>Add Recipe</Link>
        }
         {
          isLogin && <Link className='sidebar-link' to='/myrecipes'>My Recipes</Link>
        }
        {
          isLogin ? <Link className='sidebar-link' onClick={logout} >Logout</Link>  : <Link className='sidebar-link' to='/login' >Login</Link>  
        }
        
    </li>

  )
}

export default SideBar