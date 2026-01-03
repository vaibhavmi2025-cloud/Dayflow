import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Dayflow HRMS</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
