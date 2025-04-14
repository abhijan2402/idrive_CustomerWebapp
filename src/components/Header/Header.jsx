import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogout = () => {
    alert("hellp");
    localStorage.removeItem("token");
  };
  return (
    <header className="header fixed-top">
      <div className="container-fluids">
        <p
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="header-menubar"
        >
          <i className="bi bi-list"></i>
        </p>

        {/* Notification & Profile Section */}
        <div className="header-icons">
          {/* Notification Icon with Badge */}
          <div className="notification">
            <i className="bi bi-bell"></i>
            <span className="badge">3</span>
          </div>

          {/* Profile Icon with Hover Dropdown */}
          <div
            className="profile"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <i className="bi bi-person-circle"></i>

            {/* Dropdown Menu */}
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <p onClick={() => navigate("/profile")}>Settings</p>
              <p onClick={handleLogout}>Sign Out</p>
            </div>
          </div>

          <div className="registration-btn">
            <button onClick={() => navigate("/registration")}>
              Complete Registration
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
