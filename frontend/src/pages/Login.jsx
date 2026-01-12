import { useState } from "react";
import API from "../services/api";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  Alert
} from "@mui/material";

import { useRef } from "react";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});
  const cardRef = useRef();

  const validate = () => {
    if (!email) return "Email is required";
    if (!validateEmail(email)) return "Enter a valid email address";
    if (!password) return "Password is required";
    return "";
  };

  const login = async () => {
    setError("");
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
      return;
    }
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user?.role || "employee");
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.default" }}>
      <Card ref={cardRef} sx={{ width: 370, p: 3, boxShadow: 6, borderRadius: 4, bgcolor: "#f8fbff" }}>
        <CardContent>
          <Typography variant="h5" align="center" fontWeight={600} mb={2} color="primary.main">
            Sign In
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => setTouched(t => ({ ...t, email: true }))}
            error={touched.email && (!email || !validateEmail(email))}
            helperText={touched.email && !email ? "Required" : touched.email && !validateEmail(email) ? "Invalid email" : ""}
            autoComplete="email"
            inputProps={{ "aria-label": "Email address" }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={() => setTouched(t => ({ ...t, password: true }))}
            error={touched.password && !password}
            helperText={touched.password && !password ? "Required" : ""}
            autoComplete="current-password"
            inputProps={{ "aria-label": "Password" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 1, py: 1.2, fontWeight: 700, fontSize: 17, borderRadius: 2, boxShadow: 2, letterSpacing: 1 }}
            onClick={login}
            aria-label="Sign In"
          >
            Sign In
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Link href="/register" underline="hover">
              Create new account
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Forgot password?
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
