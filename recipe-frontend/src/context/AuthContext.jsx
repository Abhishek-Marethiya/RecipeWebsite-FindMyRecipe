import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
    const [isProfileBarVisible,setIsProfileBarVisible]=useState(false);

  useEffect(() => {
    // const storedUser = JSON.parse(localStorage.getItem("authUser"));
    const checkAuth=async()=>{
      try {
        const currentuser=await fetch('https://findmyrecipe-backend.onrender.com/api/user/me',{
          method:'GET',
          headers: { "Content-Type": "application/json" },
          credentials:'include',
        });
        if (currentuser.ok) {
          const user=await currentuser.json();
          setCurrentUser(user);
          setIsLogin(true);
        }
        
      } catch (err) {
        console.error('Auth check failed', err);
      } 
    };
    checkAuth();
   
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    setIsLogin(true);
    // localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const logout = async() => {
        const res=await fetch('http://localhost:5050/api/user/logout',{
          method:'POST',
          headers: { "Content-Type": "application/json" },
          credentials:'include'
        })
         const data=await res.json();
        if(!res.ok){
          toast.error(data.error || 'Logout failed');
          return;
        }
        setCurrentUser(null);
        setIsLogin(false);
        setIsProfileBarVisible(false)
        toast.success('Logged out!');
    // localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ isLogin, currentUser, setCurrentUser,login, logout,isProfileBarVisible,setIsProfileBarVisible }}>
      {children}
    </AuthContext.Provider>
  );
};
