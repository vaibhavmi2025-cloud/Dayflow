import React from "react";

const LeaveStatus = () => {
  const leaves = [
    { type: "Paid", dates: "1 Jan - 2 Jan", status: "Approved" },
    { type: "Sick", dates: "5 Jan - 5 Jan", status: "Pending" }
  ];

  return (
    <div className="page-container">
      <h2>My Leave Status</h2>

      <ul>
        {leaves.map((leave, index) => (
          <li key={index}>
            {leave.type} | {leave.dates} | {leave.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveStatus;
