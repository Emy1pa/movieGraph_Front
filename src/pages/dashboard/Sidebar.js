import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="sidebar-header p-3">
        <h1 className="h3 mb-0">MovieApp</h1>
      </div>
      <nav className="sidebar-nav flex-grow-1">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" href="#">
              <i className="bi bi-house-door me-3"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" href="#">
              <i className="bi bi-calendar me-3"></i>
              <span>Reservations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" href="#">
              <i className="bi bi-bar-chart me-3"></i>
              <span>Statistics</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer p-3">
        <button className="btn btn-danger d-flex align-items-center justify-content-center w-100">
          <i className="bi bi-box-arrow-right me-2"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
