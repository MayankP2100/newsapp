import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="container navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand title" href="/">
              News Monkey
            </a>
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Technology
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        India
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-2 border-top border-bottom"
                        href="/"
                      >
                        United States
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Japan
                      </a>
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
