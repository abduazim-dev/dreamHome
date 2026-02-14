import React from 'react';
import './HelpSection.css';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="container">
        <div className="help-grid">
          <div className="help-image">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Home"/>
          </div>
          <div className="help-content">
            <h2 className="help-title">We Help You To Find Your Dream Home</h2>
            <p className="help-description">
              From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="stat-number">8K+</h3>
                <p className="stat-label">Houses Available</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">6K+</h3>
                <p className="stat-label">Houses Sold</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">2K+</h3>
                <p className="stat-label">Trusted Agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
