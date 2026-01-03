import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Employee Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">Attendance</div>
        <div className="card">Apply Leave</div>
        <div className="card">Payroll</div>
        <div className="card">Profile</div>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default EmployeeDashboard;
