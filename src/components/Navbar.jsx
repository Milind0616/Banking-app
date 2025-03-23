import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo">
        <Link to="/">🏦 BankApp</Link>
      </div>

      {/* Menu Button for Small Screens */}
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/admin" onClick={() => setIsMenuOpen(false)}>Admin</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
