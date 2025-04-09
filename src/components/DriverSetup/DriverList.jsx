import React from "react";
import "./DriverList.css";

const driverData = [
  {
    id: 1,
    name: "Devid Jack",
    phone: "+8**********",
    email: "c*********@customer.com",
    profileStatus: "90%",
    level: "Level 1",
    totalTrip: 3,
    earning: "$ 156.00",
  },
  {
    id: 2,
    name: "Will Smith",
    phone: "+8**********",
    email: "w*********@gmail.com",
    profileStatus: "90%",
    level: "Level 1",
    totalTrip: 0,
    earning: "$ 0.00",
  },
  {
    id: 3,
    name: "Jenifer Jhon",
    phone: "+8**********",
    email: "j*********@gmail.com",
    profileStatus: "90%",
    level: "Level 1",
    totalTrip: 5,
    earning: "$ 2,614.96",
  },
  {
    id: 4,
    name: "Jonathon Smith",
    phone: "+8**********",
    email: "s*********@gmail.com",
    profileStatus: "90%",
    level: "Level 1",
    totalTrip: 4,
    earning: "$ 2,162.48",
  },
  {
    id: 5,
    name: "Test Driver",
    phone: "+8**********",
    email: "t*********@driver.com",
    profileStatus: "90%",
    level: "Level 1",
    totalTrip: 24,
    earning: "$ 3,547.13",
  },
  {
    id: 6,
    name: "Devid Jack",
    phone: "+8**********",
    email: "d*********@driver.com",
    profileStatus: "90%",
    level: "Level 1",
    totalTrip: 7,
    earning: "$ 466.48",
  },
];

const DriverList = () => {
  return (
    <div className="driver-list-container">
      <div className="driver-list-header">
        <h2>Driver List</h2>
      </div>
      <div className="tabs">
        <button className="tab active">All</button>
        <button className="tab">Active</button>
        <button className="tab">Inactive</button>
      </div>

      <div className="controls">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input type="text" placeholder="Search here by name" />
          <button className="search-btn">Search</button>
        </div>

        <div className="icon-buttons">
          <button title="Refresh">
            <i class="bi bi-arrow-clockwise"></i>
          </button>
          <button title="Sort">
            <i class="bi bi-funnel"></i>
          </button>
          <button title="Download">
            <i class="bi bi-download"></i> Download
          </button>
          <button className="add-btn">+ Add Driver</button>
        </div>
      </div>

      <table className="driver-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Profile Status</th>
            <th>Level</th>
            <th>Total Trip</th>
            <th>Earning</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {driverData.map((driver, index) => (
            <tr key={driver.id}>
              <td>{index + 1}</td>
              <td className="driver-name">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 5}`}
                  alt="profile"
                  className="avatar"
                />
                {driver.name}
              </td>
              <td>
                {driver.phone}
                <br />
                {driver.email}
              </td>
              <td>{driver.profileStatus}</td>
              <td>{driver.level}</td>
              <td>{driver.totalTrip}</td>
              <td>{driver.earning}</td>
              <td>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </td>
              <td className="actions">
                <button
                  className="icon-btn"
                  onClick={() => console.log("Clock clicked", driver.name)}
                >
                  🕒
                </button>
                <button
                  className="icon-btn"
                  onClick={() => console.log("Edit clicked", driver.name)}
                >
                  ✏️
                </button>
                <button
                  className="icon-btn"
                  onClick={() => console.log("View clicked", driver.name)}
                >
                  👁️
                </button>
                <button
                  className="icon-btn delete"
                  onClick={() => console.log("Delete clicked", driver.name)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-driver">
        Total driver: <span>{driverData.length}</span>
      </div>
    </div>
  );
};

export default DriverList;
