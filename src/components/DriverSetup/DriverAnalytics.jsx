import React from "react";
import "./DriverAnalytics.css";

const data = [
  { label: "Total Driver", count: 7, icon: "👥", color: "#a78bfa" },
  { label: "Active Driver", count: 7, icon: "✅", color: "#86efac" },
  { label: "Inactive Driver", count: 0, icon: "⛔", color: "#fca5a5" },
  { label: "Car Driver", count: 4, icon: "🚗", color: "#7dd3fc" },
  { label: "Motorbike Driver", count: 3, icon: "🏍️", color: "#fde68a" },
];

const DriverAnalytics = () => {
  return (
    <div className="driver-analytics-container">
      <div className="driver-analytics-container-header">
        <h2>Driver Analytical Data</h2>
        <div>
          <select className="time-filter">
            <option>All time</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="cards-wrapper">
        {data.map((item, index) => (
          <div className="analytics-card" key={index}>
            <div className="card-icon" style={{ backgroundColor: item.color }}>
              <span>{item.icon}</span>
            </div>
            <h3>{item.count}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverAnalytics;
