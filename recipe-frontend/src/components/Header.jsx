import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import { FiLogIn } from "react-icons/fi";

import SideBar from "./SideBar";
import SidebarTab from "./SidebarTab";
import ProfileBar from "./ProfileBar";

function Header() {
  const { isLogin, logout, isProfileBarVisible, setIsProfileBarVisible } = useContext(AuthContext);

  const [isSidebaarVisible, setIsSidebaarVisible] = useState(false);
  const [isTabSidebaarVisible, setIsTabSidebaarVisible] = useState(false);

  const navigate = useNavigate();

  const sidebarRef = useRef();
  const profileRef = useRef();
  const tabSidebarRef = useRef();

  // For Sidebar (Desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebaarVisible(false);
      }
    };

    if (isSidebaarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebaarVisible]);

  // For ProfileBar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileBarVisible(false);
      }
    };

    if (isProfileBarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileBarVisible]);

  // For SidebarTab (Mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tabSidebarRef.current && !tabSidebarRef.current.contains(e.target)) {
        setIsTabSidebaarVisible(false);
      }
    };

    if (isTabSidebaarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTabSidebaarVisible]);

  return (
    <div className="header">
      <div ref={sidebarRef} className={`sidebar ${isSidebaarVisible ? "open" : ""}`}>
        <SideBar closeSidebar={() => setIsSidebaarVisible(false)} />
      </div>

      <div ref={tabSidebarRef} className={`sidebar ${isTabSidebaarVisible ? "open" : ""}`}>
        <SidebarTab />
      </div>

      <div ref={profileRef} className={`profilebar ${isProfileBarVisible ? "open" : ""}`}>
        <ProfileBar />
      </div>

      <div className="logo" onClick={() => navigate("/")}>
        <span>Find</span>My<span>Recipe</span>
      </div>

      <Navbar />

      <div className="nav-buttons">
        <div className="search" onClick={() => navigate('/recipes')}>
          <span className="nav-search-icon"><FaSearch /></span>
          <span className="search-name">Search</span>
        </div>

        {isLogin ? (
          <div
            className="profile"
            onClick={() => setIsProfileBarVisible((prev) => !prev)}
          >
            <span className="profile-icon">
              <FaUser />
            </span>
            <span className="profile-name">Me</span>
          </div>
        ) : (
          <div className="login" onClick={() => navigate("/login")}>
            <span className="login-icon">
              <FiLogIn />
            </span>
            <span className="login-name">Login</span>
          </div>
        )}
      </div>

      {isSidebaarVisible ? (
        <div className="closeSidebar" onClick={() => setIsSidebaarVisible(false)}>
          <RxCross2 />
        </div>
      ) : (
        <div className="hambuger">
          <GiHamburgerMenu onClick={() => setIsSidebaarVisible(true)} />
        </div>
      )}

      {isTabSidebaarVisible ? (
        <div className="closeTabSidebar" onClick={() => setIsTabSidebaarVisible(false)}>
          <RxCross2 />
        </div>
      ) : (
        <div className="tabhambuger">
          <GiHamburgerMenu onClick={() => setIsTabSidebaarVisible(true)} />
        </div>
      )}
    </div>
  );
}

export default Header;
