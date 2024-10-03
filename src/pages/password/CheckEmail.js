import React from "react";
import { useNavigate } from "react-router-dom";
import "./check.css";

export default function CheckEmail() {
  const navigate = useNavigate();

  const handleResend = () => {
    console.log("Resend reset email");
  };

  return (
    <div className="check-email-container">
      {" "}
      <div className="check-email-content">
        {" "}
        <div className="icon">✉️</div>
        <h2>Please check your email</h2>
        <p>
          A link to reset your password has been sent to your email address.
        </p>
        <button onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </div>
  );
}
