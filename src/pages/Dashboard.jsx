import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* -------------- */}
      <div className="container-fluid">
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
                <p className="fs-12 text-capitalize">
                  Monitor your
                  <strong>DriveMond</strong> Business statistics
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            {/* Left Box - User Stats */}
            <div className="col-lg-7">
              <div className="row text-center">
                <div className="col-6 col-md-6 mb-3">
                  <div className="p-3 bg-primary text-white rounded">
                    <h4>3</h4>
                    <p>Total Active Customers</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 mb-3">
                  <div className="p-3 bg-success text-white rounded">
                    <h4>6</h4>
                    <p>Total Active Drivers</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 mb-3">
                  <div className="p-3 bg-warning text-white rounded">
                    <h4>$3.87K</h4>
                    <p>Total Earnings</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 mb-3">
                  <div className="p-3 bg-primary text-white rounded">
                    <h4>$3.01K</h4>
                    <p>Total Parcel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box - Trip Statistics */}
            <div className="col-lg-5">
              <div className="p-3 bg-white shadow rounded">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 className="fs-6">Zone-Wise Trip Statistics</h5>
                    <p className="text-muted fs-[4px]">Total 2 Zone</p>
                  </div>
                  <select className="form-select w-auto">
                    <option>All Time</option>
                    <option>Last 7 Days</option>
                    <option>Last Month</option>
                  </select>
                </div>

                {/* Progress Bars */}
                <div>
                  <p>
                    All Over The World{" "}
                    <span className="float-end">69% Trip Volume</span>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "69%" }}
                    ></div>
                  </div>
                </div>

                <div className="mt-3">
                  <p>
                    Asia <span className="float-end">27% Trip Volume</span>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "27%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
