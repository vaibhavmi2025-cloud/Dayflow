import React from "react";

const AdminPayroll = () => {
  const employees = [
    { name: "Employee A", salary: 34000 },
    { name: "Employee B", salary: 30000 }
  ];

  return (
    <div className="page-container">
      <h2>Payroll Management</h2>

      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - ₹{emp.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPayroll;
