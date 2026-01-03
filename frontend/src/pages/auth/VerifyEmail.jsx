import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Email Verification</h2>
      <p>Please check your email and click the verification link.</p>

      <button onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
};

export default VerifyEmail;
