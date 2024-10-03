import React, { useState, useEffect } from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import Navbar from "./Navbar";
import Sidebar from "../../pages/dashboard/Sidebar";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="header">
        <HeaderTop
          setToggle={setToggle}
          toggle={toggle}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <HeaderMiddle />
        <Navbar toggle={toggle} setToggle={setToggle} isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}
