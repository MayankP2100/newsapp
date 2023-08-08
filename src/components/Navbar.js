import React, { Component } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  render() {
    const handleArrowDown = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    return (
      <>
        <h1 className="container text-center mt-4 title user-select-none">
          News Monkey
          <hr className="border-3" />
          <div className="d-flex justify-content-center">
            <h6 className="text-center px-5">Top Headlines</h6>
            <button className="btn btn-sm btn-success" onClick={handleArrowDown} style={{width: "3rem"}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
            </button>
          </div>
        </h1>
      </>
    );
  }
}
