import React from "react";
import "./CustomerProfile.css";
import { FaUserCog } from "react-icons/fa";

const CustomerProfile = () => {
  return (
    <div className="customer-profile">
      <h2 className="customer-id">
        Customer # 1e45ff84-b02d-4b9b-b9e8-540eca29b90d
      </h2>

      <div className="info-section">
        <div className="customer-info card">
          <h3 className="section-title">
            <span>
              <FaUserCog />
            </span>
            Customer Info
          </h3>
          <div className="info-content">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="user-img"
            />
            <div className="text-info">
              <h4>Test User</h4>
              <p>+8**********</p>
              <p>t**********@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="customer-rate-info card">
          <h3 className="section-title">Customer rate info</h3>
          <div className="customer-rate-bar">
            <div className="rate-item">
              <span>Total Digital Payment</span>
              <div className="bar">
                <div className="fill blue" style={{ width: "23.53%" }}></div>
              </div>
              <span>23.53%</span>
            </div>
            <div className="rate-item">
              <span>Success Rate</span>
              <div className="bar">
                <div className="fill green" style={{ width: "82.35%" }}></div>
              </div>
              <span>82.35%</span>
            </div>
          </div>
          <div className="customer-rate-bar">
            <div className="rate-item">
              <span>Total Review Given</span>
              <div className="bar">
                <div className="fill orange" style={{ width: "47.06%" }}></div>
              </div>
              <span>47.06%</span>
            </div>
            <div className="rate-item">
              <span>Cancellation Rate</span>
              <div className="bar">
                <div className="fill red" style={{ width: "17.65%" }}></div>
              </div>
              <span>17.65%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className="active-tab">Overview</button>
        <button>Trips</button>
        <button>Transaction</button>
        <button>Review</button>
      </div>

      <div className="details-section">
        <div className="customer-details card">
          <h3 className="section-title">Customer details</h3>
          <div className="tab-group">
            <button className="active-tab">Trip</button>
            <button>Duty & review</button>
            <button>Wallet</button>
          </div>
          <div className="trip-info">
            <p>
              Total Completed Trip <span>14</span>
            </p>
            <p>
              Total Cancel Trip <span>3</span>
            </p>
            <p>
              Lowest Price Trip <span>$ 65.56</span>
            </p>
            <p>
              Highest Price Trip <span>$ 337.70</span>
            </p>
          </div>
        </div>

        <div className="attached-docs card">
          <h3 className="section-title">Attached Documents</h3>
          <div className="doc-item">
            <div className="doc-icon">📎</div>
            <span className="doc-name">2023-11-20-655b1f67aa35f.jpg</span>
            <button className="download-btn">⬇️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
