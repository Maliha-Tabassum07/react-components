import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-light" to="/">
        Express
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-light"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link text-light">
              UserList
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link text-light">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-light">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/post" className="nav-link text-light">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/postAdd" className="nav-link text-light">
              Add post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
