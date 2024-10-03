import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./forgot.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8800/password/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Check your email for the reset link.");
        navigate("/check-email");
      } else {
        console.error("Error response from server:", response.data);
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error sending reset email:", error);
      setMessage("An error occurred while sending the email.");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h3>Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
          {message && <p className="message">{message}</p>}{" "}
        </form>
      </div>
    </div>
  );
}
