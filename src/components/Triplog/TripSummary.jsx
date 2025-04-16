// TripSummary.jsx
import React from "react";
import "./TripSummary.css";
import { useNavigate } from "react-router-dom";

const TripSummary = () => {
  const navigate = useNavigate();
  return (
    <div className="trip-summary-container">
      <div className="trip-header">
        <h2>Trip #100044</h2>
      </div>
      <div className="tab-buttons">
        <button className="active">Trip Summary</button>
        <button>Activity Log</button>
      </div>

      <div className="trip-grid">
        <div className="trip-grid-details">
          {/* Driver & Customer Details */}
          <div className="user-info">
            <div className="card">
              <h4>Driver Details</h4>
              <div className="profile">
                <img
                  src="https://drivemond-admin.codemond.com/storage/app/public/driver/profile/2023-11-20-655b66dfcd82a.png"
                  alt="Driver"
                />
                <div>
                  <strong>Devid Jack</strong>
                  <p className="level">Level 1</p>
                  <p>8********</p>
                  <p>c*********@customer.com</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h4>Customer Details</h4>
              <div className="profile">
                <img
                  src="https://drivemond-admin.codemond.com/storage/app/public/customer/profile/2023-11-20-655b1f67ab472.png"
                  alt="Customer"
                />
                <div>
                  <strong>Test User</strong>
                  <p className="level">Level 1</p>
                  <p>8********</p>
                  <p>g*********@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Summary Card */}
          <div className="trip-summary-card">
            <div className="summary-header">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/61/61112.png"
                  alt="bike"
                  className="trip-icon"
                />
                <div className="trip-detail-header">
                  <p>Trip #100044</p>
                  <small>15 January 2025, 04:53 pm</small>
                  <br />
                  <strong>Total: $71.50</strong>
                </div>
              </div>
              <div className="summary-actions">
                <a href="#">Print</a>
                <a href="#">Invoice Download</a>
                <p>
                  Order Status: <span className="completed">Completed</span>
                </p>
                <p>
                  Payment Status: <span className="paid">Paid</span>
                </p>
                <p>Trip Type: Ride Request</p>
              </div>
            </div>

            <div className="pricing-table">
              <p>
                Trip Amount <span>$100.00</span>
              </p>
              <p>
                Delay Fee <span>$0.00</span>
              </p>
              <p>
                Idle Fee <span>$0.00</span>
              </p>
              <p>
                Cancellation Fee <span>$0.00</span>
              </p>
              <p>
                Discount Amount <span>- $5.00</span>
              </p>
              <p>
                Coupon Discount <span>- $30.00</span>
              </p>
              <p>
                Extra Fare <span>$6.50</span>
              </p>
              <p>
                VAT/Tax (10%) <span>-</span>
              </p>
              <p className="total">
                Total <span>$71.50</span>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Alert & Map */}
        <div className="right-panel">
          <div className="safety-alert">
            <h4>Safety Alert (1)</h4>
            <p>
              <strong>Sent By:</strong> Test User
            </p>
            <p className="alert">
              Abrupt braking was recorded by the system, indicating a potential
              risk
            </p>
            <p style={{ fontWeight: "700" }}>Alert Location</p>
            <p className="location">1005 Avenue 11, Dhaka, Bangladesh</p>
            <div className="alert-actions">
              <button onClick={() => navigate("/fleetview")}>Fleet View</button>
              <button className="solved">Mark as Solved</button>
            </div>
          </div>

          <div className="trip-status">
            <label>Trip Status</label>
            <select defaultValue="Completed">
              <option>Completed</option>
            </select>

            <label>Payment Status</label>
            <select defaultValue="Paid">
              <option>Paid</option>
            </select>

            <div className="map-section">
              <iframe
                title="Trip Map"
                src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
              ></iframe>
              <p>1005 Avenue 11, Dhaka, Bangladesh</p>
              <p>3494 Shagufta New Rd, Dhaka 1216, Bangladesh</p>
              <p>Total Distance - Km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummary;
