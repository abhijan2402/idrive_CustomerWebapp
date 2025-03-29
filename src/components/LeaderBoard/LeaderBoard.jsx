import React, { useState } from "react";
import "./LeaderBoard.css";

const LeaderBoard = ({type}) => {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = ["Today", "This Week", "This Month", "All Time"];

  return (
    <div className="leaderboard-container mb-4">
      <div className="leadeboard-header">
        <div className="leaderboard-title">
          <h5>Leader Board</h5>
          <span>{type}</span>
        </div>
        <div className="leaderboard-tabs">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </div>
      </div>
      <div className="leaderboard-content-container">
        <div className="rating-section">
          <div className="top-rating">
            <div className="top-rating-head">
              <span>7</span>
              <span>Trip</span>
              <img
                src="https://drivemond-admin.codemond.com/storage/app/public/driver/profile/2023-11-20-655b163de578e.png"
                alt=""
              />
            </div>
            <div className="top-rating-position">
              <span>2</span>
              <p>Devid</p>
            </div>
          </div>
          <div className="top-rating">
            <div className="top-rating-head-2">
              <span>21</span>
              <span>Trip</span>
              <img
                src="https://drivemond-admin.codemond.com/storage/app/public/driver/profile/2023-11-20-655b163de578e.png"
                alt=""
              />
            </div>
            <div className="top-rating-position-2">
              <span>1</span>
              <p>Devid</p>
            </div>
          </div>
          <div className="top-rating">
            <div className="top-rating-head-3">
              <span>7</span>
              <span>Trip</span>
              <img
                src="https://drivemond-admin.codemond.com/storage/app/public/driver/profile/2023-11-20-655b163de578e.png"
                alt=""
              />
            </div>
            <div className="top-rating-position-3">
              <span>3</span>
              <p>Devid</p>
            </div>
          </div>
        </div>
        <div className="driver-list-section">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <>
                <div className="driver-item">
                  <div className="driver-srno">
                    <span>{index}.</span>
                    <img
                      src="https://drivemond-admin.codemond.com/storage/app/public/driver/profile/2023-11-20-655b163de578e.png"
                      alt=""
                    />
                    <p>Test Driver</p>
                  </div>
                  <div className="driver-trip-count">24</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
