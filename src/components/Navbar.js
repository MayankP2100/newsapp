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
              data-bs-toggle="offcanvas"
              data-bs-target=".offcanvas.offcanvas-end"
              aria-controls="#navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                data-bs-target=".offcanvas.offcanvas-end"
              ></span>
            </button>
            <div
              className="offcanvas offcanvas-end offcanvas-size-sm"
              id="navbarNavDropdown"
              data-bs-backdrop="static"
              style={{overflow: "auto"}}
            >
              <div className="offcanvas-header">
                <h4 className="offcanvas-title p-2">Categories</h4>
                <button
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <hr className="border-2" />
              <ul className="navbar-nav p-3">
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
                
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
