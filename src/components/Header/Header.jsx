import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">Dwello</span>
          </div>
          
          <nav className="nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/properties" className="nav-link">Products</NavLink>
            <a href="#agents" className="nav-link">Agents</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-actions">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">👤</button>
            <button className="btn-signup">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
