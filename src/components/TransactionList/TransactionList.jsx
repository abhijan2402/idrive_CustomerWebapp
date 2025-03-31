import React, { useState } from "react";
import "./TransactionList.css";

const TransactionList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage, setTransactionsPerPage] = useState(10);

  const columns = [
    "SL",
    "Transaction Id",
    "Reference",
    "Transaction Date",
    "Transaction To",
    "Credit",
    "Debit",
    "Balance",
  ];

  const data = new Array(50).fill(null).map((_, index) => ({
    sl: index + 1,
    transactionId: `txn-${Math.random().toString(36).substr(2, 10)}`,
    reference:
      index % 3 === 0 ? "-" : `ref-${Math.random().toString(36).substr(2, 8)}`,
    transactionDate: "15-10-2023 04:51 PM",
    transactionTo: index % 2 === 0 ? "Super Admin" : "David Jack",
    credit: `$${(Math.random() * 100).toFixed(2)}`,
    debit: `$${(Math.random() * 50).toFixed(2)}`,
    balance: `$${(Math.random() * 5000).toFixed(2)}`,
  }));

  const filteredData = data.filter((item) =>
    item.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredData.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(filteredData.length / transactionsPerPage);

  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <h2 className="title">Transaction List</h2>
        <p>
          Total Transation:<span>200</span>
        </p>
      </div>
      <div className="transationlist-utility">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here by Transaction Id"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
        <button className="download-btn">Download</button>
      </div>
      <div className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((item, index) => (
              <tr key={index}>
                <td>{item.sl}</td>
                <td>{item.transactionId}</td>
                <td>{item.reference}</td>
                <td>{item.transactionDate}</td>
                <td>{item.transactionTo}</td>
                <td>{item.credit}</td>
                <td>{item.debit}</td>
                <td>{item.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <i class="bi bi-chevron-right"></i>
        </button>

        <div>
          <select
            value={transactionsPerPage}
            onChange={(e) => setTransactionsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
