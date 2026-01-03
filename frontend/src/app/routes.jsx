import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthGuard from "./authGuard";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

import EmployeeDashboard from "../pages/dashboard/EmployeeDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Routes */}
      <Route
        path="/employee/dashboard"
        element={
          <AuthGuard role="EMPLOYEE">
            <EmployeeDashboard />
          </AuthGuard>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <AuthGuard role="ADMIN">
            <AdminDashboard />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
