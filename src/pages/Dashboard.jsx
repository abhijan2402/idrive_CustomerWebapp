import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* -------------- */}
      <div className="row align-items-center mb-3 g-2">
        <div className="col-12">
          <div className="media gap-3">
            <img
              width="38"
              src="https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/car.png"
              loading="eager"
              alt=""
            />
            <div className="media-body text-dark">
              <h4 className="mb-1">Welcome Super</h4>
              <p className="fs-8 text-capitalize">
                Monitor your
                <strong>DriveMond</strong> Business statistics
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="icon blue">
              <i class="bi bi-people-fill"></i>
            </div>
            <div className="stat-info">
              <h2>3</h2>
              <p>Total Active Customers</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon green">
              <i class="bi bi-person-check-fill"></i>
            </div>
            <div className="stat-info">
              <h2>6</h2>
              <p>Total Active Drivers</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon orange">
              <i class="bi bi-currency-exchange"></i>
            </div>
            <div className="stat-info">
              <h2>$3.87K</h2>
              <p>Total Earnings</p>
            </div>
          </div>

          <div className="stat-card-4">
            <div className="start-card-4-container">
              <div className="icon-4 dark-green">
                <i class="bi bi-cash-coin"></i>
              </div>
              <div className="stat-info">
                <h2>
                  $862.43 <span>Earn</span>
                </h2>
                <p>
                  Total Trip <strong>23</strong>
                </p>
              </div>
            </div>
            <hr />
            <div className="start-card-4-container">
              <div className="icon-4 purple">
                <i class="bi bi-cash-coin"></i>
              </div>
              <div className="stat-info">
                <h2>
                  $862.43 <span>Earn</span>
                </h2>
                <p>
                  Total Trip <strong>23</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="trip-statistics">
          <div className="tripheader">
            <h3>
              Zone-Wise Trip Statistics <span>Total Zone 2</span>
            </h3>
            <div>
              <select>
                <option>All time</option>
                <option>Last month</option>
                <option>Last week</option>
              </select>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-header">
              <p>All Over The World</p>
              <p>69% Trip volume</p>
            </div>
            <div className="bar-container">
              <div className="bar red" style={{ width: "69%" }}></div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-header">
              <p>Asia</p>
              <p>27% Trip volume</p>
            </div>
            <div className="bar-container">
              <div className="bar yellow" style={{ width: "27%" }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------- */}

      {/* ---------------- */}
      <div className="dashboard-transaction-container">
        <LeaderBoard type={"Driver"} />
        <RecentTransactions />
      </div>
      {/* ---------------- */}
      <div className="dashboard-transaction-container">
        <LeaderBoard type={"Customer"} />
        <RecentTransactions />
      </div>
    </>
  );
};

export default Dashboard;
