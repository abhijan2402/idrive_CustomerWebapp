import React, { useState } from "react";
import "./DriverLevels.css";

const levels = [
  {
    id: 1,
    name: "Pending",
    drivers: 6,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car1.png",
  },
  {
    id: 2,
    name: "Accepted",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car2.png",
  },
  {
    id: 3,
    name: "Completed",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car4.png",
  },
  {
    id: 4,
    name: "Ongoing",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car3.png",
  },
  {
    id: 5,
    name: "Cancelled",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car5.png",
  },

  {
    id: 6,
    name: "Returning",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car3.png",
  },
  {
    id: 7,
    name: "Returned",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car4.png",
  },
];

const DriverLevels = ({ item, activeTab }) => {
  return (
    <div className="driver-levels-container">
      <div className="diver-levels-header">
        <h2 className="title">Trip Statistics</h2>
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
          <div
            key={level.id}
            className={`level-card ${
              level.name !== "All Trip" && activeTab === level.name
                ? "active"
                : ""
            }`}
          >
            <div className="level-info">
              <div>
                <h3 className="level-name">{level.name}</h3>
                <p className="label">Trip</p>
              </div>
              <img src={level.icon} alt={level.name} className="level-icon" />
            </div>
            <p className="driver-count">{level.drivers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverLevels;
