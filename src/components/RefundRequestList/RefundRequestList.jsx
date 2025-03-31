import React, { useEffect, useState } from "react";
import "../TripList/TripList.css";
import {
  FaSearch,
  FaSync,
  FaClock,
  FaDownload,
  FaFilter,
  FaCog,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const RefundRequestList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const item = queryParams.get("item");
  const [activeTab, setActiveTab] = useState(item);
  useEffect(() => {
    setActiveTab(item);
  }, [item]);

  const tabs = ["Pending", "Approved", "Denied", "Refunded"];

  return (
    <div className="trip-list-container">
      <h2>Refund Request </h2>
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

      <div className="filter-utilities">
        <div className="search-bar">
          <div>
            <input type="text" placeholder="Search here by Trip ID" />
          </div>
          <button className="search-btn">
            <FaSearch /> Search
          </button>
        </div>

        <div className="utilities">
          <button>
            <FaClock />
          </button>
          <button>
            <FaDownload /> Download
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Refund ID</th>
            <th>Trip</th>
            <th>Parcel Info</th>
            <th>Customer Info</th>
            <th>Refund Reason</th>
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
      <div className="settings-icon">
        <FaCog />
      </div>
    </div>
  );
};

export default RefundRequestList;
