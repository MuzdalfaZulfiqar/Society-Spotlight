
// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffffff', borderBottom: '5px solid #1D1B5D' }}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ color: '#1D1B5D', fontWeight: 'bold' }}>Society Spotlight</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: '#1D1B5D' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/society" style={{ color: '#1D1B5D' }}>Societies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events" style={{ color: '#1D1B5D' }}>Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ color: '#1D1B5D' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{ color: '#1D1B5D' }}>Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="btn btn-primary" href="/signUp" style={{ backgroundColor: '#1D1B5D', borderColor: '#1D1B5D' }}>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
