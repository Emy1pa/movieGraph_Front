import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          <span className="title-highlight">Discover</span> the World of Cinema
        </h1>
        <p className="home-description">
          Welcome to MovieShow, your ultimate destination for all things film.
          Explore our vast collection of movies, from timeless classics to the
          latest blockbusters.
        </p>
        <Link to="/movies" className="home-cta-button">
          Explore Movies
          <span className="button-icon">→</span>
        </Link>
      </div>
      <div className="home-decoration">
        <div className="deco-circle"></div>
        <div className="deco-line"></div>
      </div>
    </div>
  );
};

export default HomePage;
