import React from "react";
import { useNavigate } from "react-router-dom";
import "./success.css";
export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      {" "}
      {/* Changed class name */}
      <div className="success-content">
        {" "}
        {/* Added a class for content */}
        <div className="icon">✅</div>
        <h2>Password Reset Successful!</h2>
        <button onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </div>
  );
}
