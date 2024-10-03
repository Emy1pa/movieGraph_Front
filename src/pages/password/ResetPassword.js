import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./reset.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [email, setEmail] = useState("");
  const { userId, token } = useParams();
  const navigate = useNavigate();

  // Verify token with useEffect
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/password/verify-token/${userId}/${token}`
        );
        if (response.data.message === "Token is valid") {
          setIsValidToken(true);
          setEmail(response.data.email);
        }
      } catch (error) {
        console.log(error);
      }
    };
    verifyToken();
  }, [userId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8800/password/reset-password/${userId}/${token}`,
        { password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.message === "Password reset successful") {
        navigate("/success");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isValidToken) {
    return (
      <div className="reset-password-container">
        <div className="reset-password-content">
          <h3>Reset Password</h3>
          <p>{message || "Invalid or expired token."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-content">
        <h3>Reset Your Password</h3>
        <p>for {email}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
