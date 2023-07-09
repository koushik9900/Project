import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">SwipTory</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/Register" className="Register">
          <li>Registernow</li>
        </Link>
        <Link to="/SignIn" className="SignIn">
          <li>SignIn</li>
        </Link>
      </ul>
      <button
        className="mobile-menue-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};
export default Navbar;
