import React from "react";
import "./RecentTransactions.css";

const transactions = [
  { id: 1, amount: "$65.00", type: "Payable", date: "15/01/2025" },
  { id: 2, amount: "$19.50", type: "Receivable", date: "15/01/2025" },
  { id: 3, amount: "$19.50", type: "Receivable", date: "15/01/2025" },
  { id: 4, amount: "$65.00", type: "Payable", date: "15/01/2025" },
  { id: 5, amount: "$19.50", type: "Receivable", date: "15/01/2025" },
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <div className="transactions-header">
        <h3>Recent transactions</h3>
        <span>Last 7 Transactions this month</span>
        <a href="#">View All</a>
      </div>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-circle"></div>
            <div className="transaction-info">
              <p className="transaction-amount">
                {transaction.amount}{" "}
                <span>Credited to {transaction.type} balance</span>
              </p>
              <span className="transaction-date">{transaction.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
