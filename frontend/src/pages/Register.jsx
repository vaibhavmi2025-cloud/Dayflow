import { useState } from "react";
import API from "../services/api";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert
} from "@mui/material";


import { useRef } from "react";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(password) {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

function Register() {
  const [form, setForm] = useState({
    employeeId: "",
    email: "",
    password: "",
    role: "employee"
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});
  const cardRef = useRef();

  const validate = () => {
    if (!form.employeeId) return "Employee ID is required";
    if (!form.email) return "Email is required";
    if (!validateEmail(form.email)) return "Enter a valid email address";
    if (!form.password) return "Password is required";
    if (!validatePassword(form.password)) return "Password must be 8+ chars, 1 uppercase, 1 number";
    return "";
  };

  const register = async () => {
    setError("");
    setSuccess("");
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
      return;
    }
    try {
      const res = await API.post("/auth/register", form);
      localStorage.setItem("role", res.data.user?.role || form.role);
      setSuccess("Registration successful! Please login.");
      setTimeout(() => window.location.href = "/", 1200);
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.default" }}>
      <Card ref={cardRef} sx={{ width: 400, p: 3, boxShadow: 6, borderRadius: 4, bgcolor: "#f8fbff" }}>
        <CardContent>
          <Typography variant="h5" align="center" fontWeight={600} mb={2} color="primary.main">
            Create Account
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
          <TextField
            label="Employee ID"
            fullWidth
            margin="normal"
            value={form.employeeId}
            onChange={e => setForm({ ...form, employeeId: e.target.value })}
            onBlur={() => setTouched(t => ({ ...t, employeeId: true }))}
            error={touched.employeeId && !form.employeeId}
            helperText={touched.employeeId && !form.employeeId ? "Required" : ""}
            inputProps={{ maxLength: 20, "aria-label": "Employee ID" }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            onBlur={() => setTouched(t => ({ ...t, email: true }))}
            error={touched.email && (!form.email || !validateEmail(form.email))}
            helperText={touched.email && !form.email ? "Required" : touched.email && !validateEmail(form.email) ? "Invalid email" : ""}
            autoComplete="email"
            inputProps={{ "aria-label": "Email address" }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            onBlur={() => setTouched(t => ({ ...t, password: true }))}
            error={touched.password && (!form.password || !validatePassword(form.password))}
            helperText={touched.password && !form.password ? "Required" : touched.password && !validatePassword(form.password) ? "Min 8 chars, 1 uppercase, 1 number" : ""}
            autoComplete="new-password"
            inputProps={{ "aria-label": "Password" }}
          />
          <TextField
            label="Role"
            select
            fullWidth
            margin="normal"
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
            inputProps={{ "aria-label": "Role" }}
          >
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="admin">HR / Admin</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.2, fontWeight: 700, fontSize: 17, borderRadius: 2, boxShadow: 2, letterSpacing: 1 }}
            onClick={register}
            aria-label="Create Account"
          >
            Create Account
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
