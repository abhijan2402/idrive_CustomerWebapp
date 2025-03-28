import React, { useState } from "react";
import "./Header.css";

const Header = ({ isCollapsed, setIsCollapsed }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header fixed-top">
      <div className="container-fluids">
        <p onClick={() => setIsCollapsed(!isCollapsed)} className="header-menubar">
          <i class="bi bi-list"></i>
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
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <p>Settings</p>
                <p>Sign Out</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
