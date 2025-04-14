import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

const StatCard = ({ icon, color, value, label }) => (
  <div className="stat-card">
    <div className={`icon ${color}`}>
      <i className={`bi ${icon}`}></i>
    </div>
    <div className="stat-info">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  </div>
);

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
          {/* Total Users */}
          <StatCard
            icon="bi-people-fill"
            color="blue"
            value="320"
            label="Total Users"
          />

          {/* Total Drivers */}
          <StatCard
            icon="bi-person-check-fill"
            color="green"
            value="58"
            label="Total Active Drivers"
          />

          {/* Total Companies */}
          <StatCard
            icon="bi-buildings"
            color="red"
            value="12"
            label="Companies Using Service"
          />

          {/* Total Earnings */}
          <StatCard
            icon="bi-currency-exchange"
            color="orange"
            value="$34.2K"
            label="Total Earnings"
          />

          {/* Total Trips */}
          <StatCard
            icon="bi bi-car-front-fill"
            color="blue"
            value="1,220"
            label="Total Trips"
          />

          {/* Ongoing Trips */}
          <StatCard
            icon="bi-hourglass-split"
            color="purple"
            value="18"
            label="Ongoing Trips"
          />

          {/* Cancelled Trips */}
          <StatCard
            icon="bi-x-circle-fill"
            color="red"
            value="42"
            label="Cancelled Trips"
          />

          {/* Ratings */}
          <StatCard
            icon="bi-star-fill"
            color="yellow"
            value="4.6/5"
            label="Average Rating"
          />
        </div>
      </div>

      {/* -------------- */}

      {/* ---------------- */}
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
