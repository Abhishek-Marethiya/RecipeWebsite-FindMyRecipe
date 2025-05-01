import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  // const usernameRegex = /^[A-Za-z]*$/;
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === "name" && !usernameRegex.test(value)) {
    //   alert("Only letters are allowed in name");
    //   return;
    // }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.email === "" || formData.password === "") {
      alert("All fields are mandatory");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
console.log("till here okay..");

    try {
      const res = await fetch('https://findmyrecipe-backend.onrender.com/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include' // needed for sending cookies (jwt)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Signup failed");
        return;
      }
      navigate('/');
      alert("Signup successful!");
      

    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input type="text" name='name' placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type={isPasswordVisible ? "text" : "password"} name='password' placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
