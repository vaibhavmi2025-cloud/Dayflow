import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: 10, background: "#222", color: "#fff" }}>
      <Link to="/dashboard" style={{ color: "#fff", marginRight: 10 }}>
        Dashboard
      </Link>
      <Link to="/attendance" style={{ color: "#fff", marginRight: 10 }}>
        Attendance
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
