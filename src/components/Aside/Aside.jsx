import React, { useState } from "react";
import "./Aside.css";
import { useNavigate } from "react-router-dom";

const Aside = ({ setIsCollapsed, isCollapsed }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [dropdownStates, setDropdownStates] = useState({
    trip: false,
    tripParcel: false,
    userManagement: false,
    driverLevels: false,
    driverSetup: false,
  });
  const [dropdownactiveItem, setDropDownActiveItem] = useState("");
  // Example trip count data
  const tripCounts = {
    all: 120,
    pending: 30,
    cancelled: 15,
    completed: 50,
    accepted: 10,
    returning: 5,
    returned: 10,
  };

  // Toggle Dropdowns Dynamically
  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
              onClick={() => {
                setActiveItem("Dashboard"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/dashboard");
              }}
            >
              <i className="bi bi-menu-down"></i> Dashboard
            </li>
            <li
              className={activeItem === "Heatmap" ? "active" : ""}
              onClick={() => {
                setActiveItem("Heatmap"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/heatmap");
              }}
            >
              <i className="bi bi-pin-map"></i> Heat Map
            </li>
            <li
              className={activeItem === "fleetview" ? "active" : ""}
              onClick={() => {
                setActiveItem("fleetview"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/fleetview");
              }}
            >
              <i className="bi bi-pin-map"></i> Fleet View
            </li>
          </ul>
        </div>
        {/* -----------TRIP--------------- */}
        <div className="dashboard-items">
          <h6 className="text-uppercase fw-bold">Trip Management</h6>
          <ul>
            {/* Trip Dropdown */}
            <li
              className={`trip-dropdown ${dropdownStates.trip ? "open" : ""} ${
                activeItem === "Tripmanagement" ? "active" : ""
              }`}
              onClick={() => {
                toggleDropdown("trip"), setActiveItem("Tripmanagement");
              }}
            >
              <div>
                <i className="bi bi-car-front"></i> Trip
              </div>
              <i
                className={`bi ${
                  dropdownStates.trip ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              />
            </li>

            <ul className={`trip-submenu ${dropdownStates.trip ? "show" : ""}`}>
              <li
                className={dropdownactiveItem === "AllTrip" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("AllTrip"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=All Trips");
                }}
              >
                <i className="bi bi-list"></i> All Trips ({tripCounts.all})
              </li>
              <li
                className={dropdownactiveItem === "Pending" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Pending"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Pending");
                }}
              >
                <i className="bi bi-hourglass-split"></i> Pending (
                {tripCounts.pending})
              </li>
              <li
                className={dropdownactiveItem === "Cancelled" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Cancelled"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Cancelled");
                }}
              >
                <i className="bi bi-x-circle"></i> Cancelled (
                {tripCounts.cancelled})
              </li>
              <li
                className={dropdownactiveItem === "Completed" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Completed"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Completed");
                }}
              >
                <i className="bi bi-check-circle"></i> Completed (
                {tripCounts.completed})
              </li>
              <li
                className={dropdownactiveItem === "Accepted" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Accepted"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Accepted");
                }}
              >
                <i className="bi bi-check2"></i> Accepted ({tripCounts.accepted}
                )
              </li>
              <li
                className={dropdownactiveItem === "Returning" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Returning"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Returning");
                }}
              >
                <i className="bi bi-arrow-repeat"></i> Returning (
                {tripCounts.returning})
              </li>
              <li
                className={dropdownactiveItem === "Returned" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Returned"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Returned");
                }}
              >
                <i className="bi bi-box-arrow-in-right"></i> Returned (
                {tripCounts.returned})
              </li>
            </ul>

            {/* Parcel Refund Request Dropdown */}
            <li
              className={`trip-dropdown ${
                dropdownStates.tripParcel ? "open" : ""
              }${activeItem === "tripParcel" ? "active" : ""}`}
              onClick={() => {
                toggleDropdown("tripParcel"), setActiveItem("tripParcel");
              }}
            >
              <div>
                <i className="bi bi-car-front"></i> Parcel Refund Request
              </div>
              <i
                className={`bi ${
                  dropdownStates.tripParcel
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              />
            </li>

            <ul
              className={`trip-submenu ${
                dropdownStates.tripParcel ? "show" : ""
              }`}
            >
              <li
                className={dropdownactiveItem === "Pending" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Pending"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/parcelrefund?item=Pending");
                }}
              >
                <i className="bi bi-hourglass-split"></i> Pending
              </li>
              <li
                className={dropdownactiveItem === "Approved" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Approved"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/parcelrefund?item=Approved");
                }}
              >
                <i className="bi bi-x-circle"></i> Approved
              </li>
              <li
                className={dropdownactiveItem === "Denied" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Denied"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/parcelrefund?item=Denied");
                }}
              >
                <i className="bi bi-check-circle"></i> Denied
              </li>
              <li
                className={dropdownactiveItem === "Refunded" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("Refunded"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/parcelrefund?item=Refunded");
                }}
              >
                <i className="bi bi-check2"></i> Refunded
              </li>
            </ul>

            <li
              className={dropdownactiveItem === "Solved Alert" ? "active" : ""}
              onClick={() => {
                setDropDownActiveItem("Solved Alert"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/parcelrefund?item=Solved Alert");
              }}
            >
              <i className="bi bi-flag-fill"></i> Solved Alert
            </li>
          </ul>
        </div>

        {/* ------------USER MANAGEMENT----------------- */}
        <div className="dashboard-items">
          <h6 className="text-uppercase fw-bold">User Management</h6>
          <ul>
            <li
              className={`trip-dropdown ${
                dropdownStates.driverLevels ? "open" : ""
              } ${activeItem === " DriverLevelsSetup" ? "active" : ""}`}
              onClick={() => {
                toggleDropdown("driverLevels"),
                  setActiveItem("DriverLevelsSetup");
              }}
            >
              <div>
                <i className="bi bi-car-front"></i> Driver Levels Setup
              </div>
              <i
                className={`bi ${
                  dropdownStates.driverLevels
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              />
            </li>

            <ul
              className={`trip-submenu ${
                dropdownStates.driverLevels ? "show" : ""
              }`}
            >
              <li
                className={
                  dropdownactiveItem === "DriverLevels" ? "active" : ""
                }
                onClick={() => {
                  setDropDownActiveItem("DriverLevels"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=All Trips");
                }}
              >
                <span>-</span> Driver Levels
              </li>
              <li
                className={
                  dropdownactiveItem === "AllDriverLevels" ? "active" : ""
                }
                onClick={() => {
                  setDropDownActiveItem("AllDriverLevels"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Pending");
                }}
              >
                <span>-</span> All Driver Levels
              </li>
            </ul>

            <li
              className={`trip-dropdown ${
                dropdownStates.driverSetup ? "open" : ""
              } ${activeItem === " DriverSetup" ? "active" : ""}`}
              onClick={() => {
                toggleDropdown("driverSetup"), setActiveItem("DriverSetup");
              }}
            >
              <div>
                <i className="bi bi-car-front"></i> Driver Setup
              </div>
              <i
                className={`bi ${
                  dropdownStates.driverSetup
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              />
            </li>

            <ul
              className={`trip-submenu ${
                dropdownStates.driverSetup ? "show" : ""
              }`}
            >
              <li
                className={dropdownactiveItem === "DriverList" ? "active" : ""}
                onClick={() => {
                  setDropDownActiveItem("DriverList"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=All Trips");
                }}
              >
                <span>-</span> Driver List
              </li>
              <li
                className={
                  dropdownactiveItem === "AddNewDrivers" ? "active" : ""
                }
                onClick={() => {
                  setDropDownActiveItem("AddNewDrivers"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Pending");
                }}
              >
                <span>-</span> Add New Driver
              </li>
              <li
                className={
                  dropdownactiveItem === "AddIdentitiyRequest" ? "active" : ""
                }
                onClick={() => {
                  setDropDownActiveItem("AddIdentitiyRequest"),
                    setIsCollapsed(!isCollapsed),
                    navigate("/triplist?item=Pending");
                }}
              >
                <span>-</span> Driver Identity Request List
              </li>
            </ul>

            <li
              className={
                dropdownactiveItem === "Customer Wallett" ? "active" : ""
              }
              onClick={() => {
                setDropDownActiveItem("Customer Wallet"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/parcelrefund?item=Solved Alert");
              }}
            >
              <i class="bi bi-wallet-fill"></i> Customer Wallet
            </li>
          </ul>
        </div>

        {/* ------------TRANSACTION & REPORT--------------- */}
        <div className="dashboard-items">
          <h6 className="text-uppercase fw-bold">TRANSACTION & REPORT</h6>
          <ul>
            <li
              className={activeItem === "Transations" ? "active" : ""}
              onClick={() => {
                setActiveItem("Transations"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/transactionlist");
              }}
            >
              <i className="bi bi-menu-down"></i> Transations
            </li>
            <li
              className={activeItem === "Report" ? "active" : ""}
              onClick={() => {
                setActiveItem("Report"),
                  setIsCollapsed(!isCollapsed),
                  navigate("/heatmap");
              }}
            >
              <i className="bi bi-pin-map"></i> Report
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
