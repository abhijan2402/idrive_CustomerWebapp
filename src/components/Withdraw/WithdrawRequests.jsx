import React, { useState } from "react";
import "./WithdrawRequests.css";

const WithdrawRequests = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Pending", "Approved", "Settled", "Denied"];

  return (
    <div className="withdraw-container">
      <h2>Withdraw Requests</h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="controls-row">
        <div className="search-group">
          <input type="text" placeholder="Search here by custom" />
          <button className="search-btn">Search</button>
        </div>
        <div className="filters">
          <select>
            <option>All Withdraw Methods</option>
          </select>
          <select>
            <option>Download</option>
          </select>
        </div>
      </div>

      <table className="withdraw-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>SL</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Withdraw Method</th>
            <th>Request Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>1</td>
            <td>$ 100.00</td>
            <td>Devid Jack</td>
            <td>Bank</td>
            <td>2023-11-20 05:35 PM</td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td className="actions">
              <button className="view">👁</button>
              <button className="approve">✔</button>
              <button className="deny">✖</button>
              <button className="download">⬇</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total-count">
        Total Requests : <b>1</b>
      </div>
    </div>
  );
};

export default WithdrawRequests;
