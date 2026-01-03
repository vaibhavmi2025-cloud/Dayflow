import React from "react";

const LeaveApproval = () => {
  const requests = [
    { name: "Employee A", type: "Paid", dates: "1 Jan - 2 Jan" },
    { name: "Employee B", type: "Sick", dates: "3 Jan - 3 Jan" }
  ];

  return (
    <div className="page-container">
      <h2>Leave Approval</h2>

      {requests.map((req, index) => (
        <div key={index} className="card">
          <p>{req.name}</p>
          <p>{req.type}</p>
          <p>{req.dates}</p>
          <button>Approve</button>
          <button>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default LeaveApproval;
