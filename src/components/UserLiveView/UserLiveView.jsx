import React from "react";
import "./UserLiveView.css"; // Import CSS

const UserLiveView = () => {
  return (
    <div className="user-live-view">
      <div className="user-live-view-header">
        {/* Header Section */}
        <div className="user-header">
          <h2>User Live View</h2>
          <p>Monitor your users from here</p>
        </div>

        {/* Alert Box */}
        <div className="alert-box">
          <span>
            You have <strong>4 Safety Alert</strong> arrived for this zone. To
            see the list, click on <strong>Safety Alert</strong> Button. Click{" "}
            <strong>Zone Selection</strong> Button to check other zone safety
            status.
          </span>
          <button className="close-btn">✖</button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filters">
        <div className="tabs">
          <span className="active">All Drivers</span>
          <span>On-Trip</span>
          <span>Idle</span>
          <span>Customers</span>
        </div>
        <div className="location-filter-container">
          <select className="location-filter">
            <option>All Over The World</option>
          </select>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Driver List Section */}
        <div className="driver-list">
          <h3>Driver List</h3>
          <div className="search-box">
            <input type="text" placeholder="Search driver" />
            <button>Search</button>
          </div>
          <div className="drivers">
            {[
              "Devid Jack",
              "Test Driver",
              "Jonathon Smith",
              "Jenifer Jhon",
              "Jonathon Smith",
              "Jenifer Jhon",
            ].map((name, index) => (
              <div key={index} className="driver">
                <div className="profile-icon">⬤</div>
                <div className="info">
                  <h4>{name}</h4>
                  <p>Phone: +8**********</p>
                  <p>
                    Vehicle No: {index === 2 ? "136802" : "12345678"} | Model:{" "}
                    {index % 2 === 0 ? "R15" : "GTR"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <input
            type="text"
            className="location-search"
            placeholder="Search for a location"
          />
          <div className="map-container">
            {/* Replace this with your actual Google Map component */}
            <div className="map-placeholder">Google Map Here</div>
            <button className="alert-btn">❗</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLiveView;
