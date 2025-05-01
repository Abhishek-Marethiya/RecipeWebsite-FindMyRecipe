import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
function Navbar() {
  const{isLogin}=useContext(AuthContext);
  return (
    <div className='navbar'>
        <li>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About Us</Link>
            {/* Recipes me Recipe List rahegi */}
            <Link className='link' to='/recipes'>Recipes</Link>   
            <Link className='link' to='/addrecipe'>Add Recipe</Link>
        
          
        </li>
    </div>
  )
}

export default Navbar