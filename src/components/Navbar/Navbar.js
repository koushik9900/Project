import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Register from "/Users/mymac/Desktop/vscode/Final_project/my-app/src/components/Register.js";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">SwipTory</h3>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link
            to="/Register"
            className="Register"
            onClick={() => setForm(true)}
          >
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
      {form && <Register setForm={setForm} />}
    </div>
  );
};
export default Navbar;
