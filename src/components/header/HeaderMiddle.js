import React from "react";

export default function HeaderMiddle() {
  return (
    <div className="header-middle">
      <div className="header-middle-logo">
        <b>Movie</b>
        <i className="bi bi-film"></i>
        <b>Show</b>
      </div>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in movie store ..."
        />
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
}
