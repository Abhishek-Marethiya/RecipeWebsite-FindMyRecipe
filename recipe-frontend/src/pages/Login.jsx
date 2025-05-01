import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

 const{login}=useContext(AuthContext);
 const navigate=useNavigate();
  const handleChange=(e)=>{
      const{value,name}=e.target;
      console.log(value);
      
      setFormData((prev)=>({...prev,[name]:value}));
      
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.email === "" || formData.password === "") {
      alert("All fields are mandatory");
      return;
    }
  
    const res = await fetch('https://findmyrecipe-backend.onrender.com/api/user/login',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const data=await res.json();
    if(!res.ok){
      toast.error(data.error || "Login failed");
        return;
    }
    login(data);
    navigate('/');
    toast.success("Login successful!");

    // const users = await res.json();
  
    // const matched = users.find(
    //   (user) => user.email === formData.email && user.password === formData.password
    // );
  
    // if (matched) {
    //   login(matched);
    //   alert("Login successful!");
    //   navigate('/');
    // } else {
    //   alert("Invalid credentials");
    // }
  };
  
  return (
    <div className="login-page">
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">LogIn</button>
        <p>Don't have an account? <Link to='/signup'>SignUp</Link> </p> 
      </form>
    </div>
  )
}

export default Login
