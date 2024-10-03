import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Calendar, BarChart2, LogOut } from "lucide-react";
import "./sidebar.css";

const Sidebar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");
    // Update the login state
    setIsLoggedIn(false);
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to={"/"}>
          <h1>MovieApp</h1>
        </Link>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {[
            { icon: Home, text: "Home", href: "/" },
            { icon: Calendar, text: "Reservations", href: "/reservations" },
            { icon: BarChart2, text: "Statistics", href: "/statistics" },
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="nav-link">
                <item.icon className="icon" />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isLoggedIn && (
        <div className="sidebar-footer">
          <button className="btn-logout" onClick={handleLogout}>
            <LogOut className="icon" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
