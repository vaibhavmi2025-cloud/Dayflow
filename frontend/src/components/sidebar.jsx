import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => navigate("/employee/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/attendance")}>Attendance</li>
        <li onClick={() => navigate("/leave")}>Leave</li>
        <li onClick={() => navigate("/payroll")}>Payroll</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
