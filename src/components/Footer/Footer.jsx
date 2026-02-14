import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="logo">🏠 Dwello</div>
            <p>Your trusted partner in finding the perfect home.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#properties">Properties</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📧 info@dwello.com</p>
            <p>📞 +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Dwello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
