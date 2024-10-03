import React from "react";
import { Link } from "react-router-dom";

export default function HeaderTop({
  setToggle,
  toggle,
  isLoggedIn,
  handleLogout,
}) {
  return (
    <div className="header-top">
      <div
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="header-top-menu"
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-social">
        <Link to="#" className="social-icon">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link to="#" className="social-icon">
          <i className="bi bi-twitter"></i>
        </Link>
        <Link to="#" className="social-icon">
          <i className="bi bi-instagram"></i>
        </Link>
      </div>
      <div className="header-top-text">Welcome To Online Movie Show</div>
      {isLoggedIn ? (
        <div onClick={handleLogout} className="header-top-link">
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </div>
      ) : (
        <Link to={"/login"}>
          <div className="header-top-link">
            <i className="bi bi-person-fill"></i>
            Login
          </div>
        </Link>
      )}
    </div>
  );
}
