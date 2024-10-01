import React, { useState } from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import Navbar from "./Navbar";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="header">
        <HeaderTop setToggle={setToggle} toggle={toggle} />
        <HeaderMiddle />
        <Navbar toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
}
