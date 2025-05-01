import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function SidebarTab() {
     const{isLogin,logout}=useContext(AuthContext);
  return (
    <li>
    <Link className='sidebar-link' to='/favorites'>Favorites</Link>
    {
      isLogin ? <Link className='sidebar-link' onClick={logout} >Logout</Link>  : <Link className='sidebar-link' to='/login' >Login</Link>  
    }
</li>
  )
}

export default SidebarTab