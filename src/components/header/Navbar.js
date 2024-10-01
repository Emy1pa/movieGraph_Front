import React from "react";

export default function Navbar({ toggle, setToggle }) {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        <li
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Home
        </li>
        <li
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Movies
        </li>
        <li
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          About Us
        </li>
        <li
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Contact Us
        </li>
        <li
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Register
        </li>
      </ul>
    </nav>
  );
}
