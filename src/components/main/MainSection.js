import React from "react";
import "./main.css";
const MainSection = () => {
  return (
    <main className="main-section">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Content</h1>
          <p>Explore the latest and greatest in entertainment</p>
          <button className="cta-button">
            Get Started <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Join our newsletter for the latest news and exclusive content</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
};

export default MainSection;
