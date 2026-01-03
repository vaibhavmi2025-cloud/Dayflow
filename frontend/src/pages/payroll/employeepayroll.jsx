import React from "react";

const EmployeePayroll = () => {
  const payroll = {
    basic: 25000,
    hra: 8000,
    allowance: 4000,
    deductions: 3000,
    net: 34000
  };

  return (
    <div className="page-container">
      <h2>My Payroll</h2>

      <p>Basic Salary: ₹{payroll.basic}</p>
      <p>HRA: ₹{payroll.hra}</p>
      <p>Allowances: ₹{payroll.allowance}</p>
      <p>Deductions: ₹{payroll.deductions}</p>
      <h3>Net Salary: ₹{payroll.net}</h3>
    </div>
  );
};

export default EmployeePayroll;
