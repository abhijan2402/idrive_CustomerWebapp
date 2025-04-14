import React, { useEffect, useState } from "react";
import "./TripList.css";
import {
  FaSearch,
  FaSync,
  FaClock,
  FaDownload,
  FaFilter,
  FaCog,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import DriverLevels from "../DriverSetup/DriverLevelDash";

const TripList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const item = queryParams.get("item");
  const [activeTab, setActiveTab] = useState(item);
  useEffect(() => {
    setActiveTab(item);
  }, [item]);
  const tabs = [
    "All Trips",
    "Pending",
    "Accepted",
    "Completed",
    "Ongoing",
    "Cancelled",
    "Returning",
    "Returned",
  ];

  return (
    <div className="trip-list-container">
      <h2>Trip List</h2>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <DriverLevels item={item} activeTab={activeTab} />

      <h3>All Trips</h3>
      <div className="filter-utilities">
        <div className="search-bar">
          <div>
            <input type="text" placeholder="Search here by Trip ID" />
          </div>
          <div>
            <button className="search-btn">
              <FaSearch /> Search
            </button>
          </div>
        </div>

        <div className="utilities">
          <button>
            <FaSync />
          </button>
          <button>
            <FaClock />
          </button>
          <button>
            <FaDownload /> Download
          </button>
          <button>
            <FaFilter /> Filter
          </button>
        </div>
      </div>
      <div className="trip-border">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Trip ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Driver</th>
              <th>Trip Type</th>
              <th>Trip Cost ($)</th>
              <th>Coupon Discount ($)</th>
              <th>Additional Fee ($)</th>
              <th>Total Trip Cost ($)</th>
              <th>Admin Commission ($)</th>
              <th>Trip Payment Status</th>
              <th>Trip Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="14" className="no-data">
                <div className="no-data-message">
                  <div className="icon-table">⚠️</div>
                  No data available
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="settings-icon">
        <FaCog />
      </div> */}
    </div>
  );
};

export default TripList;
