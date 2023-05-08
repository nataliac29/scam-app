import React from "react";
import logo from "../../logo.png";
import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} className="navbar-logo" alt="logo" />
          <h1 className="navbar-title">Scam Detector</h1>
        </div>
        <div className="navbar-right">
          <p className="navbar-description">Enter a text and we'll tell you if it's a scam.</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;