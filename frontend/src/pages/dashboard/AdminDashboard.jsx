import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">Manage Employees</div>
        <div className="card">Attendance Reports</div>
        <div className="card">Leave Approvals</div>
        <div className="card">Payroll Management</div>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
