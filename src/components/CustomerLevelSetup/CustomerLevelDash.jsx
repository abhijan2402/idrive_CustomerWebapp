import React from "react";
import "./CustomerLevelDash.css";

const levels = [
  {
    id: 1,
    name: "Total Customer",
    drivers: 6,
    icon: <i class="bi bi-people-fill"></i>,
  },
  {
    id: 2,
    name: "In-Active Customer ",
    drivers: 0,
    icon: <i class="bi bi-person-dash"></i>,
  },
  {
    id: 3,
    name: "New Customer",
    drivers: 0,
    icon: <i class="bi bi-person-fill"></i>,
  },
  {
    id: 4,
    name: "Active Cutomer",
    drivers: 0,
    icon: <i class="bi bi-person-fill-check"></i>,
  },
];

const CustomerLevelDash = () => {
  return (
    <div className="driver-levels-container">
      <div className="diver-levels-header">
        <h2 className="title">Customer Analytics</h2>
        <div>
          <select>
            <option>All time</option>
            <option>Last month</option>
            <option>Last week</option>
          </select>
        </div>
      </div>
      <div className="levels-wrapper">
        {levels.map((level) => (
          <div key={level.id} className="customerlevel-card">
            <div className="level-info">
              <div>
                <h3 className="level-name">{level.name}</h3>
                <p className="label">Total</p>
              </div>
              <p className="cutomerleveldash-icon">{level.icon}</p>
            </div>
            <p className="driver-count">{level.drivers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLevelDash;
