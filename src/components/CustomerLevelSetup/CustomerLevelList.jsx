import React from "react";
import "./CustomerLevelList.css";
import {
  FaClock,
  FaDownload,
  FaFilter,
  FaSearch,
  FaSync,
} from "react-icons/fa";
import { CgAdd, CgAddR } from "react-icons/cg";

const CustomerLevelList = () => {
  const levels = [
    {
      id: 1,
      icon: "level1.png",
      name: "Level 1",
      target: {
        rides: "10 (50 Points)",
        earnings: "$1,000.00 (100 Points)",
        cancellation: "70% (20 Points)",
        reviews: "50 (30 Points)",
      },
      totalTrips: 40,
      maxCancellationRate: "2.33%",
      totalDrivers: 6,
    },
    {
      id: 2,
      icon: "level2.png",
      name: "Level 2",
      target: {
        rides: "30 (300 Points)",
        earnings: "$500.00 (500 Points)",
        cancellation: "60% (20 Points)",
        reviews: "60 (300 Points)",
      },
      totalTrips: 0,
      maxCancellationRate: "0.00%",
      totalDrivers: 0,
    },
  ];

  return (
    <div className="level-list-container">
      <h2 className="title">Customer List</h2>
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
          <button id="add_levels">
            <CgAddR /> Add Levels
          </button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Level Name</th>
              <th>Target To Proceed Level</th>
              <th>Total Trip</th>
              <th>Maximum Cancellation Rate</th>
              <th>Total Driver</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((level, index) => (
              <tr key={level.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={level.icon}
                    alt={level.name}
                    className="level-icon"
                  />
                  {level.name}
                </td>
                <td>
                  Ride Complete: {level.target.rides} <br />
                  Earning Amount: {level.target.earnings} <br />
                  Cancellation Rate: {level.target.cancellation} <br />
                  Given Review: {level.target.reviews}
                </td>
                <td>{level.totalTrips}</td>
                <td>{level.maxCancellationRate}</td>
                <td>{level.totalDrivers}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerLevelList;
