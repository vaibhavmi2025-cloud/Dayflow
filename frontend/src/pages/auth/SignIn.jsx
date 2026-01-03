import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP AUTH LOGIC
    if (email === "admin@dayflow.com") {
      localStorage.setItem("token", "dummy_token");
      localStorage.setItem("role", "ADMIN");
      navigate("/admin/dashboard");
    } else {
      localStorage.setItem("token", "dummy_token");
      localStorage.setItem("role", "EMPLOYEE");
      navigate("/employee/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p onClick={() => navigate("/signup")}>Create Account</p>
    </div>
  );
};

export default SignIn;
