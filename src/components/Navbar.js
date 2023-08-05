import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <h1 className="container text-center my-4 title user-select-none">
          News Monkey
          <hr className="border-3" />
        </h1>
      </>
    );
  }
}
