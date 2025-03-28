import React, { useState } from "react";
import "./Aside.css";

const Aside = ({ setIsCollapsed, isCollapsed }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className={`aside-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="admin-logo">
        <img
          src="https://drivemond-admin.codemond.com/storage/app/public/business/2023-11-20-655adbb133299.png"
          alt="Logo"
        />
        <p onClick={() => setIsCollapsed(!isCollapsed)}>
          <i className="bi bi-chevron-left"></i>
        </p>
      </div>

      <div className="aside-items-container">
        <div className="user-profile-status">
          <div className="icon-size">
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="user-details">
            <p className="email">mary@*******gmail.com</p>
            <p className="admin-type">Super Admin</p>
          </div>
        </div>

        <div className="input-container mt-2 mb-2">
          <input type="text" className="search-input" placeholder="Search" />
          <i className="search-icon">
            <i className="bi bi-search"></i>
          </i>
        </div>

        <div className="dashboard-items">
          <h6 className="text-uppercase fw-bold">Dashboard</h6>
          <ul>
            <li
              className={activeItem === "Dashboard" ? "active" : ""}
              onClick={() => setActiveItem("Dashboard")}
            >
              <i className="bi bi-menu-down"></i> Dashboard
            </li>
            <li
              className={activeItem === "Users" ? "active" : ""}
              onClick={() => setActiveItem("Users")}
            >
              <i class="bi bi-pin-map"></i> Heat Map
            </li>
            <li
              className={activeItem === "Users" ? "active" : ""}
              onClick={() => setActiveItem("Users")}
            >
              <i class="bi bi-pin-map"></i> Fleet View
            </li>
          </ul>
        </div>

        <div className="dashboard-items">
          <h6 className="text-uppercase fw-bold">Trip Management</h6>
          <ul>
            <li
              className={activeItem === "Trip" ? "active" : ""}
              onClick={() => setActiveItem("Trip")}
            >
              <i class="bi bi-car-front"></i> Trip
            </li>
            <li
              className={activeItem === "ParcelRefundRequest" ? "active" : ""}
              onClick={() => setActiveItem("ParcelRefundRequest")}
            >
              <i class="bi bi-car-front"></i> Parcel Refund Request
            </li>
            <li
              className={activeItem === "SolvedAlert" ? "active" : ""}
              onClick={() => setActiveItem("SolvedAlert")}
            >
              <i class="bi bi-flag-fill"></i> Solved Alert
            </li>
          </ul>
        </div>

        <div className="dashboard-items">
          <h6 className="text-uppercase fw-bold">User Management</h6>
          <ul>
            <li
              className={activeItem === "DriverLevelSetup" ? "active" : ""}
              onClick={() => setActiveItem("DriverLevelSetup")}
            >
              <i class="bi bi-people-fill"></i>Driver Level Setup
            </li>
            <li
              className={activeItem === "DriverSetup" ? "active" : ""}
              onClick={() => setActiveItem("DriverSetup")}
            >
              <i class="bi bi-person-fill"></i> Driver Setup
            </li>
            <li
              className={activeItem === "Withdraw" ? "active" : ""}
              onClick={() => setActiveItem("Withdraw")}
            >
              <i class="bi bi-cash-coin"></i> Withdraw
            </li>
            <li
              className={activeItem === "CustomerLevelSetup" ? "active" : ""}
              onClick={() => setActiveItem("CustomerLevelSetup")}
            >
              <i class="bi bi-people"></i> Customer Level Setup
            </li>
            <li
              className={activeItem === "CustomerSetup" ? "active" : ""}
              onClick={() => setActiveItem("CustomerSetup")}
            >
              <i class="bi bi-person"></i>Customer Setup
            </li>
            <li
              className={activeItem === "CustomerWallet" ? "active" : ""}
              onClick={() => setActiveItem("CustomerWallet")}
            >
              <i class="bi bi-wallet2"></i>Customer Wallet
            </li>
            <li
              className={activeItem === "EmployeeSetup" ? "active" : ""}
              onClick={() => setActiveItem("EmployeeSetup")}
            >
              <i class="bi bi-person-check"></i> Employee Setup
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
