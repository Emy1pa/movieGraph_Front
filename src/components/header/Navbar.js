import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggle, setToggle, isLoggedIn }) {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        <Link
          to={"/"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Home
        </Link>
        <Link
          to={"/movies"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Movies
        </Link>
        <Link
          to={"/about"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          About Us
        </Link>
        <Link
          to={"/contact"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Contact Us
        </Link>
        {!isLoggedIn && (
          <Link
            to={"/register"}
            onClick={() => {
              setToggle(false);
            }}
            className="navbar-link"
          >
            Register
          </Link>
        )}
      </ul>
    </nav>
  );
}
