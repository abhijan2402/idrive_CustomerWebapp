import React from "react";
import "./DriverProfile.css";
import { FaUserCog } from "react-icons/fa";

const DriverProfile = () => {
  return (
    <div className="driver-profile">
      <h3 className="driver-id">
        Driver # 84a16479-9729-4454-91b2-fdac58fd6924
      </h3>

      <div className="top-section">
        <div className=" card driver-info">
          <div>
            <h4 className="section-title">
              {" "}
              <span>
                <FaUserCog />
              </span>
              Driver Information
            </h4>
            <div className="info">
              <img
                src="https://drivemond-admin.codemond.com/storage/app/public/driver/profile/2023-11-20-655b66dfcd82a.png"
                alt="Driver"
                className="profile-img"
              />
              <div className="text">
                <h5>David Jack</h5>
                <p>Level 1 ⭐ 4.0</p>
                <p>Phone: ***********</p>
                <p>Email: d*******@customer.com</p>
                <p>Service: Ride Request, Parcel (Capacity: Unlimited)</p>
              </div>
            </div>
          </div>
          <div>
            <div className=" driver-stats">
              <h4 className="section-title">
                {" "}
                <span>
                  <FaUserCog />
                </span>
                Driver Rate Info
              </h4>
              <div className="stats">
                <div className="stat-box1">
                  <h5>$1725</h5>
                  <p>Avg. Activity Rate/Day</p>
                </div>
                <div className="stat-box-2">
                  <div className="stat-box blue">
                    <h5>100%</h5>
                    <p>Positive Review Rate</p>
                  </div>
                  <div className="stat-box green">
                    <h5>100%</h5>
                    <p>Success Rate</p>
                  </div>
                  <div className="stat-box red">
                    <h5>0%</h5>
                    <p>Cancellation Rate</p>
                  </div>
                  <div className="stat-box orange">
                    <h5>14.67%</h5>
                    <p>Today Idle Hour Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wallet-section">
        <div className="card wallet-box full">
          <h4>Wallet Info</h4>
          <div className="wallet-row">
            <div className="wallet-card">
              <p>Collectable Cash</p>
              <h3>$ 0.00</h3>
            </div>
            <div className="wallet-card">
              <p>Pending Withdraw</p>
              <h3>$ 0.00</h3>
            </div>
            <div className="wallet-card">
              <p>Withdrawable Amount</p>
              <h3>$ 136.50</h3>
            </div>
            <div className="wallet-card">
              <p>Already Withdrawn</p>
              <h3>$ 0.00</h3>
            </div>
            <div className="wallet-card">
              <p>Total Earning</p>
              <h3>$ 156.00</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="card bottom-left">
          <div className="tabs">
            <button className="active">Overview</button>
            <button>Vehicles</button>
            <button>Trips</button>
            <button>Transaction</button>
            <button>Review</button>
          </div>
          <div className="trip-data">
            <div className="trip-label">Total Completed Trip</div>
            <div className="trip-value">$7.50</div>
            <div className="trip-label">Total Cancel Trip</div>
            <div className="trip-value">$21.50</div>
            <div className="trip-label">Lowest Price Trip</div>
            <div className="trip-value">$71.50</div>
            <div className="trip-label">Highest Price Trip</div>
            <div className="trip-value">$24.50</div>
          </div>
        </div>

        <div className="card bottom-right">
          <h4>Attached Documents</h4>
          <div className="doc-item">
            <i className="doc-icon">📄</i>
            <span className="doc-name">2023-11-29-GS66e6dfad3cb.zip</span>
            <button className="download-btn">⬇️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
