import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="container navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand title" to="/">
              News Monkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".collapse.navbar-collapse"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item border-2 border-top border-bottom"
                        to="/"
                      >
                        United States
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Japan
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h6 className="d-flex  justify-content-center text-center px-5">
            Top Headlines
          </h6>
        </div>
      </>
    );
  }
}
