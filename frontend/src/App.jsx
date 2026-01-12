import EmployeeManagement from "./pages/EmployeeManagement";
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <RequireRole role="admin">
                <Layout>
                  <EmployeeManagement />
                </Layout>
              </RequireRole>
            </ProtectedRoute>
          }
        />
import Reports from "./pages/Reports";
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <RequireRole role="admin">
                <Layout>
                  <Reports />
                </Layout>
              </RequireRole>
            </ProtectedRoute>
          }
        />
import Payroll from "./pages/Payroll";
        <Route
          path="/payroll"
          element={
            <ProtectedRoute>
              <Layout>
                <Payroll />
              </Layout>
            </ProtectedRoute>
          }
        />
import Leave from "./pages/Leave";
        <Route
          path="/leave"
          element={
            <ProtectedRoute>
              <Layout>
                <Leave />
              </Layout>
            </ProtectedRoute>
          }
        />
import Profile from "./pages/Profile";
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Attendance from "./pages/Attendance";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import { RequireRole } from "./components/RequireRole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                {localStorage.getItem("role") === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Layout>
                <Attendance />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/payroll"
          element={
            <ProtectedRoute>
              <RequireRole role="admin">
                <Layout>
                  <Payroll />
                </Layout>
              </RequireRole>
            </ProtectedRoute>
          }
        />
        <Route
          path="/leave"
          element={
            <ProtectedRoute>
              <Layout>
                <Leave />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
