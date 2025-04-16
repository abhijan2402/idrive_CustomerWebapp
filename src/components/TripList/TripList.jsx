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
import { useLocation, useNavigate } from "react-router-dom";
import DriverLevels from "../DriverSetup/DriverLevelDash";
import { tripData } from "../../../dummydata";

const TripList = () => {
  const navigate = useNavigate();
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

      {activeTab === "All Trips" && (
        <DriverLevels item={item} activeTab={activeTab} />
      )}

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
            {tripData.map((trip, index) => (
              <tr key={trip.id}>
                <td>{index + 1}</td>
                <td
                  onClick={() => navigate("/tripsummary")}
                  className="trip_id"
                >
                  {trip.tripId}
                </td>
                <td>{trip.date}</td>
                <td
                  onClick={() => navigate("/customerprofile")}
                  className="trip_id"
                >
                  {trip.customer}
                </td>
                <td
                  onClick={() => navigate("/driverprofile")}
                  className="trip_id"
                >
                  {trip.driver}
                </td>
                <td>{trip.tripType}</td>
                <td>${trip.tripCost.toFixed(2)}</td>
                <td>${trip.couponDiscount.toFixed(2)}</td>
                <td>${trip.additionalFee.toFixed(2)}</td>
                <td>${trip.totalCost.toFixed(2)}</td>
                <td>${trip.adminCommission.toFixed(2)}</td>
                <td>{trip.paymentStatus}</td>
                <td>{trip.tripStatus}</td>
                <td>
                  <button className="action-btn-view">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripList;
