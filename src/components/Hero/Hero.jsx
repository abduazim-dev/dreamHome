import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">Find Your<br/>Dream Home</h1>
            <p className="hero-description">
              Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
            </p>
            <button className="btn-hero">Sign up</button>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" alt="Dream Home"/>
          </div>
        </div>
        <div className="search-bar">
          <div className="search-field">
            <span>📍</span>
            <input type="text" placeholder="Location"/>
          </div>
          <div className="search-field">
            <span>🏠</span>
            <input type="text" placeholder="Type"/>
          </div>
          <div className="search-field">
            <span>💰</span>
            <input type="text" placeholder="Price Range"/>
          </div>
          <button className="btn-search">Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
