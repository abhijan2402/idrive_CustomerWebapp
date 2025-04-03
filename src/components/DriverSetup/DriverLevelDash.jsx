import React from "react";
import "./DriverLevels.css";

const levels = [
  {
    id: 1,
    name: "Level 1",
    drivers: 6,
    icon: "https://drivemond-admin.codemond.com/storage/app/public/driver/level/2023-11-20-655b1b668a6b8.png",
  },
  {
    id: 2,
    name: "Level 2",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/storage/app/public/driver/level/2023-11-20-655b1b523d4d5.png",
  },
  {
    id: 3,
    name: "Level 3",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/storage/app/public/driver/level/2023-11-20-655b1b892cc35.png",
  },
  {
    id: 4,
    name: "Level 4",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/storage/app/public/driver/level/2023-11-20-655b1b786858f.png",
  },
  {
    id: 5,
    name: "Level Expert",
    drivers: 0,
    icon: "https://drivemond-admin.codemond.com/storage/app/public/driver/level/2023-11-20-655b1c02893ba.png",
  },
];

const DriverLevels = () => {
  return (
    <div className="driver-levels-container">
      <div className="diver-levels-header">
        <h2 className="title">Driver Levels</h2>
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
          <div key={level.id} className="level-card">
            <div className="level-info">
              <div>
                <h3 className="level-name">{level.name}</h3>
                <p className="label">Drivers</p>
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
