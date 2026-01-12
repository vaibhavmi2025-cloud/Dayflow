import { Navigate } from "react-router-dom";

export function RequireRole({ children, role }) {
  const userRole = localStorage.getItem("role");
  if (role && userRole !== role) return <Navigate to="/dashboard" />;
  return children;
}
