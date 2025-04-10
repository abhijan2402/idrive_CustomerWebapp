import React from "react";
import "./WithdrawMethodList.css";

const WithdrawMethodList = () => {
  return (
    <div className="withdraw-method-list">
      <div className="withdraw-method-listheader">
        <h2>Withdraw Method List</h2>
      </div>
      <div className="tabs">
        <button className="tab active">All</button>
        <button className="tab">Active</button>
        <button className="tab">Inactive</button>
      </div>
      <div className="search-add">
        <div className="searh-add-container"> 
          <input type="text" placeholder="Search here by Method" />
          <button className="search-btn">Search</button>
        </div>
        <div>
          <button className="add-btn">+ Add Method</button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Method Name</th>
              <th>Method Fields</th>
              <th>Default Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mobile Banking</td>
              <td>
                <p>Field Name: service_provider_name</p>
                <p>Type: string</p>
                <p>Placeholder: Bkash</p>
                <p>Is Required: Yes</p>
                <p className="see-all">See All →</p>
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" checked readOnly />
              </td>
              <td>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bank</td>
              <td>
                <p>Field Name: name</p>
                <p>Type: string</p>
                <p>Placeholder: Jack Ma</p>
                <p>Is Required: Yes</p>
                <p className="see-all">See All →</p>
              </td>
              <td>
                <input type="checkbox" checked readOnly />
              </td>
              <td>
                <input type="checkbox" checked readOnly />
              </td>
              <td>
                <button className="edit-btn">✏️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawMethodList;
